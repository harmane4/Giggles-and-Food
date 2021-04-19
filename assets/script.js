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
const storedInformation = localStorage.getItem('Name');
const storedInfoReview = localStorage.getItem('Review')
const storedInfoRestaurant = localStorage.getItem('Restaurant')
const button = document.querySelector(".button");
const reviews = document.querySelector(".reviews")
const ReviewList = document.querySelector(".reviewList")
var listElement = document.createElement("li");



document.getElementById("nameChange").innerHTML = storedInformation 
document.getElementById("reviewContent").innerHTML = storedInfoReview
listElement.textContent = localStorage.getItem('Review');



if (storeName) {
  storeName.textContent = storedInformation
}
if (storeReview) {
  storeReview.textContent = storedInfoReview
}

storeName.addEventListener('input', information => {
  console.log(information.target.value)
  storeName.textContent = information.target.value
})

const saveToLocalStorage = () => {
  localStorage.setItem('Name', storeName.textContent);
  localStorage.setItem('Review', storeReview.textContent);
  localStorage.setItem('Restaurant', storeRestaurantName.value);

  thankYouMessage()
  renderReviews()
}

button.addEventListener('click', saveToLocalStorage)


storeReview.addEventListener('input', information => {
  console.log(information.target.value)
  storeReview.textContent = information.target.value
})

function clearFields () {
  storeName.value = "";
  storeReview.value = "";
  
}

clearFields () 



function thankYouMessage () {

  //if (storeName.value === "") {
    //console.log("Please enter name")
  //} if (storeReview.value === "") {
    //console.log("Please leave a review")
  //} else {
    if (storeReview) {
    console.log("Thank you for your review")
    storeReview.placeholder = "Thank you for your review";
    document.getElementById("nameChange").innerHTML = localStorage.getItem('Name') 
    document.getElementById("reviewContent").innerHTML = localStorage.getItem('Review')
    }
   
  }
  
  function renderReviews() {
    for (let index = 0; index < ReviewList.length; index++) {
      var listElement = document.createElement("li");
      listElement.textContent = localStorage.getItem('Review');
      ReviewList.appendChild(listElement);
    }
  }


// Store Information
//localStorage.setItem('name', 'John Doe');
//localStorage.setItem('storeRestaurantName', 'restaurant');

//Acess information and store in variable
//var name =localStorage.getItem('name');
//var name =localStorage.getItem('restaurantName');
//var name =localStorage.getItem('review');

// Number of items stored
//var items = localStorage.length;








 
