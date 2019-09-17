/*jshint esversion:6*/

//Arvutitark

const items = document.getElementsByClassName("large-block-grid-1 medium-block-grid-1 small-block-grid-1 products-grid products-list products-grid-3");
const items2 = items[0].children;
const pics = [];
const names = [];
const prices = [];
const arr = [];
for(var i = 1; i<items2.length+1; i++){
    pics.push(document.querySelector("body > div.off-canvas-wrap > div.inner-wrap > section > section.body > div > div > div > div.large-9.medium-12.small-12.columns.content > ul.large-block-grid-1.medium-block-grid-1.small-block-grid-1.products-grid.products-list.products-grid-3 > li:nth-child("+i+") > div > div.row.collapse > div.large-3.medium-5.small-12.columns.theheight.display_table > a > img"))};
console.log(pics[3].currentSrc);
for(var i = 1; i<items2.length+1; i++){
names.push(document.querySelector("body > div.off-canvas-wrap > div.inner-wrap > section > section.body > div > div > div > div.large-9.medium-12.small-12.columns.content > ul.large-block-grid-1.medium-block-grid-1.small-block-grid-1.products-grid.products-list.products-grid-3 > li:nth-child("+i+") > div > div.row.collapse > div.large-9.medium-7.small-12.columns.theheight > a > h2").innerHTML)};
console.log(names[3]);
for(var i = 1; i<items2.length+1; i++){
  prices.push(document.querySelector("body > div.off-canvas-wrap > div.inner-wrap > section > section.body > div > div > div > div.large-9.medium-12.small-12.columns.content > ul.large-block-grid-1.medium-block-grid-1.small-block-grid-1.products-grid.products-list.products-grid-3 > li:nth-child("+i+") > div > div.row.collapse > div.large-9.medium-7.small-12.columns.theheight > div.pricecontainer > span:nth-child(1)").innerHTML)};
for (var i = 0; i < items2.length; i++) {
  arr.push({
      imgSrc: pics[i].currentSrc,
      title: names[i],
      price: prices[i],
    })
}
