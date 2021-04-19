//mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active')
})

//local storage
const storeName = document.querySelector(".input");
const storeReview = document.querySelector(".textarea");
const storeRestaurantName = document.querySelector(".restaurantChoices")
// const storedInformation = localStorage.getItem('Name');
// const storedInfoReview = localStorage.getItem('Review')
// const storedInfoRestaurant = localStorage.getItem('Restaurant')
const button = document.querySelector(".button");
const reviews = document.querySelector(".reviews")
const reviewList = document.querySelector(".reviewList")
const reviewInput = document.getElementById("reviewInputText");

console.log(reviewInput)

var listElement = document.createElement("li");
var listOfReviews;

getSearchHistoryFromLocalStorage();
renderSearchHistoryResults();
button.addEventListener("click", saveSearchHistoryToLocalStorage(reviewInput.value));

//LOCAL STORAGE FUNCTIONS

function saveSearchHistoryToLocalStorage(review) {
  //review is the parameter that represents the argument
  listOfReviews.push(review);
  localStorage.setItem("review", JSON.stringify(listOfReviews));
}

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
  for (let index = 0; index < listOfReviews.length; index++) {
    const review = listOfReviews[index];
    var listElement = document.createElement("li");
    listElement.textContent = review;
    reviewList.appendChild(listElement);
  }
}

// document.getElementById("nameChange").innerHTML = storedInformation 
// document.getElementById("reviewContent").innerHTML = storedInfoReview
// listElement.textContent = localStorage.getItem('Review');


// if (storeName) {
//   storeName.textContent = storedInformation
// }
// if (storeReview) {
//   storeReview.textContent = storedInfoReview
// }

// storeName.addEventListener('input', information => {
//   console.log(information.target.value)
//   storeName.textContent = information.target.value
// })

// //suggestion
// const saveToLocalStorage = () => {
//   localStorage.setItem('Name', storeName.textContent);
//   // localStorage.setItem('Review', storeReview.textContent);
//   var savedReviews = JSON.parse( localStorage.getItem("Review") )
//   //for non-string data, we must parse data back into arrays when getItem.
//   //we'll assume that savedReviews is then an array of reviews.
//   if( savedReviews ){
//     //if something's already in localStorage.Review...
//     //1. push new review into savedReviews
//     //2. setItem into localStorage to replace the old data.
//   } else {
//     //nothing is saved, so we put the one review into an array and store THAT.
//     localStorage.setItem("Review", [storeReview.textContent])
//   }

// //end



// const saveToLocalStorage = () => {
//   localStorage.setItem('Name', storeName.textContent);
//   localStorage.setItem('Review', storeReview.textContent);
//   localStorage.setItem('Restaurant', storeRestaurantName.value);

//   thankYouMessage()
//   renderReviews()
//   clearFields () 
// }

// button.addEventListener('click', saveToLocalStorage)

// storeReview.addEventListener('input', information => {
//   console.log(information.target.value)
//   storeReview.textContent = information.target.value
// })

// function clearFields () {
//   storeName.value = "";
//   storeReview.value = "";
// }

// function thankYouMessage () {

//   //if (storeName.value === "") {
//     //console.log("Please enter name")
//   //} if (storeReview.value === "") {
//     //console.log("Please leave a review")
//   //} else {
//     if (storeReview) {
//     console.log("Thank you for your review")
//     storeReview.placeholder = "Thank you for your review";
//     document.getElementById("nameChange").innerHTML = localStorage.getItem('Name') 
//     document.getElementById("reviewContent").innerHTML = localStorage.getItem('Review')
//     }
   
//   }
  
//   function renderReviews() {
//     for (let index = 0; index < 1; index++) {
//       var listElement = document.createElement("li");
//       listElement.textContent = localStorage.getItem('Review');
//       reviewList.appendChild(listElement);
//     }
//   }

// Store Information
//localStorage.setItem('name', 'John Doe');
//localStorage.setItem('storeRestaurantName', 'restaurant');

//Acess information and store in variable
//var name =localStorage.getItem('name');
//var name =localStorage.getItem('restaurantName');
//var name =localStorage.getItem('review');

// Number of items stored
//var items = localStorage.length;







 


