/*jshint esversion:6*/

function setup(){
  var parent = document.createElement("div");
  const image = document.createElement("img");
  var br = document.createElement('br');
  const titleElement = document.createElement("SPAN");
  const description = document.createElement("SPAN");
  const cost = document.createElement("SPAN");
  const textElement = document.createTextNode("Your description here.");
  description.append(textElement);
  description.className = "caption";
  titleElement.append(localStorage.getItem("title"));
  titleElement.className = "title";
  image.src = localStorage.getItem("img");
  image.className = "item__image";
  parent.className = "tablets";
  image.height = "222";
  image.width = "162";
  cost.append(localStorage.getItem("price"));
  cost.className = "price";
  parent.append(titleElement);
  parent.append(br);
  parent.append(image);
  parent.append(description);
  parent.append(cost);
  const app = document.getElementById("item");
  app.append(parent);
}

module.exports = {
  setup
}
