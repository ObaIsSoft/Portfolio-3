const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=> (
   hamburger.classlist.toggle("active");
   navMenu.classlist.toggle("active");
  ))
 document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", ()=> (
    hamburger.classList.remove("active");
    nav-menu.classList.remove("active");
  )))