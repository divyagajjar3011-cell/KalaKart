// ===== KALAKART HOME PAGE =====
// Home page uses the same central product data from js/products.js.
(() => {
  const products = window.KALAKART_PRODUCTS || [];
  const featured = document.getElementById('homeFeaturedGrid');
  const categoryGrid = document.getElementById('homeCategoryGrid');
  if (!products.length) return;

  const categoryLabels = [
    ['Resin Art','Resin Art'],
    ['Candle Art','Candle Art'],
    ['Crochet Handmade','Crochet'],
    ['Glass Décor','Glass Décor'],
    ['Handmade Home Décor','Home Décor'],
    ['Handwork Dress','Handwork Dress'],
    ['Handwork Shirt','Handwork Shirt'],
    ['Customized Gifts','Customized Gifts']
  ];

  if (categoryGrid) {
    categoryGrid.innerHTML = categoryLabels.map(([cat,label]) => {
      const count = products.filter(p => p.category === cat || (cat === 'Customized Gifts' && p.category === 'Customized Gifts')).length;
      return `<a class="category-card" href="products.html?category=${encodeURIComponent(cat)}">
        <img src="${products.find(p=>p.category===cat)?.image || products[0].image}" alt="${label}">
        <div><h3>${label}</h3><span>${count || 1} pieces <i class="bi bi-arrow-up-right"></i></span></div>
      </a>`;
    }).join('');
  }

  if (featured) {
    featured.innerHTML = products.slice(0,4).map(p => `<article class="product-card">
      <a class="product-image" href="product-details.html?id=${p.id}">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="product-tag">${p.category}</span>
        <button class="wishlist" type="button" aria-label="Add to wishlist"><i class="bi bi-heart"></i></button>
      </a>
      <div class="product-info">
        <small>By ${p.artisan}</small>
        <a href="product-details.html?id=${p.id}"><h3>${p.name}</h3></a>
        <div class="price-row"><strong>₹${p.price.toLocaleString('en-IN')}</strong><span><i class="bi bi-star-fill"></i> ${p.rating}</span></div>
        <button class="add-btn" data-name="${p.name}" data-product-id="${p.id}">Add to bag <i class="bi bi-plus"></i></button>
      </div>
    </article>`).join('');

    featured.querySelectorAll('.add-btn').forEach(btn => btn.addEventListener('click', e => {
      e.preventDefault(); e.stopPropagation();
      const product = products.find(p => String(p.id) === btn.dataset.productId);
      if (product && typeof addKalaProduct === 'function') addKalaProduct(product,1);
      const toast = document.getElementById('toast');
      if (toast) { document.getElementById('toastText').textContent = `${product.name} added to bag`; toast.hidden=false; setTimeout(()=>toast.hidden=true,2200); }
    }));

    featured.querySelectorAll('.wishlist').forEach(btn => btn.addEventListener('click', e => {
      e.preventDefault(); e.stopPropagation();
      btn.classList.toggle('active');
      btn.innerHTML = btn.classList.contains('active') ? '<i class="bi bi-heart-fill"></i>' : '<i class="bi bi-heart"></i>';
    }));
  }
})();
