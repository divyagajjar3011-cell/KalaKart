// ===== KALAKART PRODUCT DATA =====
// Change product names, prices, artisan names or image paths here only.
const KALAKART_PRODUCTS = [
  {id:1,name:'Ocean Bloom Resin Tray',artisan:'Riya Resin Studio',category:'Resin Art',price:899,rating:4.9,image:'https://i.pinimg.com/1200x/74/51/59/745159c15d42c0bdc8f7c6f380a6f61c.jpg'},
  {id:2,name:'Peony Handmade Soy Wax Candle',artisan:'Aarvi Candle House',category:'Candle Art',price:599,rating:4.9,image:'https://i.pinimg.com/736x/31/9a/b6/319ab6b99fe9795b07a7d184a4d12896.jpg'},
  {id:3,name:'Handmade Crochet Bouquet',artisan:'Nivora Creation',category:'Crochet Handmade',price:899,rating:5.0,image:'https://i.pinimg.com/736x/b0/ac/62/b0ac62c4a5a2fde6e0f81406d93e7639.jpg'},
  {id:4,name:'Handmade Glass Table Décor',artisan:'KalaGlass Studio',category:'Glass Décor',price:1199,rating:4.8,image:'https://i.pinimg.com/736x/f6/6d/9d/f66d9d32656155c0dce09682715a25a3.jpg'},
  {id:5,name:'Handmade Home Décor Piece',artisan:'Forever In Pages',category:'Handmade Home Décor',price:699,rating:4.9,image:'https://i.pinimg.com/736x/66/61/29/666129abde907c28bbbe30b514cdf1e9.jpg'},
  {id:6,name:'Mirror Work Chaniya Choli',artisan:'Forever In Pages',category:'Chaniya Choli',price:2499,rating:4.9,image:'https://i.pinimg.com/736x/74/de/78/74de787bdb7dc8db195f0cebe2495b31.jpg'},
  {id:7,name:'Handwork Festive Kurta',artisan:'Forever In Pages',category:"Men's Handwork Kurta",price:1599,rating:4.8,image:'https://i.pinimg.com/1200x/bf/b5/e5/bfb5e5f9d516c9f3308d92148de7066a.jpg'},
  {id:8,name:'Customized Handwork T-Shirt',artisan:'Forever In Pages',category:'Customized T-Shirt',price:899,rating:4.9,image:'https://i.pinimg.com/1200x/75/1f/72/751f72e1850f14b1131c9d8f8f3afb5d.jpg'},
  {id:9,name:'Hand Embroidery Dress',artisan:'Forever In Pages',category:'Handwork Dress',price:1899,rating:4.8,image:'https://i.pinimg.com/736x/80/37/1c/80371c51c73a86da314391363e5e3a17.jpg'},
  {id:10,name:'Customized Handwork Shirt',artisan:'Forever In Pages',category:'Handwork Shirt',price:1299,rating:4.7,image:'https://i.pinimg.com/1200x/ff/8a/81/ff8a81d5380d2ee684ec4676c38122e5.jpg'},
  {id:11,name:'Hampers for Her',artisan:'Forever In Pages',category:'Customized Gifts',price:399,rating:4.9,image:'https://i.pinimg.com/736x/68/49/c2/6849c25abf4a132316f3092c9d87b228.jpg'},
  {id:12,name:'Forever Memories Resin Frame',artisan:'Resin Memories',category:'Resin Art',price:1199,rating:5.0,image:'https://i.pinimg.com/1200x/5e/aa/ab/5eaaab83dcec9f6ca3da5970821b8792.jpg'},
  {id:21,name:'Personalized Resin Floral Keepsake',artisan:'Riya Resin Studio',category:'Resin Art',price:1299,rating:4.9,image:'https://i.pinimg.com/1200x/13/16/58/1316585ff1cee8b2caad05d9617ec0a6.jpg'},
  {id:22,name:'Ocean Wave Resin Serving Board',artisan:'Resin Memories',category:'Resin Art',price:1499,rating:4.9,image:'https://i.pinimg.com/736x/54/bb/13/54bb133cd01b3d0f83252098dff8e278.jpg'},
  {id:23,name:'Elegant Gold Resin Keepsake',artisan:'Riya Resin Studio',category:'Resin Art',price:1099,rating:4.8,image:'https://i.pinimg.com/1200x/04/e2/da/04e2da63cf927bfe693441c9130a887e.jpg'},
  {id:24,name:'Floral Resin Photo Plaque',artisan:'Resin Memories',category:'Resin Art',price:999,rating:4.9,image:'https://i.pinimg.com/1200x/3c/ec/d9/3cecd92dde281659a42654d7ddcaf584.jpg'},
  {id:13,name:'Crochet Photo Frame',artisan:'Nivora Creation',category:'Crochet Handmade',price:799,rating:4.9,image:'https://i.pinimg.com/736x/50/af/dc/50afdce5cb35774164491bd2c4f0b358.jpg'},
  {id:25,name:'Crochet Evil Eye Keychain',artisan:'Nivora Creation',category:'Crochet Handmade',price:299,rating:4.9,image:'https://i.pinimg.com/736x/17/c3/d9/17c3d9ca22790f09ccfd4f3bf682db22.jpg'},
  {id:26,name:'Handmade Crochet Scrunchie',artisan:'Nivora Creation',category:'Crochet Handmade',price:249,rating:4.8,image:'https://i.pinimg.com/736x/fe/c5/87/fec58709f7e81e324b059ca7588cf472.jpg'},
  {id:27,name:'Crochet Bow Keychain',artisan:'Nivora Creation',category:'Crochet Handmade',price:299,rating:4.9,image:'https://i.pinimg.com/736x/bf/2a/ce/bf2acee01a34966a2059b58d5777da62.jpg'},
  {id:28,name:'Crochet Bag Charm',artisan:'Nivora Creation',category:'Crochet Handmade',price:349,rating:4.9,image:'https://i.pinimg.com/1200x/d6/47/a5/d647a54c2dda1bd28cf541afc9c6b72e.jpg'},
  {id:29,name:'Handmade Crochet Evil Eye Charm',artisan:'Nivora Creation',category:'Crochet Handmade',price:279,rating:4.8,image:'https://i.pinimg.com/1200x/3b/61/81/3b6181f0b98c02e9cc1c02559f917f6d.jpg'},
  {id:14,name:'Handmade Soy Wax Daisy Flower Candle',artisan:'Aarvi Candle House',category:'Candle Art',price:649,rating:4.9,image:'https://i.pinimg.com/1200x/35/29/bb/3529bbe3ae44696d2d954223cf43c122.jpg'},
  {id:15,name:'Handmade Glass Décor Piece',artisan:'KalaGlass Studio',category:'Glass Décor',price:999,rating:4.8,image:'https://i.pinimg.com/736x/99/db/eb/99dbeb8e3430795f13958645eeb8d42f.jpg'},
  {id:16,name:'Photo Bouquet',artisan:'Forever In Pages',category:'Customized Gifts',price:299,rating:4.9,image:'https://i.pinimg.com/736x/1f/c3/04/1fc30479c0bee9f2cebbfb092d26fe70.jpg'},
  {id:17,name:'Mirror Handwork Shirt',artisan:'Forever In Pages',category:'Handwork Shirt',price:1499,rating:4.8,image:'https://i.pinimg.com/736x/b5/f2/7c/b5f27c90f8ec41b467c864a1ccf58b22.jpg'},
  {id:18,name:'Personalized Photo Hankey',artisan:'Forever In Pages',category:'Customized Hankey',price:399,rating:4.9,image:'https://i.pinimg.com/736x/0a/02/87/0a0287a67351a93e36cb55529a77c4d6.jpg'},
  {id:19,name:'Hampers for Him',artisan:'Forever In Pages',category:'Customized Gifts',price:399,rating:4.9,image:'https://i.pinimg.com/736x/2e/18/93/2e1893f43e54d31867c9dd8b13624b9b.jpg'},
  {id:20,name:'Hand Embroidery Chaniya Choli',artisan:'Forever In Pages',category:'Chaniya Choli',price:2899,rating:4.9,image:'https://i.pinimg.com/1200x/3a/cb/34/3acb3416c2c497411123fd51f00120f5.jpg'},
  {id:30,name:'Handmade Decorative Craft',artisan:'Forever In Pages',category:'Handmade Home Décor',price:749,rating:4.8,image:'https://i.pinimg.com/736x/17/3a/35/173a35edb40fb45843f63b9e0a5285b0.jpg'},
  {id:31,name:'Handmade Home Accent',artisan:'Forever In Pages',category:'Handmade Home Décor',price:899,rating:4.9,image:'https://i.pinimg.com/1200x/01/3d/e8/013de88d597ec3d5ce417925db169d37.jpg'},
  {id:32,name:'Artisan Home Décor',artisan:'Forever In Pages',category:'Handmade Home Décor',price:799,rating:4.8,image:'https://i.pinimg.com/736x/8a/3e/76/8a3e766c2a26d4b4528bf3ac1be822e7.jpg'},
  {id:33,name:'Handcrafted Decorative Piece',artisan:'Forever In Pages',category:'Handmade Home Décor',price:999,rating:4.9,image:'https://i.pinimg.com/1200x/84/3f/25/843f25e28b44bc122f44422374a02de6.jpg'},

  {id:40,name:'Handwork Floral Dress',artisan:'Forever In Pages',category:'Handwork Dress',price:1499,rating:4.9,image:'https://i.pinimg.com/736x/9e/cd/15/9ecd15b0acaf9fe5ce596bb3eb13cdcc.jpg'},
  {id:41,name:'Hand Embroidered Festive Dress',artisan:'Forever In Pages',category:'Handwork Dress',price:1699,rating:4.8,image:'https://i.pinimg.com/1200x/43/d7/ed/43d7ed450cb1731431cf3e09342e5407.jpg'},
  {id:42,name:'Mirror & Thread Work Dress',artisan:'Forever In Pages',category:'Handwork Dress',price:1899,rating:4.9,image:'https://i.pinimg.com/736x/63/fe/c1/63fec191a5f4b51db8d444fd1cf2d7fb.jpg'},
  {id:43,name:'Handwork Party Dress',artisan:'Forever In Pages',category:'Handwork Dress',price:1799,rating:4.8,image:'https://i.pinimg.com/1200x/d9/ce/fa/d9cefaea1bf5c81953274e081d03198b.jpg'},
  {id:44,name:'Traditional Handwork Dress',artisan:'Forever In Pages',category:'Handwork Dress',price:1599,rating:4.8,image:'https://i.pinimg.com/736x/11/fb/a6/11fba6d2f34c5369674dd613e038a2a5.jpg'},
  {id:45,name:'Elegant Handwork Dress',artisan:'Forever In Pages',category:'Handwork Dress',price:1999,rating:4.9,image:'https://i.pinimg.com/736x/bb/e9/89/bbe989b546b15bf4110fec7ea553351a.jpg'},

  {id:46,name:'Handwork Embroidered Shirt',artisan:'Forever In Pages',category:'Handwork Shirt',price:1299,rating:4.8,image:'https://i.pinimg.com/1200x/d3/ce/59/d3ce5933616fb486a8574aa01c14f11a.jpg'},
  {id:47,name:'Handwork Floral Shirt',artisan:'Forever In Pages',category:'Handwork Shirt',price:1399,rating:4.9,image:'https://i.pinimg.com/1200x/c0/7a/df/c07adf2fb33cfcefe6f5d4ae08f716e5.jpg'},
  {id:48,name:'Hand Embroidery Shirt',artisan:'Forever In Pages',category:'Handwork Shirt',price:1499,rating:4.8,image:'https://i.pinimg.com/736x/94/7c/2b/947c2b752eb429151776afa64c921d5a.jpg'},
  {id:49,name:'Festive Handwork Shirt',artisan:'Forever In Pages',category:'Handwork Shirt',price:1399,rating:4.8,image:'https://i.pinimg.com/736x/23/af/26/23af266ffb6fac774c0651fd977ddd1a.jpg'},
  {id:50,name:'Custom Handwork Shirt',artisan:'Forever In Pages',category:'Handwork Shirt',price:1599,rating:4.9,image:'https://i.pinimg.com/736x/1b/f5/fe/1bf5fe5b2150330ad17052b7d595461a.jpg'},

  {id:51,name:'Custom Message Handwork T-Shirt',artisan:'Forever In Pages',category:'Customized T-Shirt',price:899,rating:4.9,image:'https://i.pinimg.com/1200x/e4/30/e8/e430e8de7a4949db1407309695b82625.jpg'},
  {id:52,name:'Personalized Couple T-Shirt',artisan:'Forever In Pages',category:'Customized T-Shirt',price:999,rating:4.9,image:'https://i.pinimg.com/1200x/91/6a/b6/916ab674c18430e61c7a0a2a81418a0f.jpg'},
  {id:53,name:'Customized Quote T-Shirt',artisan:'Forever In Pages',category:'Customized T-Shirt',price:899,rating:4.8,image:'https://i.pinimg.com/1200x/34/84/0d/34840dd2827bf08b2e6ce3f9077ace62.jpg'},
  {id:54,name:'Handmade Custom Name T-Shirt',artisan:'Forever In Pages',category:'Customized T-Shirt',price:949,rating:4.9,image:'https://i.pinimg.com/736x/85/f4/ec/85f4ec2a28b1c6d615665e26caf8743e.jpg'},
  {id:55,name:'Personalized Handwork T-Shirt',artisan:'Forever In Pages',category:'Customized T-Shirt',price:999,rating:4.8,image:'https://i.pinimg.com/736x/4c/27/ab/4c27ab2098c1e42a5d278397e665efc5.jpg'},
  {id:56,name:'Custom Couple Handwork T-Shirt',artisan:'Forever In Pages',category:'Customized T-Shirt',price:1099,rating:4.9,image:'https://i.pinimg.com/1200x/2f/ec/ae/2fecae935295a0776e1a0716adc1f9a7.jpg'},
  {id:57,name:'Personalized Birthday T-Shirt',artisan:'Forever In Pages',category:'Customized T-Shirt',price:899,rating:4.8,image:'https://i.pinimg.com/736x/24/24/33/2424333b0394db32ec5c7c4c24530682.jpg'},

  {id:58,name:'Handwork Festive Kurta',artisan:'Forever In Pages',category:"Men's Handwork Kurta",price:1599,rating:4.9,image:'https://i.pinimg.com/1200x/a6/4e/94/a64e94b4c0c71cbec84eaa4ee95fafb1.jpg'},
  {id:59,name:'Embroidered Men’s Kurta',artisan:'Forever In Pages',category:"Men's Handwork Kurta",price:1699,rating:4.8,image:'https://i.pinimg.com/1200x/83/06/5d/83065deacc0dd276533498d5f74bce83.jpg'},
  {id:60,name:'Mirror Work Men’s Kurta',artisan:'Forever In Pages',category:"Men's Handwork Kurta",price:1799,rating:4.9,image:'https://i.pinimg.com/1200x/57/49/09/574909c140cb1694336125a5a3dc4e68.jpg'},
  {id:61,name:'Traditional Handwork Kurta',artisan:'Forever In Pages',category:"Men's Handwork Kurta",price:1599,rating:4.8,image:'https://i.pinimg.com/1200x/18/d5/fc/18d5fcb5a0c8cfddd4bc332328bda767.jpg'},
  {id:62,name:'Festive Embroidery Kurta',artisan:'Forever In Pages',category:"Men's Handwork Kurta",price:1899,rating:4.9,image:'https://i.pinimg.com/1200x/2f/8a/aa/2f8aaa65ad5b21723cfb5388eda6f97e.jpg'},
  {id:63,name:'Elegant Handwork Kurta',artisan:'Forever In Pages',category:"Men's Handwork Kurta",price:1699,rating:4.8,image:'https://i.pinimg.com/1200x/53/22/38/532238dcb6f153139220df4de8eb0005.jpg'},

  {id:64,name:'Mirror Work Chaniya Choli',artisan:'Forever In Pages',category:'Chaniya Choli',price:2499,rating:4.9,image:'https://i.pinimg.com/1200x/51/aa/a6/51aaa691034eb86f42cf9e2b370100e1.jpg'},
  {id:65,name:'Handwork Navratri Chaniya Choli',artisan:'Forever In Pages',category:'Chaniya Choli',price:2699,rating:4.9,image:'https://i.pinimg.com/736x/12/49/b9/1249b9dbff72641e80542c3185a90c77.jpg'},
  {id:66,name:'Colorful Mirror Work Chaniya Choli',artisan:'Forever In Pages',category:'Chaniya Choli',price:2899,rating:4.8,image:'https://i.pinimg.com/736x/f0/99/81/f09981d6a8320c7c24f6f67a005464cd.jpg'},
  {id:67,name:'Traditional Gujarati Chaniya Choli',artisan:'Forever In Pages',category:'Chaniya Choli',price:2999,rating:4.9,image:'https://i.pinimg.com/1200x/ea/08/b2/ea08b245094599e8c0a614cbfcae9894.jpg'},
  {id:68,name:'Hand Embroidered Chaniya Choli',artisan:'Forever In Pages',category:'Chaniya Choli',price:2799,rating:4.9,image:'https://i.pinimg.com/1200x/98/ea/b1/98eab14c5ad4b3fb636efadf19cac4da.jpg'},
  {id:69,name:'Festive Mirror Work Set',artisan:'Forever In Pages',category:'Chaniya Choli',price:3199,rating:4.8,image:'https://i.pinimg.com/1200x/cc/3c/96/cc3c96bdbeb27ed39c2cdd5e8883ed97.jpg'},
  {id:70,name:'Designer Handwork Chaniya Choli',artisan:'Forever In Pages',category:'Chaniya Choli',price:3499,rating:4.9,image:'https://i.pinimg.com/1200x/ff/12/01/ff12016fce36a89c43005a296f7dcdc7.jpg'},
  {id:71,name:'Premium Navratri Handwork Set',artisan:'Forever In Pages',category:'Chaniya Choli',price:3299,rating:4.9,image:'https://i.pinimg.com/1200x/cd/6e/7f/cd6e7fbe18c107ed1479accb5bdf5987.jpg'},

  {id:72,name:'Personalized Name Hankey',artisan:'Forever In Pages',category:'Customized Hankey',price:349,rating:4.9,image:'https://i.pinimg.com/1200x/35/61/58/356158630b620866eef75ea729326786.jpg'},
  {id:73,name:'Customized Couple Hankey',artisan:'Forever In Pages',category:'Customized Hankey',price:399,rating:4.9,image:'https://i.pinimg.com/736x/56/a9/0e/56a90e1e6bfbcd01454914778cd2f6ae.jpg'},
  {id:74,name:'Personalized Photo Hankey',artisan:'Forever In Pages',category:'Customized Hankey',price:449,rating:4.8,image:'https://i.pinimg.com/1200x/e9/68/a2/e968a20971c9e859574c7eeaf7111303.jpg'},
  {id:75,name:'Custom Embroidered Hankey',artisan:'Forever In Pages',category:'Customized Hankey',price:399,rating:4.9,image:'https://i.pinimg.com/736x/90/df/e5/90dfe53aaaa547f06c4a276d592fdd23.jpg'},
  {id:76,name:'Personalized Gift Hankey',artisan:'Forever In Pages',category:'Customized Hankey',price:449,rating:4.8,image:'https://i.pinimg.com/1200x/cc/8f/75/cc8f755a942374ddc4ea47493c185dcc.jpg'},
  {id:77,name:'Hand Embroidered Hankey',artisan:'Forever In Pages',category:'Customized Hankey',price:349,rating:4.8,image:'https://i.pinimg.com/736x/c2/af/2a/c2af2af730760db600f77980fd5a6efb.jpg'},

  {id:78,name:'Memory Magazine',artisan:'Forever In Pages',category:'Customized Gifts',price:349,rating:4.9,image:'https://i.pinimg.com/1200x/b1/21/49/b12149f13a3466baac00b266c091ccf1.jpg'},
  {id:79,name:'Mini Memory Magazine',artisan:'Forever In Pages',category:'Customized Gifts',price:199,rating:4.9,image:'https://i.pinimg.com/736x/87/3d/08/873d087fe17a6e1170b69d04e56420af.jpg'},
  {id:80,name:'Customized Photo Frame',artisan:'Forever In Pages',category:'Customized Gifts',price:299,rating:4.9,image:'https://i.pinimg.com/1200x/87/54/58/875458a652d32c92b3a1b70fd9dbfa6a.jpg'},
  {id:81,name:'Personalized Photo Frame',artisan:'Forever In Pages',category:'Customized Gifts',price:299,rating:4.8,image:'https://i.pinimg.com/736x/a1/f5/4a/a1f54a5d068f3112447bcee0660fd780.jpg'},
  {id:82,name:'Customized Friendship License',artisan:'Forever In Pages',category:'Customized Gifts',price:249,rating:4.9,image:'https://i.pinimg.com/1200x/bf/ef/33/bfef33256301b39d679895adc2e652b9.jpg'},
  {id:83,name:'Customized Birthday Card',artisan:'Forever In Pages',category:'Customized Gifts',price:199,rating:4.8,image:'https://i.pinimg.com/736x/d7/5b/97/d75b973c4dc6da5ae2c9ef6eeb0c44d7.jpg'},
  {id:84,name:'Premium Birthday Card',artisan:'Forever In Pages',category:'Customized Gifts',price:599,rating:4.9,image:'https://i.pinimg.com/736x/2d/f9/56/2df956a02eb17bf7e06a88f54da0a100.jpg'},
  {id:85,name:'Wooden Photo Frame',artisan:'Forever In Pages',category:'Customized Gifts',price:349,rating:4.9,image:'https://i.pinimg.com/736x/46/b3/34/46b334207fce20ca9337ae28ed4efee2.jpg'},
];

window.KALAKART_PRODUCTS = KALAKART_PRODUCTS;

const categoryOrder = ['All','Resin Art','Candle Art','Crochet Handmade','Glass Décor','Handmade Home Décor','Handwork Dress','Handwork Shirt','Customized T-Shirt',"Men's Handwork Kurta",'Chaniya Choli','Customized Hankey','Customized Gifts'];

function productCard(p){
  return `<article class="product-card" data-category="${p.category}" data-name="${p.name.toLowerCase()} ${p.artisan.toLowerCase()}">
    <div class="product-image" data-full-image="${p.image}" data-product-name="${p.name}" role="button" tabindex="0" aria-label="View ${p.name} image">
      <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/kalakart-craft.png'">
      <span class="product-tag">${p.category}</span>
      <button class="wishlist" type="button" aria-label="Add to wishlist"><i class="bi bi-heart"></i></button>
      <span class="zoom-hint"><i class="bi bi-zoom-in"></i></span>
    </div>
    <div class="product-info">
      <small>By ${p.artisan}</small>
      <a href="product-details.html?id=${p.id}"><h3>${p.name}</h3></a>
      <div class="price-row"><strong>₹${p.price.toLocaleString('en-IN')}</strong><span><i class="bi bi-star-fill"></i> ${p.rating}</span></div>
      <button class="add-btn" data-name="${p.name}">Add to bag <i class="bi bi-plus"></i></button>
    </div>
  </article>`;
}

const grid = document.getElementById('productGrid');
const filters = document.getElementById('filters');
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');

function renderProducts(category='All', search=''){
  if (!grid) return;
  const q = search.toLowerCase().trim();
  const list = KALAKART_PRODUCTS.filter(p => (category==='All' || p.category===category) && (!q || `${p.name} ${p.artisan} ${p.category}`.toLowerCase().includes(q)));
  grid.innerHTML = list.map(productCard).join('');
  resultCount.textContent = `${list.length} ${list.length===1?'product':'products'}`;
  emptyState.style.display = list.length ? 'none' : 'block';
  grid.style.display = list.length ? 'grid' : 'none';
  bindProductActions();
}

function bindProductActions(){
  document.querySelectorAll('.product-image').forEach(box=>{
    const openImage=()=>{
      const modal=document.getElementById('imageLightbox');
      const modalImg=document.getElementById('lightboxImage');
      const modalTitle=document.getElementById('lightboxTitle');
      if(!modal || !modalImg) return;
      modalImg.src=box.dataset.fullImage;
      modalImg.alt=box.dataset.productName || 'KalaKart product';
      if(modalTitle) modalTitle.textContent=box.dataset.productName || '';
      modal.hidden=false;
      document.body.classList.add('lightbox-open');
    };
    box.addEventListener('click',e=>{ if(e.target.closest('.wishlist')) return; openImage(); });
    box.addEventListener('keydown',e=>{ if(e.key==='Enter' || e.key===' '){e.preventDefault();openImage();} });
  });

  document.querySelectorAll('.add-btn').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault(); e.stopPropagation();
    const product=KALAKART_PRODUCTS.find(x=>x.name===btn.dataset.name); if(product && typeof addKalaProduct==='function') addKalaProduct(product,1); const count=document.getElementById('cartCount');
    const toast=document.getElementById('toast'); const toastText=document.getElementById('toastText');
    if(toast){toastText.textContent=`${btn.dataset.name} added to bag`; toast.hidden=false; clearTimeout(window.__kalaToast); window.__kalaToast=setTimeout(()=>toast.hidden=true,2200);}
  }));
  document.querySelectorAll('.wishlist').forEach(btn=>btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();btn.classList.toggle('active');btn.innerHTML=btn.classList.contains('active')?'<i class="bi bi-heart-fill"></i>':'<i class="bi bi-heart"></i>';}));
}


const imageLightbox=document.getElementById('imageLightbox');
const closeLightbox=()=>{ if(imageLightbox){imageLightbox.hidden=true;document.body.classList.remove('lightbox-open');} };
if(imageLightbox){
  document.getElementById('lightboxClose')?.addEventListener('click',closeLightbox);
  imageLightbox.addEventListener('click',e=>{if(e.target===imageLightbox) closeLightbox();});
  document.addEventListener('keydown',e=>{if(e.key==='Escape') closeLightbox();});
}

if (grid && filters) categoryOrder.forEach((cat,i)=>{
  const b=document.createElement('button'); b.className=`filter-btn ${i===0?'active':''}`; b.textContent=cat; b.type='button';
  b.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderProducts(cat, new URLSearchParams(location.search).get('search')||'');});
  filters.appendChild(b);
});

const params=new URLSearchParams(location.search); const requested=params.get('category'); const search=params.get('search')||'';
let initialCategory=categoryOrder.includes(requested)?requested:'All';
if(initialCategory!=='All') document.querySelectorAll('.filter-btn').forEach(b=>{if(b.textContent===initialCategory){b.classList.remove('active');b.classList.add('active');}});
if (grid) renderProducts(initialCategory,search);
