"use strict";

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
