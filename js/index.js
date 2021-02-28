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

let items = document.getElementsByClassName("featured__cards");
items[0].style.display = "flex";
let counter = 0;

function timer () {
  counter++;
  if (counter > items.length - 1) {
    counter = 0;
    items[2].style.display = "none";
  }
  items[counter].style.display = "flex";
  items[counter - 1].style.display = "none";
};
window.setInterval(timer, 5000)

let left = document.querySelector(".controls__left");
left.addEventListener("click", (event) => {
  counter--;
  if (counter > items.length - 1) {
    counter = 0;
    items[2].style.display = "none";
  }
  items[counter].style.display = "flex";
  items[counter + 1].style.display = "none";
});

let right = document.querySelector(".controls__right");
right.addEventListener("click", (event) => {
  counter++;
  if (counter > items.length - 1) {
    counter = 0;
    items[2].style.display = "none";
  }
  items[counter].style.display = "flex";
  items[counter - 1].style.display = "none";
});

//Events
$("#card1").on("mouseover", function () {
    $("#btns1").addClass("open");
  });
  $("#card1").on("mouseout", function () {
    $("#btns1").removeClass("open");
  });
  
  $("#card1").on("mouseover", function () {
    $("#price1").addClass("hide");
  });
  $("#card1").on("mouseout", function () {
    $("#price1").removeClass("hide");
  });
  