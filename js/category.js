// Load more items
$(".category__load_btn").on("click", function () {
  $(".category__cards__container").append(`<div class="category__cards__card card">
    <img src="images/item1.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <p class="category__cards__card__price">$ 967.55</p>
    </div>
  </div>

  <div class="category__cards__card card">
    <img src="images/item2.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <p class="category__cards__card__price">$ 567.56</p>
    </div>
  </div>

  <div class="category__cards__card card">
    <img src="images/item3.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <p class="category__cards__card__price">$ 277.525</p>
    </div>
  </div>

  <div class="category__cards__card card">
    <img src="images/item4.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <p class="category__cards__card__price">$ 543.12</p>
    </div>
  </div>`);
});

//Prices and Values for Filters
let times = [];
let prices = document.querySelectorAll(".category__cards__card__price");

for (let i = 0; i <= prices.length - 1; i++) {
  let price = Math.floor(Math.random() * (6000 - 10) + 10);
  times.push(price);
}

prices.forEach((item, index) => {
  item.textContent = `$ ${times[index]}`;
});
prices.forEach((item, index) => {
  item.setAttribute("value", `${times[index]}`);
  console.log(item.getAttribute("value"));
});

//Hide/Show Filters
$(".hide_filters").on("click", function () {
  $(".sort").toggleClass("hide");
});

//Featured Items
let items = document.getElementsByClassName("featured__cards");
items[0].style.display = "flex";
let counter = 0;

function timer() {
  counter++;
  if (counter > items.length - 1) {
    counter = 0;
    items[2].style.display = "none";
  }
  items[counter].style.display = "flex";
  items[counter - 1].style.display = "none";
}
window.setInterval(timer, 5000);

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
