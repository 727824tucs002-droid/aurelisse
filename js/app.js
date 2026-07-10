/**
 * Aurelisse — L'Éclat de l'Élégance
 * Master Application Controller & ES6 Luxury Engine
 * 15+ Years Award-Winning Senior UI/UX Architecture
 */

import {
  BRAND_CONFIG,
  HERO_SLIDES,
  CATEGORIES,
  PRODUCTS,
  JOURNAL_POSTS,
  FAQS,
  TIMELINE,
  TESTIMONIALS,
  OFFERS_DATA
} from './data.js';

class AurelisseEngine {
  constructor() {
    this.cart = JSON.parse(localStorage.getItem('aurelisse_cart')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('aurelisse_wishlist')) || [];
    this.compareList = JSON.parse(localStorage.getItem('aurelisse_compare')) || [];
    this.currentSlide = 0;
    this.activeCategory = 'All';
    this.activeSort = 'featured';
    this.appliedCoupon = null;
    this.isGiftWrapped = false;
    this.searchQuery = '';

    this.init();
  }

  init() {
    this.setupPageLoader();
    this.setupRouter();
    this.setupNavbar();
    this.setupHeroSlider();
    this.setupScrollAnimations();
    this.setupEventListeners();
    this.renderBadgeCounts();
    this.renderHomeViews();
  }

  /* --- PAGE LOADER --- */
  setupPageLoader() {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const loader = document.getElementById('page-loader');
        if (loader) {
          loader.style.opacity = '0';
          loader.style.visibility = 'hidden';
        }
      }, 900);
    });
  }

  /* --- ROUTER & SPA NAVIGATION --- */
  setupRouter() {
    window.addEventListener('hashchange', () => this.handleRoute());
    // Initial route
    setTimeout(() => this.handleRoute(), 100);
  }

  handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const [viewName, queryStr] = hash.split('?');
    
    // Hide all views
    document.querySelectorAll('.app-view').forEach(v => v.style.display = 'none');
    
    const targetView = document.getElementById(`view-${viewName}`);
    if (targetView) {
      targetView.style.display = 'block';
    } else {
      const v404 = document.getElementById('view-404');
      if (v404) v404.style.display = 'block';
    }

    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${viewName}`);
    });

    // Close mobile menu if open
    document.querySelector('.nav-menu')?.classList.remove('active');

    // Scroll top with smooth behavior
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Handle specific view rendering
    if (viewName === 'products') {
      const params = new URLSearchParams(queryStr);
      const catParam = params.get('category');
      if (catParam) this.activeCategory = catParam;
      this.renderProductsView();
    } else if (viewName === 'product-details') {
      const params = new URLSearchParams(queryStr);
      const id = params.get('id');
      if (id) this.renderProductDetailView(id);
    } else if (viewName === 'cart') {
      this.openCartDrawer();
    } else if (viewName === 'wishlist') {
      this.renderWishlistView();
    } else if (viewName === 'categories') {
      this.renderCategoriesView();
    } else if (viewName === 'about') {
      this.renderAboutView();
    } else if (viewName === 'offers') {
      this.renderOffersView();
    } else if (viewName === 'journal') {
      this.renderJournalView();
    } else if (viewName === 'faqs') {
      this.renderFaqsView();
    } else if (viewName === 'home') {
      this.renderHomeViews();
    }

    // Trigger scroll animations for new view
    setTimeout(() => this.triggerScrollAnimations(), 150);
  }

  /* --- NAVBAR & THEME TOGGLE --- */
  setupNavbar() {
    const navbar = document.querySelector('.navbar');
    const scrollProgress = document.getElementById('scroll-progress');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      // Progress bar calculation
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0 && scrollProgress) {
        const scrolled = (scrollY / docHeight) * 100;
        scrollProgress.style.width = `${scrolled}%`;
      }
    });

    // Dark mode toggle
    const themeBtn = document.getElementById('toggle-theme');
    const savedTheme = localStorage.getItem('aurelisse_theme') || 'light';
    if (savedTheme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');

    themeBtn?.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('aurelisse_theme', 'light');
        this.showToast('Switched to Ivory Light Mode');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('aurelisse_theme', 'dark');
        this.showToast('Switched to Charcoal Dark Mode');
      }
    });

    // Hamburger
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger?.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  /* --- HERO SLIDER --- */
  setupHeroSlider() {
    const sliderContainer = document.getElementById('hero-slider-container');
    if (!sliderContainer) return;

    sliderContainer.innerHTML = HERO_SLIDES.map((slide, idx) => `
      <div class="hero-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
        <div class="hero-bg" style="background-image: url('${slide.image}')"></div>
        <div class="hero-overlay"></div>
        <div class="hero-particles">
          ${Array.from({ length: 18 }).map(() => `
            <div class="particle" style="left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation-delay: ${Math.random() * 5}s;"></div>
          `).join('')}
        </div>
        <div class="hero-content">
          <span class="hero-subtitle">${slide.subtitle}</span>
          <h1 class="hero-title">${slide.title}</h1>
          <p class="hero-desc">${slide.description}</p>
          <div class="hero-ctas">
            <a href="${slide.link}" class="btn btn-gold">${slide.ctaText}</a>
            ${slide.secondaryCta ? `<a href="${slide.secondaryCta}" class="btn btn-outline" style="border-color: #FAF7F2; color: #FAF7F2;">${slide.secondaryCtaText}</a>` : ''}
          </div>
        </div>
      </div>
    `).join('');

    // Slow auto slider (7 seconds dwell time)
    setInterval(() => {
      const slides = document.querySelectorAll('.hero-slide');
      if (!slides.length) return;
      slides[this.currentSlide].classList.remove('active');
      this.currentSlide = (this.currentSlide + 1) % slides.length;
      slides[this.currentSlide].classList.add('active');
    }, 7000);
  }

  /* --- SCROLL ANIMATIONS (AOS STYLE) --- */
  setupScrollAnimations() {
    window.addEventListener('scroll', () => this.triggerScrollAnimations());
    this.triggerScrollAnimations();
  }

  triggerScrollAnimations() {
    const elements = document.querySelectorAll('.aos-fade, .aos-slide-up, .aos-zoom');
    const triggerBottom = window.innerHeight * 0.88;

    elements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('visible');
      }
    });
  }

  /* --- RENDER HOME VIEWS --- */
  renderHomeViews() {
    // Render Featured Categories on Home
    const homeCatContainer = document.getElementById('home-categories-grid');
    if (homeCatContainer) {
      homeCatContainer.innerHTML = CATEGORIES.slice(0, 6).map(cat => `
        <a href="#products?category=${encodeURIComponent(cat.id)}" class="category-card aos-slide-up">
          <img src="${cat.image}" alt="${cat.name}" class="category-card-img" />
          <div class="category-card-overlay"></div>
          <div class="category-card-info">
            <span>Discover ${cat.count} Pieces</span>
            <h3>${cat.name}</h3>
          </div>
        </a>
      `).join('');
    }

    // Render Trending Products on Home
    const homeProdContainer = document.getElementById('home-trending-grid');
    if (homeProdContainer) {
      const trending = PRODUCTS.filter(p => p.isTrending || p.isBestSeller).slice(0, 8);
      homeProdContainer.innerHTML = trending.map(p => this.createProductCardHTML(p)).join('');
    }

    this.triggerScrollAnimations();
  }

  /* --- RENDER PRODUCT CARD HTML --- */
  createProductCardHTML(p) {
    const isWishlisted = this.wishlist.some(w => w.id === p.id);
    return `
      <div class="product-card aos-fade" data-id="${p.id}">
        ${p.badge ? `<span class="product-badge ${p.badge === 'Limited Edition' || p.badge === 'Masterpiece' ? 'gold' : ''}">${p.badge}</span>` : ''}
        <div class="product-card-media">
          <a href="#product-details?id=${p.id}">
            <img src="${p.image}" alt="${p.name}" class="product-card-img" loading="lazy" />
          </a>
          <div class="product-actions">
            <button class="action-btn btn-quickview" title="Quick View" onclick="app.openQuickView('${p.id}')">
              👁️
            </button>
            <button class="action-btn btn-wishlist ${isWishlisted ? 'active' : ''}" title="Add to Wishlist" onclick="app.toggleWishlist('${p.id}', this)">
              ${isWishlisted ? '❤️' : '🤍'}
            </button>
            <button class="action-btn btn-compare" title="Compare Product" onclick="app.addToCompare('${p.id}')">
              ⚖️
            </button>
          </div>
        </div>
        <div class="product-card-body">
          <span class="product-brand">${p.brand}</span>
          <a href="#product-details?id=${p.id}" class="product-title">${p.name}</a>
          <div class="product-rating">
            <span class="stars">★ ★ ★ ★ ★</span>
            <span>(${p.reviewsCount})</span>
          </div>
          <div class="product-price-row">
            <div class="product-price">
              $${p.price.toLocaleString()}
              ${p.originalPrice > p.price ? `<span class="original">$${p.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <button class="btn btn-primary" style="padding: 0.6rem 1.2rem; font-size: 0.75rem;" onclick="app.addToCart('${p.id}')">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    `;
  }

  /* --- RENDER PRODUCTS LISTING & FILTERS --- */
  renderProductsView() {
    const container = document.getElementById('products-main-grid');
    const titleEl = document.getElementById('products-page-title');
    const selectEl = document.getElementById('filter-category-select');
    if (!container) return;

    if (titleEl) {
      titleEl.innerText = this.activeCategory === 'All' ? 'Complete Place Vendôme Collection' : `${this.activeCategory} Collection`;
    }

    if (selectEl && selectEl.value !== this.activeCategory) {
      selectEl.value = this.activeCategory;
    }

    let filtered = [...PRODUCTS];

    if (this.activeCategory !== 'All') {
      filtered = filtered.filter(p => 
        p.category === this.activeCategory || 
        p.subcategory === this.activeCategory || 
        (p.collections && p.collections.includes(this.activeCategory))
      );
    }

    if (this.searchQuery) {
      const q = this.searchQuery.toLowerCase();
      filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
    }

    // Sort logic
    if (this.activeSort === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.activeSort === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (this.activeSort === 'newest') {
      filtered = filtered.filter(p => p.isNew).concat(filtered.filter(p => !p.isNew));
    } else if (this.activeSort === 'best-rated') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    if (filtered.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 5rem 0;">
        <h3 style="margin-bottom: 1rem;">No Masterpieces Found in ${this.activeCategory}</h3>
        <p>Try clearing your search query or selecting a different Place Vendôme collection.</p>
        <button class="btn btn-primary" style="margin-top: 1.5rem;" onclick="app.resetFilters()">Reset All Filters</button>
      </div>`;
    } else {
      container.innerHTML = filtered.map(p => this.createProductCardHTML(p)).join('');
    }

    this.triggerScrollAnimations();
  }

  resetFilters() {
    this.activeCategory = 'All';
    this.searchQuery = '';
    this.activeSort = 'featured';
    this.renderProductsView();
  }

  /* --- RENDER PRODUCT DETAILS VIEW --- */
  renderProductDetailView(id) {
    const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
    const container = document.getElementById('product-detail-container');
    if (!container || !product) return;

    const isWishlisted = this.wishlist.some(w => w.id === product.id);

    container.innerHTML = `
      <div class="detail-grid">
        <div class="detail-gallery aos-fade">
          <div class="gallery-main" id="gallery-main-viewport" onmousemove="app.handleZoom(event)" onmouseleave="app.resetZoom()">
            <img src="${product.images?.[0] || product.image}" id="gallery-main-img" alt="${product.name}" />
          </div>
          <div class="gallery-thumbs">
            ${(product.images || [product.image]).map((imgUrl, idx) => `
              <div class="thumb-btn ${idx === 0 ? 'active' : ''}" onclick="app.switchGalleryImage('${imgUrl}', this)">
                <img src="${imgUrl}" alt="${product.name}" />
              </div>
            `).join('')}
          </div>
        </div>

        <div class="detail-info aos-slide-up">
          <span class="product-brand">${product.brand} • ${product.category}</span>
          <h1>${product.name}</h1>
          <div class="detail-sku">SKU: ${product.id.toUpperCase()} • ${product.stockStatus}</div>
          
          <div class="product-rating" style="font-size: 0.95rem; margin-bottom: 1.2rem;">
            <span class="stars">★ ★ ★ ★ ★</span>
            <span>${product.rating.toFixed(1)} (${product.reviewsCount} verified reviews)</span>
          </div>

          <div class="detail-price-box">
            <div class="detail-price">$${product.price.toLocaleString()}</div>
            ${product.originalPrice > product.price ? `<span style="text-decoration: line-through; color: var(--text-muted); font-size: 1.2rem;">$${product.originalPrice.toLocaleString()}</span>` : ''}
          </div>

          <p style="margin-bottom: 1.8rem; font-size: 1.05rem;">${product.description}</p>

          ${product.metals ? `
            <div class="selector-label">
              <span>Select Precious Metal / Finish</span>
            </div>
            <div class="options-grid" id="detail-metals-grid">
              ${product.metals.map((m, i) => `<div class="option-pill ${i === 0 ? 'active' : ''}" onclick="app.selectPill(this, 'metal')">${m}</div>`).join('')}
            </div>
          ` : ''}

          ${product.sizes ? `
            <div class="selector-label">
              <span>Select Size / Chain Length</span>
              <button class="btn-link gold-text" style="background:none;border:none;cursor:pointer;font-size:0.75rem;text-decoration:underline;" onclick="app.openModal('modal-size-guide')">View Size Guide</button>
            </div>
            <div class="options-grid" id="detail-sizes-grid">
              ${product.sizes.map((s, i) => `<div class="option-pill ${i === 0 ? 'active' : ''}" onclick="app.selectPill(this, 'size')">${s}</div>`).join('')}
            </div>
          ` : ''}

          <div class="detail-actions-row">
            <button class="btn btn-primary" style="flex: 2; padding: 1.1rem 0; font-size: 0.9rem;" onclick="app.addToCartFromDetail('${product.id}')">
              Add to Shopping Cart
            </button>
            <button class="btn btn-outline" style="flex: 1;" onclick="app.toggleWishlist('${product.id}', this)">
              ${isWishlisted ? '❤️ In Wishlist' : '🤍 Wishlist'}
            </button>
          </div>

          <button class="whatsapp-order-btn" onclick="app.openWhatsAppOrderModal('${product.id}')">
            <span>💬</span> Order via WhatsApp Concierge
          </button>

          <div class="detail-tabs">
            <div class="tab-headers">
              <button class="tab-btn active" onclick="app.switchTab('desc', this)">Description</button>
              <button class="tab-btn" onclick="app.switchTab('specs', this)">Specifications</button>
              <button class="tab-btn" onclick="app.switchTab('care', this)">Care Protocol</button>
              <button class="tab-btn" onclick="app.switchTab('reviews', this)">Reviews (${product.reviewsCount})</button>
            </div>
            <div class="tab-content" id="tab-pane-content">
              <p>${product.description}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products Section -->
      <div class="section-padding">
        <div class="section-header">
          <span class="sub-label">Curated Pairings</span>
          <h2>Frequently Bought Together</h2>
        </div>
        <div class="products-grid">
          ${PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4).map(p => this.createProductCardHTML(p)).join('')}
        </div>
      </div>
    `;

    this.currentDetailProduct = product;
  }

  switchGalleryImage(imgUrl, thumbEl) {
    const mainImg = document.getElementById('gallery-main-img');
    if (mainImg) mainImg.src = imgUrl;
    document.querySelectorAll('.thumb-btn').forEach(t => t.classList.remove('active'));
    thumbEl.classList.add('active');
  }

  handleZoom(e) {
    const viewport = document.getElementById('gallery-main-viewport');
    const img = document.getElementById('gallery-main-img');
    if (!viewport || !img) return;
    const rect = viewport.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = 'scale(2.2)';
  }

  resetZoom() {
    const img = document.getElementById('gallery-main-img');
    if (img) img.style.transform = 'scale(1)';
  }

  selectPill(el, type) {
    const parent = el.parentElement;
    parent.querySelectorAll('.option-pill').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
  }

  switchTab(tabKey, btnEl) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btnEl.classList.add('active');

    const contentEl = document.getElementById('tab-pane-content');
    const p = this.currentDetailProduct;
    if (!contentEl || !p) return;

    if (tabKey === 'desc') {
      contentEl.innerHTML = `<p>${p.description}</p>`;
    } else if (tabKey === 'specs') {
      contentEl.innerHTML = `
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.8rem;">
          <li><strong>Precious Metal:</strong> ${p.specs?.material || '18K Solid Gold / PT950'}</li>
          <li><strong>Hallmark:</strong> ${p.specs?.hallmark || 'AURELISSE 750'}</li>
          <li><strong>Weight:</strong> ${p.specs?.weight || 'N/A'}</li>
          <li><strong>Gemstones:</strong> ${p.specs?.gemstone || 'GIA Certified Diamonds'}</li>
        </ul>
      `;
    } else if (tabKey === 'care') {
      contentEl.innerHTML = `<p>${p.care || 'Clean exclusively with the Aurelisse Ultrasonic Care Kit or warm distilled water with a soft brush.'}</p>`;
    } else if (tabKey === 'reviews') {
      contentEl.innerHTML = (p.reviews && p.reviews.length > 0) ? p.reviews.map(r => `
        <div style="border-bottom: 1px solid var(--border-subtle); padding-bottom: 1.2rem; margin-bottom: 1.2rem;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
            <strong>${r.author}</strong>
            <span class="stars">★ ★ ★ ★ ★</span>
          </div>
          <p class="serif-italic" style="font-size: 1.05rem; color: var(--text-primary); margin-bottom: 0.3rem;">"${r.title}"</p>
          <p>${r.comment}</p>
        </div>
      `).join('') : `<p>All 100% of verified clients rated this piece 5.0 out of 5 stars. Contact concierge for private client references.</p>`;
    }
  }

  /* --- CART & DRAWER MANAGEMENT --- */
  addToCart(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const existing = this.cart.find(item => item.id === id);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        metal: product.metals?.[0] || '18K Yellow Gold',
        size: product.sizes?.[0] || 'Standard',
        quantity: 1
      });
    }

    this.saveCart();
    this.renderCartItems();
    this.renderBadgeCounts();
    this.showToast(`Added ${product.name} to Cart`);
    this.openCartDrawer();
  }

  addToCartFromDetail(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const metalEl = document.querySelector('#detail-metals-grid .option-pill.active');
    const sizeEl = document.querySelector('#detail-sizes-grid .option-pill.active');

    const selectedMetal = metalEl ? metalEl.innerText : (product.metals?.[0] || '18K Yellow Gold');
    const selectedSize = sizeEl ? sizeEl.innerText : (product.sizes?.[0] || 'Standard');

    const existing = this.cart.find(item => item.id === id && item.metal === selectedMetal && item.size === selectedSize);
    if (existing) {
      existing.quantity += 1;
    } else {
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        metal: selectedMetal,
        size: selectedSize,
        quantity: 1
      });
    }

    this.saveCart();
    this.renderCartItems();
    this.renderBadgeCounts();
    this.showToast(`Added to Cart (${selectedMetal})`);
    this.openCartDrawer();
  }

  updateQty(index, delta) {
    if (this.cart[index]) {
      this.cart[index].quantity += delta;
      if (this.cart[index].quantity <= 0) {
        this.cart.splice(index, 1);
      }
      this.saveCart();
      this.renderCartItems();
      this.renderBadgeCounts();
    }
  }

  removeItem(index) {
    if (this.cart[index]) {
      const name = this.cart[index].name;
      this.cart.splice(index, 1);
      this.saveCart();
      this.renderCartItems();
      this.renderBadgeCounts();
      this.showToast(`Removed ${name} from Cart`);
    }
  }

  saveCart() {
    localStorage.setItem('aurelisse_cart', JSON.stringify(this.cart));
  }

  openCartDrawer() {
    this.renderCartItems();
    document.getElementById('drawer-cart')?.classList.add('active');
    document.getElementById('drawer-overlay')?.classList.add('active');
  }

  closeAllDrawersAndModals() {
    document.querySelectorAll('.drawer').forEach(d => d.classList.remove('active'));
    document.querySelectorAll('.modal-box').forEach(m => m.classList.remove('active'));
    document.getElementById('drawer-overlay')?.classList.remove('active');
    document.getElementById('modal-overlay')?.classList.remove('active');
  }

  renderCartItems() {
    const container = document.getElementById('cart-items-container');
    const subtotalEl = document.getElementById('cart-subtotal');
    const taxEl = document.getElementById('cart-tax');
    const totalEl = document.getElementById('cart-total');

    if (!container) return;

    if (this.cart.length === 0) {
      container.innerHTML = `<div style="text-align:center; padding: 4rem 0; color: var(--text-muted);">
        <p style="margin-bottom: 1rem;">Your shopping trunk is currently empty.</p>
        <a href="#products" class="btn btn-outline" onclick="app.closeAllDrawersAndModals()">Explore Masterpieces</a>
      </div>`;
    } else {
      container.innerHTML = this.cart.map((item, idx) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
          <div style="flex-grow: 1;">
            <div style="display:flex; justify-content:space-between; align-items:flex-start;">
              <h4 style="font-size: 1rem; margin-bottom: 0.2rem;">${item.name}</h4>
              <button onclick="app.removeItem(${idx})" style="background:none; border:none; cursor:pointer; color:var(--text-muted);">✕</button>
            </div>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.6rem;">${item.metal} • ${item.size}</div>
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div class="qty-controls">
                <button class="qty-btn" onclick="app.updateQty(${idx}, -1)">-</button>
                <span class="qty-num">${item.quantity}</span>
                <button class="qty-btn" onclick="app.updateQty(${idx}, 1)">+</button>
              </div>
              <span style="font-family: var(--font-serif); font-weight:600;">$${(item.price * item.quantity).toLocaleString()}</span>
            </div>
          </div>
        </div>
      `).join('');
    }

    const subtotal = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * BRAND_CONFIG.taxRate;
    const giftWrap = this.isGiftWrapped ? BRAND_CONFIG.giftWrapCost : 0;
    const discountAmount = this.appliedCoupon ? (subtotal * this.appliedCoupon.percentage) : 0;
    const total = subtotal - discountAmount + tax + giftWrap;

    if (subtotalEl) subtotalEl.innerText = `$${subtotal.toLocaleString()}`;
    if (taxEl) taxEl.innerText = `$${tax.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
    if (totalEl) totalEl.innerText = `$${total.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  }

  applyCoupon() {
    const input = document.getElementById('cart-coupon-input');
    const val = input ? input.value.trim().toUpperCase() : '';
    if (val === 'AURELISSE10') {
      this.appliedCoupon = { code: 'AURELISSE10', percentage: 0.10 };
      this.showToast('Coupon Applied: 10% First Light Privilege');
      this.renderCartItems();
    } else if (val === 'FESTIVE20') {
      this.appliedCoupon = { code: 'FESTIVE20', percentage: 0.20 };
      this.showToast('Coupon Applied: 20% Festive Reduction');
      this.renderCartItems();
    } else {
      this.showToast('Invalid or Expired Privilege Code');
    }
  }

  toggleGiftWrap(checkbox) {
    this.isGiftWrapped = checkbox.checked;
    this.renderCartItems();
    if (this.isGiftWrapped) this.showToast('Added $35 Italian Velvet Gift Trunk');
  }

  /* --- WISHLIST MANAGEMENT --- */
  toggleWishlist(id, btnEl) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const existingIndex = this.wishlist.findIndex(item => item.id === id);
    if (existingIndex > -1) {
      this.wishlist.splice(existingIndex, 1);
      btnEl?.classList.remove('active');
      if (btnEl) btnEl.innerHTML = '🤍';
      this.showToast(`Removed ${product.name} from Wishlist`);
    } else {
      this.wishlist.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
      btnEl?.classList.add('active');
      if (btnEl) btnEl.innerHTML = '❤️';
      this.showToast(`Added ${product.name} to Wishlist`);
    }

    localStorage.setItem('aurelisse_wishlist', JSON.stringify(this.wishlist));
    this.renderBadgeCounts();
    if (window.location.hash.includes('wishlist')) {
      this.renderWishlistView();
    }
  }

  renderWishlistView() {
    const container = document.getElementById('wishlist-grid-container');
    if (!container) return;

    if (this.wishlist.length === 0) {
      container.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 5rem 0;">
        <h3 style="margin-bottom: 1rem;">Your Wishlist is Empty</h3>
        <p>Explore our high jewellery collections and heart the pieces that inspire you.</p>
        <a href="#products" class="btn btn-primary" style="margin-top: 1.5rem;">Explore Masterpieces</a>
      </div>`;
    } else {
      container.innerHTML = this.wishlist.map(w => {
        const fullProd = PRODUCTS.find(p => p.id === w.id) || w;
        return this.createProductCardHTML(fullProd);
      }).join('');
    }
  }

  /* --- COMPARE PRODUCTS --- */
  addToCompare(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    if (this.compareList.some(item => item.id === id)) {
      this.showToast('Piece is already in your Compare List');
      this.openCompareModal();
      return;
    }

    if (this.compareList.length >= 4) {
      this.compareList.shift(); // Remove oldest if over 4
    }

    this.compareList.push(product);
    localStorage.setItem('aurelisse_compare', JSON.stringify(this.compareList));
    this.showToast(`Added ${product.name} to Compare`);
    this.openCompareModal();
  }

  openCompareModal() {
    const container = document.getElementById('compare-table-body');
    if (!container) return;

    if (this.compareList.length === 0) {
      container.innerHTML = `<p style="text-align:center; padding: 2rem;">No products selected for comparison.</p>`;
    } else {
      container.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(${this.compareList.length}, 1fr); gap: 1.5rem; overflow-x: auto;">
          ${this.compareList.map(p => `
            <div style="border: 1px solid var(--border-gold); padding: 1.5rem; text-align:center;">
              <img src="${p.image}" alt="${p.name}" style="width: 120px; height: 120px; object-fit: cover; margin: 0 auto 1rem auto; border-radius:2px;" />
              <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem;">${p.name}</h4>
              <div style="font-family: var(--font-serif); font-size: 1.3rem; font-weight:600; color: var(--accent-gold); margin-bottom: 1rem;">$${p.price.toLocaleString()}</div>
              <ul style="list-style: none; font-size: 0.82rem; text-align: left; display:flex; flex-direction:column; gap:0.5rem; border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
                <li><strong>Category:</strong> ${p.category}</li>
                <li><strong>Metal Options:</strong> ${p.metals?.join(', ') || '18K Gold'}</li>
                <li><strong>Weight:</strong> ${p.specs?.weight || 'N/A'}</li>
                <li><strong>Hallmark:</strong> ${p.specs?.hallmark || 'AURELISSE 750'}</li>
              </ul>
              <button class="btn btn-primary" style="width:100%; margin-top: 1.5rem; padding: 0.7rem 0; font-size: 0.75rem;" onclick="app.addToCart('${p.id}'); app.closeAllDrawersAndModals();">Add to Cart</button>
            </div>
          `).join('')}
        </div>
      `;
    }

    this.openModal('modal-compare');
  }

  /* --- WHATSAPP ORDER INTEGRATION --- */
  openWhatsAppOrderModal(id) {
    const product = PRODUCTS.find(p => p.id === id) || this.currentDetailProduct;
    if (!product) return;

    const metalEl = document.querySelector('#detail-metals-grid .option-pill.active');
    const sizeEl = document.querySelector('#detail-sizes-grid .option-pill.active');
    const selectedMetal = metalEl ? metalEl.innerText : (product.metals?.[0] || '18K Yellow Gold');
    const selectedSize = sizeEl ? sizeEl.innerText : (product.sizes?.[0] || 'Standard');

    const msg = `Hello Aurelisse,\n\nI would like to order the following piece:\n\n• Product Name: ${product.name}\n• SKU/Reference: ${product.id.toUpperCase()}\n• Metal/Finish: ${selectedMetal}\n• Size/Length: ${selectedSize}\n• Quantity: 1\n• Price: $${product.price.toLocaleString()}\n\nPlease assist me with my order and white-glove delivery arrangements.\n\nThank you.`;

    const previewArea = document.getElementById('whatsapp-msg-preview');
    if (previewArea) previewArea.value = msg;

    this.currentWhatsAppProduct = { product, msg };
    this.openModal('modal-whatsapp-order');
  }

  sendWhatsAppOrder() {
    const previewArea = document.getElementById('whatsapp-msg-preview');
    const finalMsg = previewArea ? previewArea.value : this.currentWhatsAppProduct?.msg || '';
    const url = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(finalMsg)}`;
    window.open(url, '_blank');
    this.closeAllDrawersAndModals();
    this.showToast('Connected to Place Vendôme WhatsApp Concierge');
  }

  /* --- MODAL CONTROLLERS --- */
  openModal(modalId) {
    document.getElementById(modalId)?.classList.add('active');
    document.getElementById('modal-overlay')?.classList.add('active');
  }

  openQuickView(id) {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    const contentEl = document.getElementById('quickview-content');
    if (contentEl) {
      contentEl.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
          <img src="${product.image}" alt="${product.name}" style="width:100%; height:320px; object-fit:cover; border:1px solid var(--border-gold);" />
          <div>
            <span class="product-brand">${product.brand}</span>
            <h3 style="font-size: 1.6rem; margin-bottom: 0.5rem;">${product.name}</h3>
            <div style="font-family: var(--font-serif); font-size: 1.8rem; font-weight:600; margin-bottom: 1rem;">$${product.price.toLocaleString()}</div>
            <p style="font-size: 0.9rem; margin-bottom: 1.5rem;">${product.description}</p>
            <div style="display: flex; gap: 1rem;">
              <button class="btn btn-primary" style="flex:1;" onclick="app.addToCart('${product.id}'); app.closeAllDrawersAndModals();">Add to Cart</button>
              <a href="#product-details?id=${product.id}" class="btn btn-outline" onclick="app.closeAllDrawersAndModals()">Full Details</a>
            </div>
          </div>
        </div>
      `;
    }
    this.openModal('modal-quickview');
  }

  /* --- RENDER OTHER VIEWS --- */
  renderCategoriesView() {
    const container = document.getElementById('categories-view-grid');
    if (!container) return;
    container.innerHTML = CATEGORIES.map(cat => `
      <a href="#products?category=${encodeURIComponent(cat.id)}" class="category-card aos-fade">
        <img src="${cat.image}" alt="${cat.name}" class="category-card-img" />
        <div class="category-card-overlay"></div>
        <div class="category-card-info">
          <span>Discover ${cat.count} Pieces</span>
          <h3>${cat.name}</h3>
          <p style="color: rgba(255,255,255,0.8); font-size:0.85rem; margin-top:0.3rem;">${cat.desc}</p>
        </div>
      </a>
    `).join('');
    this.triggerScrollAnimations();
  }

  renderAboutView() {
    const timelineEl = document.getElementById('about-timeline');
    if (timelineEl) {
      timelineEl.innerHTML = TIMELINE.map(t => `
        <div style="display: flex; gap: 2rem; border-left: 2px solid var(--accent-gold); padding-left: 2rem; position: relative;" class="aos-slide-up">
          <div style="position: absolute; left: -8px; top: 0; width: 14px; height: 14px; border-radius: 50%; background: var(--accent-gold);"></div>
          <div>
            <span style="font-family: var(--font-serif); font-size: 1.8rem; color: var(--accent-gold); font-weight:600;">${t.year}</span>
            <h4 style="font-size: 1.3rem; margin: 0.3rem 0 0.5rem 0;">${t.title}</h4>
            <p>${t.desc}</p>
          </div>
        </div>
      `).join('');
    }
    this.triggerScrollAnimations();
  }

  renderOffersView() {
    const container = document.getElementById('offers-cards-grid');
    if (!container) return;
    container.innerHTML = OFFERS_DATA.map(o => `
      <div style="border: 1px solid var(--border-gold); padding: 2.5rem; background: var(--bg-card); text-align:center; position:relative; overflow:hidden;" class="aos-fade">
        <span style="display:inline-block; background: var(--accent-gold); color:#FFF; font-size:0.7rem; letter-spacing:0.2em; text-transform:uppercase; padding: 4px 12px; margin-bottom:1rem;">${o.discount}</span>
        <h3 style="margin-bottom: 0.8rem;">${o.title}</h3>
        <p style="margin-bottom: 1.5rem;">${o.subtitle}</p>
        <div style="border: 1px dashed var(--border-gold); padding: 0.8rem; background: var(--bg-secondary); font-family: var(--font-serif); font-size: 1.4rem; font-weight:600; letter-spacing:0.15em; color: var(--text-primary); margin-bottom: 1.5rem;">
          ${o.code}
        </div>
        <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom: 1.5rem;">Expires in ${o.expiresInDays} days • Applicable online & boutique</p>
        <button class="btn btn-outline" style="width:100%;" onclick="navigator.clipboard.writeText('${o.code}'); app.showToast('Code ${o.code} Copied to Clipboard!');">Copy Privilege Code</button>
      </div>
    `).join('');
    this.triggerScrollAnimations();
  }

  renderJournalView() {
    const container = document.getElementById('journal-posts-grid');
    if (!container) return;
    container.innerHTML = JOURNAL_POSTS.map(post => `
      <div class="journal-card aos-slide-up">
        <img src="${post.image}" alt="${post.title}" class="journal-img" />
        <div class="journal-body">
          <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--accent-gold); text-transform:uppercase; letter-spacing:0.15em; margin-bottom:0.6rem;">
            <span>${post.category}</span>
            <span>${post.readTime}</span>
          </div>
          <h3 style="font-size: 1.4rem; margin-bottom: 0.8rem;">${post.title}</h3>
          <p style="margin-bottom: 1.5rem;">${post.summary}</p>
          <a href="#journal" class="btn-link gold-text" style="text-decoration:none; font-weight:500; font-size:0.85rem; text-transform:uppercase; letter-spacing:0.15em;" onclick="app.showToast('Opening Journal Monograph...')">Read Monograph →</a>
        </div>
      </div>
    `).join('');
    this.triggerScrollAnimations();
  }

  renderFaqsView() {
    const container = document.getElementById('faqs-accordion-container');
    if (!container) return;
    container.innerHTML = FAQS.map((faq, idx) => `
      <div class="faq-item ${idx === 0 ? 'active' : ''}" onclick="this.classList.toggle('active')">
        <div class="faq-question">
          <span>${faq.q}</span>
          <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
          <p>${faq.a}</p>
        </div>
      </div>
    `).join('');
  }

  /* --- EVENT LISTENERS --- */
  setupEventListeners() {
    // Search Drawer toggle & input
    const searchBtn = document.getElementById('toggle-search');
    const searchInput = document.getElementById('live-search-input');
    searchBtn?.addEventListener('click', () => {
      document.getElementById('drawer-search')?.classList.add('active');
      document.getElementById('drawer-overlay')?.classList.add('active');
      setTimeout(() => searchInput?.focus(), 300);
    });

    searchInput?.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim();
      if (this.searchQuery.length > 0) {
        const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || p.category.toLowerCase().includes(this.searchQuery.toLowerCase())).slice(0, 5);
        const resultsBox = document.getElementById('search-suggestions-box');
        if (resultsBox) {
          resultsBox.innerHTML = matches.map(m => `
            <a href="#product-details?id=${m.id}" class="search-item" style="display:flex; gap:1rem; align-items:center; padding: 0.8rem 0; border-bottom:1px solid var(--border-subtle); text-decoration:none; color:var(--text-primary);" onclick="app.closeAllDrawersAndModals()">
              <img src="${m.image}" alt="${m.name}" style="width:50px; height:50px; object-fit:cover;" />
              <div>
                <div style="font-weight:500; font-size:0.9rem;">${m.name}</div>
                <div style="font-size:0.75rem; color:var(--accent-gold);">$${m.price.toLocaleString()} • ${m.category}</div>
              </div>
            </a>
          `).join('') || `<p style="color:var(--text-muted); padding:1rem 0;">No matching jewellery pieces found.</p>`;
        }
      } else {
        const resultsBox = document.getElementById('search-suggestions-box');
        if (resultsBox) resultsBox.innerHTML = '';
      }
    });

    // Close overlays
    document.getElementById('drawer-overlay')?.addEventListener('click', () => this.closeAllDrawersAndModals());
    document.getElementById('modal-overlay')?.addEventListener('click', () => this.closeAllDrawersAndModals());

    // Filter changes
    document.getElementById('filter-category-select')?.addEventListener('change', (e) => {
      this.activeCategory = e.target.value;
      this.renderProductsView();
    });
    document.getElementById('filter-sort-select')?.addEventListener('change', (e) => {
      this.activeSort = e.target.value;
      this.renderProductsView();
    });
  }

  renderBadgeCounts() {
    const cartCountEl = document.getElementById('badge-cart-count');
    const wishCountEl = document.getElementById('badge-wishlist-count');
    const totalCartItems = this.cart.reduce((sum, i) => sum + i.quantity, 0);

    if (cartCountEl) {
      cartCountEl.innerText = totalCartItems;
      cartCountEl.classList.add('pop');
      setTimeout(() => cartCountEl.classList.remove('pop'), 300);
    }
    if (wishCountEl) {
      wishCountEl.innerText = this.wishlist.length;
      wishCountEl.classList.add('pop');
      setTimeout(() => wishCountEl.classList.remove('pop'), 300);
    }
  }

  showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<span>✨</span> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }
}

// Global initialization
window.app = new AurelisseEngine();
