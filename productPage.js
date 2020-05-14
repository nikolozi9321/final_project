"use strict";

// aray of product objects
let products = [
  {
    id: "p_0",
    name: "Beoplay H9i- ის ლიმიტირებული ექსკლუზიური გამოცემა",
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
