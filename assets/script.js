//mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active')
})

//local storage
const storeName = document.querySelector(".input");
const storeReview = document.querySelector(".textarea");
const storeRestaurantName = document.querySelector(".workplease")
const storedInformation = localStorage.getItem('Name');
const storedInfoReview = localStorage.getItem('Review')
const storedInfoRestaurant = localStorage.getItem('Restaurant')
const button = document.querySelector(".button");


if (storeName) {
  storeName.textContent = storedInformation
}
if (storeReview) {
  storeReview.textContent = storedInfoReview
}

// if (storeRestaurantName) {
//   storeRestaurantName.value = storedInfoRestaurant
// }

storeName.addEventListener('input', information => {
  console.log(information.target.value)
  storeName.textContent = information.target.value
})

const saveToLocalStorage = () => {
  localStorage.setItem('Name', storeName.textContent);
  localStorage.setItem('Review', storeReview.textContent);
  localStorage.setItem('Restaurant',storeRestaurantName.value);
}

button.addEventListener('click', saveToLocalStorage)
button.addEventListener('click', clearFields)

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
    }
  }
  
button.addEventListener('click', thankYouMessage)

document.getElementById("nameChange").innerHTML = storedInformation
document.getElementById("reviewContent").innerHTML = storedInfoReview


// Store Information
//localStorage.setItem('name', 'John Doe');
//localStorage.setItem('storeRestaurantName', 'restaurant');

//Acess information and store in variable
//var name =localStorage.getItem('name');
//var name =localStorage.getItem('restaurantName');
//var name =localStorage.getItem('review');

// Number of items stored
//var items = localStorage.length;








 
