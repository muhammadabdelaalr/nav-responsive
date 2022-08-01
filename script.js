let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let btnsearch = document.querySelector(".bx-search");

btn.onclick = function () {
  sidebar.classList.toggle("active");
}

btnsearch.onclick = function () {
  sidebar.classList.toggle("active")
}

