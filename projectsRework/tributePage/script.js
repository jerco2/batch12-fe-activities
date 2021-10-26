const navbar = document.querySelector(".navbar");
const image = document.querySelector("#image");
const movie1 = document.querySelector("#movie1");
const movie2 = document.querySelector("#movie2");
const movie3 = document.querySelector("#movie3");
const body = document.querySelector("body");
const menu = document.querySelector("#burger");
const navButtons = document.querySelector(".navButtons");

var lastScrollTop = 0;

// ----- divs slides in on scroll -----
window.addEventListener("scroll", function () {
  // if (body.style.width < 768) {
  //   return;
  // } else {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
  if (image.style.top === 0) {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
  // }
});
var sliders = document.querySelectorAll(".slide-in");
const appearOptions = { rootMargin: "0px 0px -200px 0px" };
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);
sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});

// ----- hides scrollbar after 1.5secs of mousewheel inactivity -----
document.onwheel = (function () {
  var onmousestop = function () {
      body.style.overflowY = "hidden";
    },
    thread;
  return function () {
    clearTimeout(thread);
    thread = setTimeout(onmousestop, 1500);
  };
})();

// ----- burger menu functions -----
burger.addEventListener("click", function () {
  navButtons.classList.add("active");
});
navButtons.addEventListener("click", function () {
  navButtons.classList.remove("active");
});
