//Variable
let $ = document;
const AllProduct = [
  {
    id: 1,
    ProductName: "Ghormeh sabzi",
    Price: 33,
    imgSrc: "img/ghormeSabzi.jpg",
    avout:
      "This Iranian food is very delicious Local meat and vegetables areused in this dishPrice: 33 $",
    count: 1,
  },
  {
    id: 2,
    ProductName: "kebab",
    Price: 44,
    imgSrc: "img/kabab.jpg",
    about:
      "This dish is very delicious. In this dish, minced meat is skewered The price is$40",
    count: 1,
  },
  {
    id: 3,
    ProductName: "Gheimeh",
    Price: 49,
    imgSrc: "img/gheyme.jpg",
    about:
      "It is a very delicious dish that has meat, cobs, and fried Zemini apples The price is The price is$49",
    count: 1,
  },
  {
    id: 4,
    ProductName: "Bamia",
    Price: 47,
    imgSrc: "img/bamiye.jpg",
    about:
      "There is meat in this okra stew and Iranians love this dish very much The price is$47",
    count: 1,
  },
  {
    id: 5,
    ProductName: "Fish",
    Price: 60,
    imgSrc: "img/mahi.jpg",
    about:
      "Fish is very popular in Iran and most Iranians include it in their diet The price is$60",
    count: 1,
  },
  {
    id: 6,
    ProductName: "Chicken",
    Price: 70,
    imgSrc: "img/morgh.jpg",
    about:
      "In Iran, peoples consumption of chicken is very high and they like it very much and cook it in their parties The price is$70 ",
    count: 1,
  },
  {
    id: 7,
    ProductName: "coco sabzi",
    Price: 30,
    imgSrc: "img/sabzococo.jpg",
    about:
      "This food is very useful for health and is very popular in Iran The price is $30",
    count: 1,
  },
  {
    id: 8,
    ProductName: "Aush reshteh",
    Price: 40,
    imgSrc: "img/ashReshte.jpg",
    about:
      "This dish is very popular in Iran and is eaten in cold weather The price is $40",
    count: 1,
  },
];

let userBasket = [];
const mineContent = $.querySelector(".mine-content");
const cartItems = $.querySelector(".cart-items");
const cartTotalPrice = $.querySelector(".cart-total-price")

AllProduct.forEach((Product) => {
  let contentBoxFoods = $.createElement("div");
  contentBoxFoods.classList = "content-box-foods";

  let boxPicFoods = $.createElement("div");
  boxPicFoods.style.backgroundImage = "url(" + Product.imgSrc + ")";
  boxPicFoods.classList = "box-pic-foods";

  let contentBoxTitle = $.createElement("h3");
  contentBoxTitle.innerHTML = Product.ProductName;

  let contentboxText = $.createElement("p");
  contentboxText.innerHTML = Product.about;

  let addProductBtn = $.createElement("button");
  addProductBtn.innerHTML = "addshop";
  addProductBtn.addEventListener("click", function () {
    findProduct(Product.id);
  });

  contentBoxFoods.append(
    boxPicFoods,
    contentBoxTitle,
    contentboxText,
    addProductBtn
  );
  mineContent.append(contentBoxFoods);
});

function findProduct(ProductId) {
  let SercheProduct = AllProduct.find((Product) => {
    return ProductId === Product.id;
  });

  userBasket.push(SercheProduct);
  addUserBasketToCard(userBasket);
  productPrice(userBasket)
}

function addUserBasketToCard(userBasketPrduct) {
  cartItems.innerHTML = "";
  userBasketPrduct.forEach(function (Product) {


    let cartRow = $.createElement("div");
    cartRow.classList = "cart-row";

    let cartItem = $.createElement("div");
    cartItem.classList = "cart-item cart-column";

    let cartItemImage = $.createElement("img");
    cartItemImage.setAttribute("src", Product.imgSrc);
    cartItemImage.classList = "cart-item-image";
    cartItemImage.setAttribute("height", "100");
    cartItemImage.setAttribute("width", "100");

    let cartItemTitle = $.createElement("span");
    cartItemTitle.classList = "cart-item-title";
    cartItemTitle.innerHTML = Product.ProductName;

    let cartPrice = $.createElement("span");
    cartPrice.classList = "cart-price cart-column";
    cartPrice.innerHTML = Product.Price;

    let cartQuantity = $.createElement("div");
    cartQuantity.classList = "cart-quantity cart-column";

    let cartQuantityInput = $.createElement("input");
    cartQuantityInput.classList = "cart-quantity-input";
    cartQuantityInput.setAttribute("type", "number");
    cartQuantityInput.value = Product.count;

    let btnDanger = $.createElement("button");
    btnDanger.classList = "btn btn-danger";
    btnDanger.innerHTML = "Remove";

    btnDanger.addEventListener("click", function(){
      removeProductFromBasket(Product.id)
    });

    cartItem.append(cartItemImage, cartItemTitle);
    cartQuantity.append(cartQuantityInput, btnDanger);
    cartRow.append(cartItem, cartPrice, cartQuantity);
    cartItems.append(cartRow);
  });
}

function removeProductFromBasket(ProductIds) {
  console.log(ProductIds);
   userBasket =  userBasket.filter((userBasket) => {
    
    return userBasket.id !== ProductIds
  })
  
  
  addUserBasketToCard(userBasket)
}


function productPrice(userBasketPrice) {
  let lastPrice = 0 
  
  userBasketPrice.forEach(function(userBasketItem){
     

    lastPrice += userBasketItem.Price
  }) 
  cartTotalPrice.innerHTML = lastPrice
}
