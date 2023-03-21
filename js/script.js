//Variable
let $ = document;
const AllProduct = [
  {
    id: 1,
    ProductName: "Ghormeh sabzi",
    Price: 33,
    imgSrc: "img/ghormeSabzi.jpg",
  },
  { id: 2, ProductName: "kebab", Price: 44, imgSrc: "img/kabab.jpg" },
  { id: 3, ProductName: "Gheimeh", Price: 49, imgSrc: "img/gheyme.jpg" },
  { id: 4, ProductName: "Bamia", Price: 47, imgSrc: "img/bamiye.jpg" },
  { id: 5, ProductName: "Fish", Price: 60, imgSrc: "img/mahi.jpg" },
  { id: 6, ProductName: "Chicken", Price: 70, imgSrc: "img/morgh.jpg" },
  { id: 7, ProductName: "coco sabzi", Price: 30, imgSrc: "img/sabzococo.jpg" },
  {id: 8,ProductName: "Aush reshteh",Price: 40,imgSrc: "img/ashReshte.jpg",
  },
];
const btnAddShop = $.querySelectorAll(".addShop");
const cartItems = $.querySelector(".cart-items");
let userBasket = []
//Functions



function AddToCard(Product) {
  let CartContiner = $.createElement("div");
  CartContiner.classList = "cart-items";

  let CartRow = $.createElement("div");
  CartRow.classList = "cart-row";

  let CartItem = $.createElement("div");
  CartItem.classList = "cart-item cart-column";

  let CartItemImg = $.createElement("img");
  CartItemImg.classList = "cart-item-image";
  CartItemImg.setAttribute("height", "100");
  CartItemImg.setAttribute("width", "100");

  //CartItemImg.setAttribute('src' , "100")
  let CartItemTitle = $.createElement("span");
  //CartItemTitle.innerHTML = Product.ProductName;
  CartItemTitle.classList = "cart-item-title";

  let CartPrice = $.createElement("span");
  CartPrice.classList = "cart-price cart-column";

  let CartQuantity = $.createElement("div");
  CartQuantity.classList = "cart-quantity cart-column";

  let CartQuantityInput = $.createElement("input");
  CartQuantityInput.classList = "cart-quantity-input";
  CartQuantityInput.setAttribute("type", "number");

  let CartQuantityButton = $.createElement("button");
  CartQuantityButton.classList = "btn btn-danger";
  CartQuantityButton.textContent = "Remove";
  CartQuantityButton.style.color = "white";
  CartItem.append(CartItemImg, CartItemTitle);
  CartQuantity.append(CartQuantityInput, CartQuantityButton);
  CartRow.append(CartItem, CartPrice, CartQuantity);
  CartContiner.append(CartRow);
  cartItems.append(CartContiner);
  console.log(CartRow);
}



//event

btnAddShop.forEach(function (ev) {
  ev.addEventListener("click", AddToCard);
});
