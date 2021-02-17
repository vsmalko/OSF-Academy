//Slideshow

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
  let dots = document.querySelectorAll(".slideshow__dot");
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
}
document.querySelectorAll(".popular_items__dot").forEach((item) => {
  item.addEventListener("click", (event) => {
    currentCard(cardIndex);
  });
});
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 4000); // Change image every 4 seconds
// }

// onclicks;
$(".hamburger__logo").on("click", function () {
  $(".hamburger__list").toggleClass("open");
});

// $(".hamburger__down_icon").on("click", function () {
//   $(".hamburger__down_icon").toggleClass(".hamburger__up_icon");
//   $(".hamburger__down_icon").removeClass(".hamburger__down_icon");
//   $(".hamburger__list").addClass("open");
// });
