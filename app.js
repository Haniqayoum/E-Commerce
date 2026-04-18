var allProducts = {
Bracelets : { 
"Tulip Bracelet Golden" : { Name : "Tulip Bracelet Golden", price : 2799, src : "./images/pinktulip.jpeg" },
"Tulip Bracelet Silver" : { Name : "Tulip Bracelet ", price : 2999, src : "./images/silvertulip.jpeg" },
"Square Bracelet" :{ Name : "Square Bracelet", price : 599, src : "./images/squarebracelet.jpeg" },
"Stainless Steel Bangle" :{ Name : "Stainless Steel Bangle ", price : 699, src : "./images/bangle.jpeg" },
"Golden Bangle" : { Name : "Golden Bangle ", price : 799, src : "./images/goldenbangle.jpeg" },
"Heart Bangle" : { Name : "Heart Bangle ", price : 849, src : "./images/heartbracelet.jpeg" },
"Watch Bracelet" : { Name : "Watch Bracelet ", price : 799, src : "./images/watchbangle.jpeg" },
},
Watches : {
"Oval Watch" :{ Name : "Oval Shape Watch", price : 1850, src : "./images/ovalwatch.jpeg" },
Watch : { Name : "Watch", price : 1999, src : "./images/watch.jpeg" },
},
"Hand Chain" : {
"Default":{ Name : "Hand Chain", price : 699, src : "./images/handchain.jpeg" },
},
"Jewelry Set" : {
"Haert Jewelry Set" :{ Name : "Heart Jewelry Set", price : 850, src : "./images/heartset.jpeg" },
"Bow Set" : { Name : "Bow Jewelry Set", price : 899, src : "./images/bowset.jpeg" },
"Jewelry Set" : { Name : "Jewelry Set", price : 1499, src : "./images/set.jpeg" },
},
"Antique Item":{
Quil : { Name : "Quil Pen with nib", price : 2699, src : "./images/quil.jpeg" },
},
Necklaces : {
"Heart Necklace" : { Name : "Heart Necklace", price : 799, src : "./images/heartnecklace.jpeg" },
"Duck Necklace" : { Name : "Duck Necklace", price : 599, src : "./images/ducknecklace.jpeg" },
"Double Color Clover Necklace" : { Name : "Double Color Clover necklace ", price : 749, src : "./images/doubleclove.jpeg" },
},
Rings : {
"Heart Ring" : { Name : "Heart Ring", price : 549, src : "./images/heartring.jpeg" },
"Chain Ring" : { Name : "Chain Ring", price : 549, src : "./images/chainring.jpeg" },
"Infinite Ring": { Name : "Infinite Ring", price: 599, src : "./images/foeverring.jpeg" },
"Ring Set" : { Name : "Rings ", price : 1699, src : "./images/rings.jpeg" },
},
Earings : {
"Floral Earings": { Name : "Floral Earings", price : 649, src : "./images/floralearing.jpeg" },
"Bow Earings" : { Name : "Bow Earings", price : 649, src : "./images/bowstuds.jpeg" },
"Cherry Earings": { Name : "Cherry Earings", price : 499, src : "./images/cherryearing.jpeg" },
"Tulip Earings": { Name : "Tulip Earings", price : 449 , src : "./images/tulipearings.jpeg" },
"Drop Earings" : { Name : "Drop Earings", price : 549, src : "./images/dropearings.jpeg" },
Jhumkay : { Name : "Enamal Jhumkay", price : 549, src : "./images/jhumkay.jpeg" },
"Earings": { Name : "Earings ", price : 449, src : "./images/earings.jpeg" },
"Golden Round Earings": { Name : "Golden Round Earings", price : 449, src : "./images/trendyearings.jpeg" },
"Golden Floral Earings":{ Name : "Golden Floral Earings", price : 499, src : "./images/fowereearings.jpeg" }
},
Enamel : {
"Enamel Bangle " : { Name : "Enamel Bangle ", price: "350 Each", src :"./images/enamal.jpeg" },
},
Crochet : {
"Tulip Crochet Flower": { Name : "Tulip Crochet Flower Bouquet", price: 2700, src : "./images/tulipcrochet.jpeg" },
"Sunflower Crochet" : { Name : "Sunflower Crochet Flower", price : 700, src : "./images/sunflower.jpeg" }
}
}
                                                                                      
var cart = [];
var allCards = document.getElementById("allCards");
var productMenu = document.getElementById("productMenu");
var categoriesList = ["Tulip", "Bangle", "Ring", "Watch", "Necklace", "Earings"];

function loadCategories(){
  categoryMenu.innerHTML = `<option value="">Select Category</option>`;

  for (var i = 0; i < categoriesList.length; i++){
    categoryMenu.innerHTML += `<option value="${categoriesList[i]}">${categoriesList[i]}</option>`;
  }
}
for (var product in allProducts){
  productMenu.innerHTML += `<option value="${product}">${product}</option>`;
}

function showAllProducts(){
  allCards.innerHTML = "";

  for (var product in allProducts){

    var itemsObj = allProducts[product];

    for (var item in itemsObj){

      var itemDetails = itemsObj[item];

      allCards.innerHTML += `
      <div class="col">
        <div class="card h-100">
          <img src="${itemDetails.src}" class="card-img-top" />
          <div class="card-body">
            <h5>${itemDetails.Name}</h5>
          </div>
          <div class="card-footer">
            <small>Price: Rs ${itemDetails.price}</small><br>
            <button onclick="addToCart('${product}','${item}')">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>`;
    }
  }
}

function filterProduct(){
  var product = productMenu.value;
  allCards.innerHTML = "";

  if (!product) return;

  var data = allProducts[product];

  for (var item in data){
    var itemDetails = data[item];

    allCards.innerHTML += `
      <div class="col">
        <div class="card h-100">
          <img src="${itemDetails.src}" class="card-img-top" />
          <div class="card-body">
            <h5>${itemDetails.Name}</h5>
          </div>
          <div class="card-footer">
            <small>Price: Rs ${itemDetails.price}</small><br>
            <button onclick="addToCart('${product}','${item}')">
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>`;
  }
}

function addToCart(product, item){
  var itemDetails = allProducts[product][item];
  cart.push(itemDetails);

  alert(itemDetails.Name + " added to cart ✅");
  renderCart();
}

function renderCart(){
  document.getElementById("cartCount").innerText = cart.length;

  var cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";

  cart.forEach((item)=>{
    cartItems.innerHTML += `<p>${item.Name} - Rs ${item.price}</p>`;
  });
}


function openCart(){ 
  document.getElementById("cartModal").style.display = "block";
}

function closeCart(){
  document.getElementById("cartModal").style.display = "none";
}

showAllProducts();
loadCategories();
