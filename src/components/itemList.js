/*jshint esversion:6*/

//const utils = require("./utils.js");
import {createItems} from "../utils.js";


function setup(){
  const dropdown = document.querySelector('.category');
  var items = tablets;
  if(dropdown.value == "tablet"){
    items = tablets;
  } else if (dropdown.value == "phone"){
    items = phones;
  }
  dropdown.addEventListener('change', (event) => {
    if(event.target.value == "tablet"){
      items = tablets;
    } else if (event.target.value == "phone"){
      items = phones;
    }
    createItems(items);
  });
  createItems(items);
}

export default setup;