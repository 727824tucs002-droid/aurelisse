/**
 * Aurelisse — L'Éclat de l'Élégance
 * Simplified, 100% Reliable Static E-Commerce Engine (Option A SPA Architecture)
 * Zero Backend Calls • Relative Paths Only • Synchronous Section Rendering
 *
 * PATCH NOTE: All onerror image fallbacks now generate a UNIQUE placeholder
 * per product/category (using its own name), instead of pointing every
 * broken image to the same shared Unsplash photo. This fixes the
 * "repeated images" symptom even before the root cause in data.js is fixed.
 */
 
import { BRAND_CONFIG, CATEGORIES, PRODUCTS } from './data.js';
 
// Generates a guaranteed-to-load, unique placeholder image URL from any label
function fallbackImage(label, size = 800) {
  const text = encodeURIComponent(label || 'Aurelisse');
  return `https://placehold.co/${size}x${size}/FAF7F2/1A1A1A?text=${text}`;
}
 
class AurelisseEngine {
  constructor() {
    this.activeCategory = 'All';
    this.searchQuery = '';
    this.cart = [];
    this.init();
  }
 
  init() {
    // Load cart from localStorage if available
    try {
      const saved = localStorage.getItem('aurelisse_cart');
      if (saved) this.cart = JSON.parse(saved);
    } catch (e) {
      this.cart = [];
    }
 
    this.updateCartBadge();
    this.renderHomeViews();
    this.setupEventListeners();
 
    // Default to Home section
    this.showSection('home');
  }
 
  setupEventListeners() {
    // Handle navigation links synchronously without hash dependency
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetSection = link.getAttribute('data-section');
        if (targetSection) {
          this.showSection(targetSection);
        }
      });
    });
  }
 
  /* --- SYNCHRONOUS SECTION ROUTER (OPTION A) --- */
  showSection(sectionId) {
    // Hide all view sections synchronously
    document.querySelectorAll('.app-view').forEach(view => {
      view.style.display = 'none';
      view.classList.remove('active');
    });
 
    // Update active state on navigation items
    document.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-section') === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
 
    // Show targeted section
    let target = document.getElementById(`view-${sectionId}`);
    if (!target) {
      target = document.getElementById('view-home');
    }
 
    if (target) {
      target.style.display = 'block';
      target.classList.add('active');
    }
 
    // Trigger data rendering for specific sections right in the same handler
    if (sectionId === 'products' || sectionId === 'shop') {
      this.renderProductsGrid();
    } else if (sectionId === 'cart') {
      this.renderCartView();
    } else if (sectionId === 'home') {
      this.renderHomeViews();
    }
 
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
 
  /* --- RENDER HOME VIEWS --- */
  renderHomeViews() {
    // Render 4 Category Cards on Home
    const homeCatContainer = document.getElementById('home-categories-grid');
    if (homeCatContainer) {
      homeCatContainer.innerHTML = CATEGORIES.map(cat => `
        <div class="category-card" onclick="app.filterCategory('${cat.id}')" style="cursor: pointer;">
          <img src="${cat.image}" alt="${cat.name}" class="category-card-img" onerror="this.onerror=null; this.src='${fallbackImage(cat.name, 600)}';" />
          <div class="category-card-overlay"></div>
          <div class="category-card-info">
            <span>Discover ${cat.count} Pieces</span>
            <h3>${cat.name}</h3>
          </div>
        </div>
      `).join('');
    }
 
    // Render 6 Featured Products on Home
    const homeProdContainer = document.getElementById('home-trending-grid');
    if (homeProdContainer) {
      const featured = PRODUCTS.slice(0, 6);
      homeProdContainer.innerHTML = featured.map(p => this.createProductCardHTML(p)).join('');
    }
  }
 
  /* --- PRODUCT CARD HTML GENERATOR --- */
  createProductCardHTML(p) {
    return `
      <div class="product-card" data-id="${p.id}">
        <div class="product-card-media" onclick="app.openProductDetail('${p.id}')" style="cursor: pointer;">
          <img src="${p.image}" alt="${p.name}" class="product-card-img" loading="lazy" onerror="this.onerror=null; this.src='${fallbackImage(p.name, 800)}';" />
        </div>
        <div class="product-card-body">
          <span class="product-brand">${p.brand || 'Aurelisse'}</span>
          <a href="javascript:void(0)" onclick="app.openProductDetail('${p.id}')" class="product-title">${p.name}</a>
          <div class="product-price-row">
            <div class="product-price">$${p.price.toLocaleString()}</div>
            <button class="btn btn-primary" style="padding: 0.6rem 1.2rem; font-size: 0.75rem;" onclick="app.addToCart('${p.id}')">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }
 
  /* --- RENDER PRODUCTS GRID & FILTERS --- */
  renderProductsGrid() {
    const container = document.getElementById('products-main-grid');
    const titleEl = document.getElementById('products-page-title');
    if (!container) return;
 
    if (titleEl) {
      titleEl.innerText = this.activeCategory === 'All' ? 'Complete Place Vendôme Collection (20 Masterpieces)' : `${this.activeCategory} Collection`;
    }
 
    // Highlight active pill button
    document.querySelectorAll('.filter-pill-btn').forEach(btn => {
      if (btn.getAttribute('data-cat') === this.activeCategory) {
        btn.classList.add('active-pill');
        btn.style.background = '#C9A961';
        btn.style.color = '#FFFFFF';
      } else {
        btn.classList.remove('active-pill');
        btn.style.background = 'transparent';
        btn.style.color = '#1A1A1A';
      }
    });
 
    let filtered = [...PRODUCTS];
 
    if (this.activeCategory !== 'All') {
      filtered = filtered.filter(p => p.category === this.activeCategory);
    }
 
    if (this.searchQuery && this.searchQuery.trim() !== '') {
      const q = this.searchQuery.toLowerCase().trim();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q)
      );
    }
 
    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 5rem 0;">
          <h3 style="margin-bottom: 1rem;">No Masterpieces Found</h3>
          <p>Try clearing your search query or selecting a different category.</p>
          <button class="btn btn-primary" style="margin-top: 1.5rem;" onclick="app.resetFilters()">Reset All Filters</button>
        </div>
      `;
    } else {
      container.innerHTML = filtered.map(p => this.createProductCardHTML(p)).join('');
    }
  }
 
  filterCategory(category) {
    this.activeCategory = category;
    this.showSection('products');
  }
 
  searchProducts(query) {
    this.searchQuery = query;
    this.renderProductsGrid();
  }
 
  resetFilters() {
    this.activeCategory = 'All';
    this.searchQuery = '';
    const searchEl = document.getElementById('shop-search-input');
    if (searchEl) searchEl.value = '';
    this.renderProductsGrid();
  }
 
  /* --- PRODUCT DETAIL VIEW (SYNCHRONOUS & RELIABLE) --- */
  openProductDetail(productId) {
    const p = PRODUCTS.find(x => x.id === productId);
    if (!p) {
      alert("Product details not found.");
      return;
    }
 
    const container = document.getElementById('view-product-detail');
    if (!container) return;
 
    container.innerHTML = `
      <div class="section-padding" style="max-width: 1200px; margin: 0 auto;">
        <button class="btn btn-outline" style="margin-bottom: 2rem; padding: 0.5rem 1.2rem; font-size: 0.8rem;" onclick="app.showSection('products')">
          ← Back to Collection
        </button>
        
        <div class="detail-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 4rem; align-items: start;">
          <div class="detail-media" style="background: var(--bg-card); border: 1px solid var(--border-gold); padding: 2rem; text-align: center;">
            <img src="${p.image}" alt="${p.name}" style="max-width: 100%; height: auto; max-height: 520px; object-fit: contain;" onerror="this.onerror=null; this.src='${fallbackImage(p.name, 1200)}';" />
          </div>
 
          <div class="detail-info">
            <span class="sub-label" style="display: block; margin-bottom: 0.5rem; color: var(--accent-gold); font-size: 0.85rem; letter-spacing: 0.15em; text-transform: uppercase;">
              ${p.brand} • ${p.category}
            </span>
            <h1 style="font-family: var(--font-serif); font-size: 2.4rem; margin-bottom: 1rem; color: var(--text-primary);">
              ${p.name}
            </h1>
            <div style="font-size: 1.6rem; font-weight: 600; color: var(--text-primary); margin-bottom: 1.5rem;">
              $${p.price.toLocaleString()}
            </div>
            
            <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 2rem;">
              ${p.description}
            </p>
 
            <div style="background: var(--bg-card); border: 1px solid var(--border-gold); padding: 1.5rem; margin-bottom: 2.5rem;">
              <strong style="display: block; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.5rem; color: var(--accent-gold);">
                Material & Specifications
              </strong>
              <p style="margin: 0; font-size: 0.95rem; color: var(--text-primary);">
                ${p.material}
              </p>
            </div>
 
            <div style="display: flex; flex-direction: column; gap: 1rem;">
              <button class="btn btn-primary" style="width: 100%; padding: 1.1rem; font-size: 1rem; letter-spacing: 0.12em;" onclick="app.addToCart('${p.id}')">
                Add to Shopping Bag
              </button>
              <button class="btn btn-gold" style="width: 100%; padding: 1.1rem; font-size: 1rem; letter-spacing: 0.12em; background: #25D366; border-color: #25D366; color: white;" onclick="app.orderViaWhatsApp('${p.id}')">
                Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
 
    // Immediately show the detail section synchronously
    this.showSection('product-detail');
  }
 
  /* --- CART OPERATIONS --- */
  addToCart(productId) {
    const p = PRODUCTS.find(x => x.id === productId);
    if (!p) return;
 
    const existing = this.cart.find(item => item.id === p.id);
    if (existing) {
      existing.qty += 1;
    } else {
      this.cart.push({
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image,
        qty: 1
      });
    }
 
    this.saveCart();
    this.updateCartBadge();
    
    // Show cart view or clean notification
    this.showCartNotification(p.name);
  }
 
  showCartNotification(itemName) {
    const toast = document.getElementById('cart-toast');
    if (toast) {
      toast.innerText = `${itemName} added to your shopping bag.`;
      toast.style.display = 'block';
      setTimeout(() => { toast.style.display = 'none'; }, 3000);
    }
  }
 
  saveCart() {
    try {
      localStorage.setItem('aurelisse_cart', JSON.stringify(this.cart));
    } catch (e) {
      // Memory state fallback if storage disabled
    }
  }
 
  updateCartBadge() {
    const count = this.cart.reduce((sum, item) => sum + item.qty, 0);
    const badge = document.getElementById('cart-count');
    if (badge) {
      badge.innerText = count;
      badge.style.display = count > 0 ? 'inline-block' : 'none';
    }
  }
 
  renderCartView() {
    const container = document.getElementById('cart-items-container');
    const totalEl = document.getElementById('cart-total-amount');
    if (!container) return;
 
    if (this.cart.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 4rem 1rem;">
          <h3 style="margin-bottom: 1rem; font-family: var(--font-serif);">Your Shopping Bag is Empty</h3>
          <p style="margin-bottom: 2rem; color: var(--text-secondary);">Discover our Place Vendôme high jewellery creations.</p>
          <button class="btn btn-primary" onclick="app.showSection('products')">Explore Collection</button>
        </div>
      `;
      if (totalEl) totalEl.innerText = '$0';
      return;
    }
 
    let total = 0;
    container.innerHTML = this.cart.map((item, idx) => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      return `
        <div class="cart-item-row" style="display: flex; gap: 1.5rem; align-items: center; padding: 1.5rem 0; border-bottom: 1px solid var(--border-gold);">
          <img src="${item.image}" alt="${item.name}" style="width: 80px; height: 80px; object-fit: contain; border: 1px solid var(--border-gold); background: var(--bg-card);" onerror="this.onerror=null; this.src='${fallbackImage(item.name, 200)}';" />
          <div style="flex: 1;">
            <h4 style="margin: 0 0 0.4rem 0; font-family: var(--font-serif); font-size: 1.2rem;">${item.name}</h4>
            <div style="color: var(--text-secondary); font-size: 0.9rem;">$${item.price.toLocaleString()} each</div>
          </div>
          <div style="display: flex; align-items: center; gap: 0.8rem;">
            <button class="btn btn-outline" style="padding: 0.3rem 0.7rem; font-size: 0.9rem;" onclick="app.updateCartQty('${item.id}', -1)">-</button>
            <span style="font-weight: 600; min-width: 24px; text-align: center;">${item.qty}</span>
            <button class="btn btn-outline" style="padding: 0.3rem 0.7rem; font-size: 0.9rem;" onclick="app.updateCartQty('${item.id}', 1)">+</button>
          </div>
          <div style="font-weight: 600; min-width: 100px; text-align: right; font-size: 1.1rem;">
            $${itemTotal.toLocaleString()}
          </div>
          <button style="background: none; border: none; font-size: 1.2rem; cursor: pointer; color: #999;" onclick="app.removeFromCart('${item.id}')" title="Remove">×</button>
        </div>
      `;
    }).join('');
 
    if (totalEl) totalEl.innerText = `$${total.toLocaleString()}`;
  }
 
  updateCartQty(productId, delta) {
    const item = this.cart.find(x => x.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      this.removeFromCart(productId);
      return;
    }
    this.saveCart();
    this.updateCartBadge();
    this.renderCartView();
  }
 
  removeFromCart(productId) {
    this.cart = this.cart.filter(x => x.id !== productId);
    this.saveCart();
    this.updateCartBadge();
    this.renderCartView();
  }
 
  /* --- WHATSAPP ORDERING ENGINE --- */
  orderViaWhatsApp(productId, qty = 1) {
    const p = PRODUCTS.find(x => x.id === productId);
    if (!p) return;
    const phone = BRAND_CONFIG.whatsappNumber || "919999999999";
    const rawMsg = `Hello Aurelisse,\nI would like to order the following piece.\nProduct Name: ${p.name}\nPrice: $${p.price.toLocaleString()}\nQuantity: ${qty}\nPlease assist me with my order.\nThank you.`;
    const encoded = encodeURIComponent(rawMsg);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
  }
 
  orderCartViaWhatsApp() {
    if (this.cart.length === 0) {
      alert("Your shopping bag is currently empty.");
      return;
    }
    const phone = BRAND_CONFIG.whatsappNumber || "919999999999";
    const itemsText = this.cart.map(item => `${item.name} ($${item.price.toLocaleString()} x ${item.qty})`).join("\n");
    const total = this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const rawMsg = `Hello Aurelisse,\nI would like to order the following pieces from my cart:\n\n${itemsText}\n\nTotal: $${total.toLocaleString()}\nPlease assist me with my order.\nThank you.`;
    const encoded = encodeURIComponent(rawMsg);
    window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
  }
 
  /* --- CONTACT FORM SUBMISSION --- */
  handleContactSubmit(e) {
    e.preventDefault();
    const feedback = document.getElementById('contact-feedback-message');
    const form = document.getElementById('contact-form');
    if (feedback) {
      feedback.style.display = 'block';
      feedback.innerHTML = `
        <div style="background: var(--bg-card); border: 1px solid var(--border-gold); padding: 2rem; text-align: center; margin-top: 1.5rem;">
          <h4 style="font-family: var(--font-serif); font-size: 1.4rem; margin-bottom: 0.5rem; color: var(--text-primary);">Thank You for Reaching Out</h4>
          <p style="margin: 0; color: var(--text-secondary);">A Senior Place Vendôme Concierge will contact you within 4 business hours.</p>
        </div>
      `;
    }
    if (form) form.reset();
  }
}
 
// Instantiate global app engine
window.app = new AurelisseEngine();
