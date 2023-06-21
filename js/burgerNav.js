const burger = document.querySelector(".burger");
const burgerIcon = document.querySelector(".burgerIcon");
const xIcon = document.querySelector(".xIcon");
const navAside = document.querySelector(".navAside");
const buttons = document.querySelectorAll('a.button')


burger.addEventListener("click", function () {
   burgerIcon.classList.toggle("show");
   xIcon.classList.toggle("show");
   navAside.classList.toggle("active");
})

buttons.forEach(button => {
   button.addEventListener("click", function() {
      burgerIcon.classList.toggle("show");
      xIcon.classList.toggle("show");
      navAside.classList.toggle("active");
   })
 })