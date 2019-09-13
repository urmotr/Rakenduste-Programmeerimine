function openItem(nr){
  localStorage.setItem("img", document.getElementById("img"+nr).src);
  localStorage.setItem("title", document.getElementById("title"+nr).innerHTML);
  localStorage.setItem("price", document.getElementById("price"+nr).innerHTML);
  location.href = 'item.html';
}
