"use strict";
//headerio efektai

const navElements = document.getElementsByClassName("nav");
const navBar = document.getElementsByTagName("nav")[0];
for (let i = 0; i < navElements.length; i++) {
  navElements[i].addEventListener("mouseover", function () {
    for (let i = 0; i < navElements.length; i++) {
      navElements[i].classList.remove("js-active-nav");
    }
    navElements[i].classList.add("js-active-nav");
  });
  navElements[i].addEventListener("mouseout", function () {
    for (let i = 0; i < navElements.length; i++) {
      navElements[i].classList.add("js-active-nav");
    }
  });
}
//meniu scrolling -- bugina paskrolinus

let lastPosition = 0;
const header = document.getElementsByTagName("header")[0];
const sideMenu = document.getElementsByClassName("side-menu")[0];

function scrolling(y) {
  if (y > 0) {
    header.classList.add("scrolled");
    sideMenu.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    sideMenu.classList.remove("scrolled");
  }
}

document.addEventListener("scroll", function () {
  lastPosition = window.scrollY;
  scrolling(window.scrollY || 0);
});

//tabai

const tabsSections = document.getElementsByClassName("tabsSection");
const tabsButtons = document.getElementsByClassName("tabsButton");
const tabsButtonsText = document.getElementsByClassName("buttonText");

for (let i = 0; i < tabsButtons.length; i++) {
  tabsButtons[i].addEventListener("click", function () {
    for (let i = 0; i < tabsSections.length; i++) {
      tabsSections[i].classList.remove("js-display");
      tabsButtons[i].classList.remove("js-active");
      tabsButtonsText[i].classList.remove("js-opacity");
    }

    tabsSections[i].classList.add("js-display");
    tabsButtons[i].classList.add("js-active");
    tabsButtonsText[i].classList.add("js-opacity");
  });
}

//meniu burger
const navBurger = document.getElementById("burger");

navBurger.addEventListener("click", function () {
  this.classList.toggle("js-rotateZ");
  sideMenu.classList.toggle("on");
});

//side menu
const sideMenuElements = document.getElementsByClassName("nav2");
for (let i = 0; i < sideMenuElements.length; i++) {
  sideMenuElements[i].addEventListener("click", function () {
    sideMenu.classList.remove("on");
    navBurger.classList.remove("js-rotateZ");
  });
}

// for (let i = 0; i < navItems.length; i++) {
//   navItems[i].addEventListener("click", function () {
//     for (var i = 0; i < navItems.length; i++) {
//       navItems[i].classList.remove("selected");
//     }
//     this.classList.add("selected");
//   });
// }

const f1name = document.getElementsByTagName("input")[0];
const f1lastname = document.getElementsByTagName("input")[1];
const f1phone = document.getElementsByTagName("input")[2];
const buttonGetStarted = document.getElementById("getstarted");

buttonGetStarted.addEventListener("click", function () {
  if (f1name.value === "" || f1lastname.value === "" || f1phone.value === "") {
    alert("Iveskite informacija");
  }
});

const f2name = document.getElementsByTagName("input")[5];
const f2lastname = document.getElementsByTagName("input")[6];
const f2phone = document.getElementsByTagName("input")[7];
const buttonSend = document.getElementById("send");

buttonSend.addEventListener("click", function () {
  if (f2name.value === "" || f2lastname.value === "" || f2phone.value === "") {
    alert("Iveskite informacija");
  }
});
