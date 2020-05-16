"use strict";

// store retrieved data on products array
let products = [];

// retrieve data from local json file
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    products = data;
    init();
  })
  .catch((eror) => {
    console.error("Something went wrong with retrieving the data!");
  });

function init() {
  // get product ID from local storage
  let id = JSON.parse(window.localStorage.getItem("ID"));
  // loop through product objects
  for (let i = 0; i < products.length; i++) {
    // check if gotten ID match, ID properties in objects
    if (products[i].id === id) {
      // document.getElementById("ProductImage")
      document.getElementById("productName").textContent = products[i].name;
      document.getElementById("price").textContent = products[i].price;
      document.getElementById("productDescription").textContent =
        products[i].description;
      break;
    } else {
      // ID mismatch
      console.log("Product ID mismatch!");
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});
