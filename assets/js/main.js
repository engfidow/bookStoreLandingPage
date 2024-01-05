/*=============== SEARCH ===============*/
const SerchButton = document.getElementById("search-button"),
  SerchClose = document.getElementById("search-close"),
  SerchContent = document.getElementById("search-content");

if (SerchButton) {
  SerchButton.addEventListener("click", () => {
    SerchContent.classList.add("show-search");
  });
}

if (SerchClose) {
  SerchClose.addEventListener("click", () => {
    SerchContent.classList.remove("show-search");
  });
}

// const navLink = document.querySelector('nav__links');
// const LinkAction = () =>{
//     const navMenu = document.getElementById('nav-menu');

//     navMenu.classList.remove('show-menu');
// }
/*=============== LOGIN ===============*/
const LoginButton = document.getElementById("login-button"),
  LoginClose = document.getElementById("login-close"),
  LoginContent = document.getElementById("login-content");

if (LoginButton) {
  LoginButton.addEventListener("click", () => {
    LoginContent.classList.add("show-login");
  });
}

if (LoginClose) {
  LoginClose.addEventListener("click", () => {
    LoginContent.classList.remove("show-login");
  });
}

/*=============== ADD SHADOW HEADER ===============*/
/*=============== CHANGE BACKGROUND HEADER ===============*/
const shadowHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};
window.addEventListener("scroll", shadowHeader);

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: -24,
  grapCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1220: {
      spaceBetween: -32,
    },
  },
});

/*=============== FEATURED SWIPER ===============*/
let swiperfeature = new Swiper(".feater__swiper", {
  loop: true,
  spaceBetween: 16,
  grapCursor: true,
  slidesPerView: "auto",
  conterSlides: "auto",
  // Navigation arrows
 
  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper(".new__swiper", {
    loop: true,
    spaceBetween: 16,

    slidesPerView: "auto",

    // Navigation arrows
   
    breakpoints: {
      1150: {
        slidesPerView: 3,

      },
    },
  });
/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestmonial = new Swiper(".testmonial__swiper", {
    loop: true,
    spaceBetween: 16,
    grapCursor: true,
    slidesPerView: "auto",
    conterSlides: "auto",
   
    breakpoints: {
      1150: {
        slidesPerView: 3,
        centeredSlides: false,
      },
    },
  });
  

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
          sectionsClass.classList.add('active-link')
      }else{
          sectionsClass.classList.remove('active-link')
      }                                                    
  })
}
window.addEventListener('scroll', scrollActive)
/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
