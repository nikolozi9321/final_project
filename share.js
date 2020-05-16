fetch("./assets/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  })
  .catch((error) => {
    console.log("Something went wrong with retrieving the data!");
  });

fetch("./assets/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  })
  .catch((error) => {
    console.log("Something went wrong with retrieving the data!");
  });
