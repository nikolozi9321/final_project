/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function init() {
  // get dropdown menu button(generates array)
  let dropdownbtn = document.getElementsByClassName("dropbtn");

  dropdownbtn[0].addEventListener("click", function () {
    // get dropdown menu content
    let dropdownContent = document.getElementsByClassName("dropdown-content");
    // check if content displayed
    if (dropdownContent[0].style.display === "") {
      dropdownContent[0].style.display = "block";
    } else {
      dropdownContent[0].style.display = "";
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});

// products section
let products = [
  {
    id: "p_0",
    name: "ყურსასმენი",
    price: "300",
    description:
      "სპეციალური გამოცემა RIMOWA x Bang & Olufsen Beoplay H9i ყურსასმენები, რომლებიც მოთავსებულია  RIMOWA-ს ხელმოწერით. ",
  },
  {
    id: "p_1",
    name: "სანათი",
    price: "150",
    description: "უმაღლესი ხარისხის სანათი",
  },
  {
    id: "p_2",
    name: "დინამიკი",
    price: "190",
    description: "უმაღლესი ხარისხის დინამიკი",
  },
  {
    id: "p_3",
    name: "ყურსასმენი",
    price: "999999",
    description: "უმაღლესი ხარისხის ყურსასმენი",
  },
  {
    id: "p_4",
    name: "სანათი",
    price: "70",
    description: "უმაღლესი ხარისხის სანათი",
  },
  {
    id: "p_5",
    name: "სმარტ დინამიკი",
    price: "520",
    description: "უმაღლესი ხარისხის სმარტ დინამიკი",
  },
  {
    id: "p_6",
    name: "ტელევიზორი",
    price: "360",
    description: "უმაღლესი ხარისხის ტელევიზორი",
  },
];

let numberOfProducts = products.length;

var container = document.getElementById("product-list");

for (let i = 0; i < numberOfProducts; i++) {
  // create div element
  let card = document.createElement("div");
  // set "card" as class for each created div
  card.className = "card";
  // set "card" + 1 as id for each created div
  card.id = "p_" + i;

  // create elements
  let image = document.createElement("img");
  let name = document.createElement("h1");
  let price = document.createElement("p");
  let description = document.createElement("p");

  // main image holder div
  let div0 = document.createElement("div");
  div0.className = "picture";

  // create image elements for cart and heart icons
  let heartIcon = document.createElement("img");
  heartIcon.src = "./assets/images/heart.svg";
  heartIcon.className = "heartIcon";

  let cartIcon = document.createElement("img");
  cartIcon.src = "./assets/images/cart.svg";
  cartIcon.className = "cartIcon";

  // create parent div element for name and descriptions
  let div1 = document.createElement("div");
  div1.className = "name-description";

  // create parent div element for price and button
  let div2 = document.createElement("div");
  div2.className = "price-button";

  let divprice = document.createElement("div");

  let span = document.createElement("span");
  span.textContent = "ლარი";

  // button element
  let button = document.createElement("button");
  button.textContent = "ყიდვა";
  button.id = "p_" + i;

  // empty array for image properties from product objects
  let allImages = [];
  let allNames = [];
  let allPrices = [];
  let allDescription = [];

  // loop through products =>
  for (let i = 0; i < numberOfProducts; i++) {
    // => push each image property to array
    allImages.push(products[i].image);
    allNames.push(products[i].name);
    allPrices.push(products[i].price);
    allDescription.push(products[i].description);
  }

  let allImageslen = allImages.length;
  // loop through allImage array
  for (let i = 0; i < allImageslen; i++) {
    if (card.id === products[i].id) {
      image.src = allImages[i];
    }
  }

  let allNameslen = allNames.length;
  // loop through allImage array
  for (let i = 0; i < allNameslen; i++) {
    if (card.id === products[i].id) {
      name.textContent = allNames[i];
    }
  }

  let allPricelen = allPrices.length;
  // loop through allImage array
  for (let i = 0; i < allPricelen; i++) {
    if (card.id === products[i].id) {
      price.textContent = allPrices[i];
    }
  }

  let allDesclen = allDescription.length;
  // loop through allDescription array
  for (let i = 0; i < allDesclen; i++) {
    if (card.id === products[i].id) {
      description.textContent = allDescription[i];
    }
  }

  div0.appendChild(image);
  div1.appendChild(name);
  div1.appendChild(description);
  div2.appendChild(span);
  divprice.appendChild(price);
  divprice.appendChild(span);
  div2.appendChild(divprice);
  div2.appendChild(button);
  card.appendChild(div0);
  card.appendChild(div1);
  card.appendChild(heartIcon);
  card.appendChild(cartIcon);
  card.appendChild(div2);
  container.append(card);
}
