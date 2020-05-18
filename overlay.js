// open overlay
document.addEventListener("click", function () {
  document.getElementById("overlayNavIcon").onclick = openOverlay;
  // close overlay on another click
  if (document.getElementById("overlay").style.width == "78%") {
    document.getElementById("close-icon").onclick = closeOverlay;
  }
  document.getElementById("contacts").onclick = closeOverlay;
});

// Open Overlay func
function openOverlay() {
  document.getElementById("products").addEventListener("click", function () {
    window.document.location = "./productList.html";
  });
  // set width to 100% to show up overlay
  document.getElementById("overlay").style.width = "78%";
  // disable scrolling
  document.querySelector("body").style.overflow = "hidden";
  // change image on click
  document.getElementById("overlayNavIcon").style.display = "none";
  document.getElementById("close-icon").style.display = "block";
}

// Close Overlay func
function closeOverlay() {
  // set width to 0px to hide overlay
  document.getElementById("overlay").style.width = "0px";
  // enable scrolling
  document.querySelector("body").style.overflow = "visible";
  // change image on click
  document.getElementById("close-icon").style.display = "none";
  document.getElementById("overlayNavIcon").style.display = "block";
}
