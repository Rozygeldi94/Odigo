// burger menu  ---start

const hamburger = document.querySelector("#hamburger");
const popup = document.querySelector("#popup");
const body = document.body;

const menu = document.querySelector("#menu").cloneNode(1);

hamburger.addEventListener("click", burgerHandler);

function burgerHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamburger.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}
function renderPopup() {
  popup.appendChild(menu);
}

function closeOnClick() {
  popup.classList.remove("open");
  hamburger.classList.remove("active");
  body.classList.remove("noscroll");
}

// fixedHeader--- start

window.onscroll = function fixedHeader() {
  const header = document.querySelector(".header");
  if (window.pageYOffset > 70) {
    header.classList.add("header-fixed");
  } else {
    header.classList.remove("header-fixed");
  }
};
