"use strict";

function init() {
  // get all button ellement from the main html page(generates array)
  let buttons = document.getElementsByClassName("button");
  // array length
  let buttonsArrayLength = buttons.length;
  // iterate over array of button elements
  for (let i = 0; i < buttonsArrayLength; i++) {
    // event handler
    buttons[i].addEventListener("click", function () {
      // get button ID
      let currentID = buttons[i].id;
      // upload to localStorage for later use
      window.localStorage.setItem("ID", JSON.stringify(currentID));
      // On Click go to product.html file
      window.document.location = "./productPage.html";
    });
  }
}

// localStorage.clear();
document.addEventListener("DOMContentLoaded", function () {
  init();
});
