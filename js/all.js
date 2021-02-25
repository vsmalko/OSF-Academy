//Initialize AOS library

AOS.init();

//Slideshow
let current_year = new Date().getFullYear();
document.getElementById("year").innerHTML = current_year;

let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slideshow__slides");
  let dots = document.querySelectorAll(".slideshow__dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Cards
let cardIndex = 1;
showCards(cardIndex);

function currentCard(n) {
  showCards((cardIndex = n));
}

function showCards(n) {
  let i;
  let cards = document.querySelectorAll(".popular_items__card");
  let dots = document.querySelectorAll(".popular_items__dot");
  if (n > cards.length) {
    cardIndex = 1;
  }
  if (n < 1) {
    cardIndex = cards.length;
  }
  for (i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  cards[cardIndex - 1].style.display = "block";
  dots[cardIndex - 1].className += " active";
  dots.forEach((item) => {
    item.addEventListener("click", (event) => {
      currentCard(cardIndex);
    });
  });
}

document.querySelectorAll(".slideshow__dot").forEach((item) => {
  item.addEventListener("click", (event) => {
    currentSlide(slideIndex);
  });
});

//Featured Items

let itemIndex = 0;
showItems();
let val = document.querySelector("progress").value;
if ((itemIndex = 1)) {
  val = 25;
} else if ((itemIndex = 2)) {
  val = 50;
} else if ((itemIndex = 3)) {
  val = 75;
} else {
  val = 100;
}

function showItems() {
  let i;
  let items = document.getElementsByClassName("featured__cards");
  let arrows = document.getElementsByClassName("arrow");
  for (i = 0; i < items.length; i++) {
    items[i].style.display = "none";
  }
  itemIndex++;
  if (itemIndex > items.length) {
    itemIndex = 1;
  }
  items[itemIndex - 1].style.display = "flex";
  setTimeout(showItems, 4000);
  // document.querySelectorAll(".arrow").forEach((arrow) => {
  //   arrow.addEventListener("click", (event) => {
  //     currentItem(itemIndex);
  //   });
  // });
}

document.querySelectorAll(".slideshow__dot").forEach((item) => {
  item.addEventListener("click", (event) => {
    currentSlide(slideIndex);
  });
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

$("#footer__list__title1").on("click", function () {
  $("#down3").toggleClass("up_icon");
  $("#down3").toggleClass("down_icon");
  $("#footer__list1 p").toggleClass("open");
});

$("#footer__list__title2").on("click", function () {
  $("#down4").toggleClass("up_icon");
  $("#down4").toggleClass("down_icon");
  $("#footer__list2 a").toggleClass("open");
});

$("#footer__list__title3").on("click", function () {
  $("#down5").toggleClass("up_icon");
  $("#down5").toggleClass("down_icon");
  $("#footer__list3 a").toggleClass("open");
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
