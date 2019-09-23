/*jshint esversion:6*/

const homepage = require("./item.js");
import {setup} from "./itemList.js";
import {setupItem} from "./item.js";

window.addEventListener("load", () =>{
  setup();
  setupItem();
});
