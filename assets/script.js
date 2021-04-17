//mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active')
})

const storeName = document.querySelector(".input");
const storeReview = document.querySelector(".textarea");
const storedInformation = localStorage.getItem('Name');
const storedInfoReview = localStorage.getItem('Review')
const button = document.querySelector(".button");

if (storeName) {
  storeName.textContent = storedInformation

}

storeName.addEventListener('input', information => {
  console.log(information.target.value)
  storeName.textContent = information.target.value
})

const saveToLocalStorage = () => {
  localStorage.setItem('Name', storeName.textContent);
  localStorage.setItem('Review', storeReview.textContent);
}

button.addEventListener('click', saveToLocalStorage)


if (storeReview) {
  storeReview.textContent = storedInfoReview

}

storeReview.addEventListener('input', information => {
  console.log(information.target.value)
  storeReview.textContent = information.target.value
})

button.addEventListener('click', saveToLocalStorage)


 
 
 
