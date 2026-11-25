(function(){
  const key='kalakartArtisanProducts';
  const demo=[
    {id:'A001',name:'Hand-Poured Rose Candle',category:'Candle Art',price:499,stock:12,status:'Approved',image:'../assets/images/kalakart-craft.png',description:'Hand-poured scented candle made by a local artisan.'},
    {id:'A002',name:'Crochet Flower Bouquet',category:'Crochet Handmade',price:799,stock:8,status:'Pending',image:'../assets/images/kalakart-craft.png',description:'Handmade crochet flowers arranged as a gift bouquet.'}
  ];
  const get=()=>JSON.parse(localStorage.getItem(key)||'null')||demo;
  const save=(x)=>localStorage.setItem(key,JSON.stringify(x));
  if(!localStorage.getItem(key))save(demo);
  window.KalaArtisan={get,save};
})();
