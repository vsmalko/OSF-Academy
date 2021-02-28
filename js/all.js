//Current Year
let current_year = new Date().getFullYear();
document.querySelectorAll(".year").forEach((item) => {
  item.innerHTML = current_year;
});

// Onclicks
$(".hamburger__logo").on("click", function () {
  $(".hamburger__list").toggleClass("open");
});

$("#hamburger__list__title1").on("click", function () {
  $("#down1").toggleClass("up_icon");
  $("#down1").toggleClass("down_icon");
  $("#hamburger__list1 a").toggleClass("open");
});

$("#hamburger__list__title2").on("click", function () {
  $("#down2").toggleClass("up_icon");
  $("#down2").toggleClass("down_icon");
  $("#hamburger__list2 a").toggleClass("open");
});

$("#mobile--footer__list__title1").on("click", function () {
  $("#down3").toggleClass("up_icon");
  $("#down3").toggleClass("down_icon");
  $("#mobile--footer__list1 p").toggleClass("open");
});

$("#mobile--footer__list__title2").on("click", function () {
  $("#down4").toggleClass("up_icon");
  $("#down4").toggleClass("down_icon");
  $("#mobile--footer__list2 a").toggleClass("open");
});

$("#mobile--footer__list__title3").on("click", function () {
  $("#down5").toggleClass("up_icon");
  $("#down5").toggleClass("down_icon");
  $("#mobile--footer__list3 a").toggleClass("open");
});

$(".services").on("mouseover", function () {
  $(".header--fullscreen__dropdown").addClass("open");
});
$(".services").on("mouseout", function () {
  $(".header--fullscreen__dropdown").removeClass("open");
});

$(".header--fullscreen__dropdown").on("mouseover", function () {
  $(".header--fullscreen__dropdown").addClass("open");
});
$(".header--fullscreen__dropdown").on("mouseout", function () {
  $(".header--fullscreen__dropdown").removeClass("open");
});

$(".popular_items__card__btn").on("click", function () {
  $(".popular_items__container").append(`<div class="popular_items__card card">
  <img src="images/item1.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <p class="popular_items__card__price">$ 799.55</p>
  </div>
</div>


<div class="popular_items__card card" id="card1">
<img src="images/item2.jpg" class="card-img-top" alt="..." />
<div class="card-body">
  <p class="card-text">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </p>
  <p class="popular_items__card__price" id="price1">$ 850.55</p>
  <div class="popular_items__card__btns" id="btns1">
    <button type="button" class="popular_items__card__btn1">$ 799.55</button>
    <button type="button" class="popular_items__card__btn2">BUY NOW</button>
  </div>
</div>
</div>

<div class="popular_items__card card" id="card2">
<img src="images/item3.jpg" class="card-img-top" alt="..." />
<div class="card-body">
  <div class="add_and_fav">
  <button class="add"><i class="fas fa-plus"></i></button>
  <button class="fav"><i class="fas fa-heart"></i></button>
</div>
  <p class="card-text">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </p>
  <p class="popular_items__card__price">$ 450.55</p>
</div>
</div>

<div class="popular_items__card card" id="card3">
<img src="images/item4.jpg" class="card-img-top" alt="..." />
<div class="card-body">
  <p class="review">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </p>
  <p class="review"><i class="fas fa-user-check"></i>5H AGO</p>
  <!-- <p class="popular_items__card__price">$ 320.55</p> -->
</div>
</div>

<div class="popular_items__card card">
<img src="images/item5.jpg" class="card-img-top" alt="..." />
<div class="card-body">
  <p class="card-text">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </p>
  <p class="popular_items__card__price">$ 967.55</p>
</div>
</div>

<div class="popular_items__card card">
<img src="images/item6.jpg" class="card-img-top" alt="..." />
<div class="card-body">
  <p class="card-text">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </p>
  <p class="popular_items__card__price">$ 567.56</p>
</div>
</div>

<div class="popular_items__card card">
<img src="images/item7.jpg" class="card-img-top" alt="..." />
<div class="card-body">
  <p class="card-text">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </p>
  <p class="popular_items__card__price">$ 277.525</p>
</div>
</div>

<div class="popular_items__card card">
<img src="images/item8.jpg" class="card-img-top" alt="..." />
<div class="card-body">
  <p class="card-text">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </p>
  <p class="popular_items__card__price">$ 543.12</p>
</div>
</div>`);
});

//Cart
let cart = 0;

let select = document.querySelectorAll(".add");
let products = document.querySelectorAll(".cart");
select.forEach((item) => {
  item.addEventListener("click", () => {
    cart++;
    products.forEach((item) => {
      item.innerHTML = cart;
    });
  });
});

//Favorites
let favorites = 0;

let like = document.querySelectorAll(".fav");
let favs = document.querySelectorAll(".favorites");
like.forEach((item) => {
  item.addEventListener("click", () => {
    favorites++;
    favs.forEach((item) => {
      item.innerHTML = favorites;
    });
  });
});

//Sign up/in form
$(".sign").on("click", function () {
  $(".sign_form").toggleClass("flex-col");
  // $(".sign_form").toggleClass("hide");
});

let sign_btn = document.querySelector(".sign_form__icon");
let password = document.querySelector(".sign_form__pass");
sign_btn.addEventListener("click", () => {
  password.type = "text";
});

//Cookies
let cookies = document.querySelector(".cookies");
let cookies_close = document.querySelector(".cookies__icon");
let cookies_btn = document.querySelector(".cookies__btn");

setTimeout(function Cookies() {
  cookies.classList.remove("hide");
}, 10000);

cookies_btn.addEventListener("click", () => {
  cookies.classList.add("hide");
});

cookies_close.addEventListener("click", () => {
  cookies.classList.add("hide");
});
