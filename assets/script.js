//mobile menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});

//local storage
const storeName = document.querySelector(".input");
const storeReview = document.querySelector(".textarea");
const storeRestaurantName = document.querySelector(".restaurantChoices");
const button = document.querySelector(".button");
const reviews = document.querySelector(".reviews");
const reviewList = document.querySelector(".reviewList");
const reviewInput = document.getElementById("reviewInputText");
var listElement = document.createElement("li");
var listOfReviews;

getSearchHistoryFromLocalStorage();
renderSearchHistoryResults();

button.addEventListener("click", function (event) {
  event.preventDefault();
  listOfReviews.push(reviewInput.value);
  localStorage.setItem("review", JSON.stringify(listOfReviews));
  renderSearchHistoryResults();
});

//LOCAL STORAGE FUNCTIONS

function getSearchHistoryFromLocalStorage() {
  var reviewSearchHistory = JSON.parse(localStorage.getItem("review"));
  if (!reviewSearchHistory) {
    // checking to see if anything exsists in local storage
    listOfReviews = [];
  } else {
    listOfReviews = reviewSearchHistory;
  }
}

function renderSearchHistoryResults() {
  reviewList.innerHTML = "";
  for (let index = 0; index < listOfReviews.length; index++) {
    const review = listOfReviews[index];
    var listElement = document.createElement("li");
    listElement.textContent = review;
    reviewList.appendChild(listElement);
  }
}

