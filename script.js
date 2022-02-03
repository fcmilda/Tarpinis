"use strict";

// for (let i = 0; i < sections.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     sections[i].classList.remove("display");
//   });
// }

// let element = document.getElementsByClassName("tabsSection")[index];
// element.classList.add("display");

const buttons = document.getElementsByClassName("tabsButton");

function changeContent(index) {
  const sections = document.getElementsByClassName("tabsSection");

  for (let i = 0; i < sections.length; i++) {
    sections[i].classList.remove("display");
  }
  let element = document.getElementsByClassName("tabsSection")[index];
  element.classList.add("display");
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", changeContent);
}
