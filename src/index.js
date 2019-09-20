/*jshint esversion:6*/

const homepage = require("./itemList.js");
const itempage = require("./item.js");

function openItem(nr){
  localStorage.setItem("img", document.getElementById("img"+nr).src);
  localStorage.setItem("title", document.getElementById("title"+nr).innerHTML);
  localStorage.setItem("price", document.getElementById("price"+nr).innerHTML);
  location.href = 'item.html';
}

window.addEventListener("load", () =>{
  homepage.setup();
  itempage.setup();
});
