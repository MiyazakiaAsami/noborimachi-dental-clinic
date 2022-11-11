'use strict';

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //ハンバーガーメニュー
function toggleNav() {
  const body = document.body;
  const hamburger = document.getElementById("js_hamburger");
  const overlay = document.getElementById("js_overlay");
  hamburger.addEventListener("click", function () {
    body.classList.toggle("nav_open"); //クラスが含まれていれば削除、含まれていなければ追加する
  });
  overlay.addEventListener("click", function () {
    body.classList.remove("nav_open"); //クラスを削除する
  });
}
toggleNav();