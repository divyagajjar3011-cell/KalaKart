(() => {
  const menu = document.getElementById('mobileMenu');
  const nav = document.getElementById('mainNav');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menu.setAttribute('aria-expanded', open ? 'true' : 'false');
      menu.innerHTML = open ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
    });
  }

  let cart = Number(localStorage.getItem('kalakartCartCount') || 0);
  const count = document.getElementById('cartCount');
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');
  const showToast = (message) => {
    if (!toast) return;
    toastText.textContent = message;
    toast.hidden = false;
    clearTimeout(window.__kalaToast);
    window.__kalaToast = setTimeout(() => { toast.hidden = true; }, 2200);
  };
  const updateCart = () => {
    if (count) count.textContent = cart;
    localStorage.setItem('kalakartCartCount', String(cart));
  };
  document.querySelectorAll('.add-btn').forEach(btn => btn.addEventListener('click', () => {
    cart += 1; updateCart(); showToast(`${btn.dataset.name || 'Product'} added to bag`);
  }));
  updateCart();

  document.querySelectorAll('.wishlist').forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault(); e.stopPropagation();
    btn.classList.toggle('active');
    btn.innerHTML = btn.classList.contains('active') ? '<i class="bi bi-heart-fill"></i>' : '<i class="bi bi-heart"></i>';
    showToast(btn.classList.contains('active') ? 'Added to wishlist' : 'Removed from wishlist');
  }));

  const overlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  document.getElementById('searchBtn')?.addEventListener('click', () => { overlay.hidden = false; searchInput?.focus(); });
  document.getElementById('searchClose')?.addEventListener('click', () => { overlay.hidden = true; });
  document.getElementById('searchGo')?.addEventListener('click', () => {
    const q = searchInput?.value.trim();
    if (q) window.location.href = `products.html?search=${encodeURIComponent(q)}`;
  });
  searchInput?.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('searchGo')?.click(); });
})();
