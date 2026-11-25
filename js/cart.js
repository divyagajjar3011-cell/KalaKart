// KalaKart cart helpers - demo frontend only
function getKalaCart(){
  try { return JSON.parse(localStorage.getItem('kalakartCart') || '[]'); }
  catch { return []; }
}
function saveKalaCart(cart){
  localStorage.setItem('kalakartCart', JSON.stringify(cart));
  localStorage.setItem('kalakartCartCount', String(cart.reduce((s,p)=>s+p.qty,0)));
  document.querySelectorAll('#cartCount').forEach(el=>el.textContent=cart.reduce((s,p)=>s+p.qty,0));
}
function addKalaProduct(product, qty=1, customMessage=''){
  const cart=getKalaCart();
  const existing=cart.find(x=>x.id===product.id && (x.customMessage||'') === (customMessage||''));
  if(existing) existing.qty += qty;
  else cart.push({...product, qty, customMessage: customMessage || ''});
  saveKalaCart(cart);
}
function removeKalaProduct(id){ saveKalaCart(getKalaCart().filter(x=>x.id!==id)); }
function updateKalaQty(id, qty){
  const cart=getKalaCart(); const item=cart.find(x=>x.id===id);
  if(!item) return;
  if(qty <= 0){
    saveKalaCart(cart.filter(x=>x.id!==id));
    return;
  }
  item.qty=qty; saveKalaCart(cart);
}

// Cart page button helpers
function changeQty(id, delta){
  const cart=getKalaCart();
  const item=cart.find(x=>x.id===id);
  if(!item) return;
  updateKalaQty(id, item.qty + delta);
  if(typeof renderCart === 'function') renderCart();
}

function removeItem(id){
  removeKalaProduct(id);
  if(typeof renderCart === 'function') renderCart();
}
function kalaMoney(value){ return `₹${Number(value).toLocaleString('en-IN')}`; }
function kalaCartTotals(){
  const cart=getKalaCart();
  const subtotal=cart.reduce((s,p)=>s+p.price*p.qty,0);
  const delivery=subtotal===0?0:(subtotal>=999?0:79);
  return {subtotal,delivery,total:subtotal+delivery};
}
