/*jshint esversion:6*/
const homepage = require("./itemList.js");

function createItems(items){
  const root = document.getElementById("Tablets");
  root.innerHTML = '';
  items.forEach((item)=>{
    var parent = document.createElement("div");
    const image = document.createElement("img");
    var br = document.createElement('br');
    const titleElement = document.createElement("SPAN");
    const description = document.createElement("SPAN");
    const cost = document.createElement("SPAN");
    if(item.title.length > 15){
          titleElement.append(item.title.slice(0, 15)+"...");
        } else {
          titleElement.append(item.title);
        }
    titleElement.className = "ititle";
    image.src = item.imgSrc;
    image.className = "item__image";
    parent.className = "tablets";
    parent.onclick = function() {
      localStorage.setItem("img", item.imgSrc);
      localStorage.setItem("title", item.title);
      localStorage.setItem("price", item.price);
      location.href = 'item.html';
    };
    cost.append(item.price);
    cost.className = "iprice";
    image.height = "222";
    image.width = "142";
    parent.append(titleElement);
    parent.append(br);
    parent.append(image);
    parent.append(cost);
    root.append(parent);
  })
}

module.exports = {
  createItems
}
