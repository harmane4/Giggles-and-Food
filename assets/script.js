//mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active')
})

//local storage
const storeName = document.querySelector(".input");
const storeReview = document.querySelector(".textarea");
// const storeRestaurantName = document.querySelector(".workplease")
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
  localStorage.setItem('Restaurant',storeRestaurantName.textContent);
}

button.addEventListener('click', saveToLocalStorage)

storeReview.addEventListener('input', information => {
  console.log(information.target.value)
  storeReview.textContent = information.target.value
})


button.addEventListener('click', renderLocalStorageInfo)

 
//  function renderLocalStorageInfo() {
//   document.getElementById("nameChange").innerHTML = storedInformation;
//  }

//  renderLocalStorageInfo() 






 
