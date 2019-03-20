// Modal box
var modal = document.querySelector('#login-modal'),
btn = document.querySelector('#loginform'),
flogin = document.querySelector('#login_form'),
freg = document.querySelector('#register_form'),
btnreg = document.querySelector('#btn-register'),
btnreg2 = document.querySelector('#btn-reg'),
close = document.querySelector('#btn-close');
btn.onclick = function () {
    modal.style.display = "block";
}
close.onclick = function () {
    modal.style.display = "none";
}
btnreg.onclick = function () {
    flogin.style.display = 'none';
    freg.style.display = 'block';
}
btnreg2.onclick = function () {
    flogin.style.display = 'block';
    freg.style.display = 'none';
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Mobile Menu
function mobileNav() {
    var x = document.getElementById("mobile-dropdown");
    if (x.className === "m-dropdown") {
        x.className += " responsive";
    } else {
        x.className = "m-dropdown";
    }
}

// Slides Show
var slideIndex;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("arrImages");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    slideIndex++;
    if (slideIndex > slides.length - 1) {
        slideIndex = 0
    }
    setTimeout(showSlides, 5000);
}
showSlides(slideIndex = 0);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Facebook Widget
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v3.1';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


//Sticky Nav
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var categories = document.getElementById("cat-item");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    categories.style.display = "none";
  } else {
    navbar.classList.remove("sticky");
    categories.style.display = "block";
  }
}
