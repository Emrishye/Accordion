"use strict";

const expand = document.querySelectorAll(".question");
const ans1 = document.querySelector(".answer1");
const ans2 = document.querySelector(".answer2");
const ans3 = document.querySelector(".answer3");
const ans4 = document.querySelector(".answer4");
const ans5 = document.querySelector(".answer5");
const ans6 = document.querySelector(".answer6");
for (let i = 0; i < expand.length; i++) {
  expand[i].addEventListener("click", function () {
    if (i === 0) {
      ans1.classList.toggle("hidden");
      ans2.classList.add("hidden");
      ans3.classList.add("hidden");
      ans4.classList.add("hidden");
      ans5.classList.add("hidden");
      ans6.classList.add("hidden");
    } else if (i === 1) {
      ans1.classList.add("hidden");
      ans2.classList.toggle("hidden");
      ans3.classList.add("hidden");
      ans4.classList.add("hidden");
      ans5.classList.add("hidden");
      ans6.classList.add("hidden");
    } else if (i === 2) {
      ans1.classList.add("hidden");
      ans2.classList.add("hidden");
      ans3.classList.toggle("hidden");
      ans4.classList.add("hidden");
      ans5.classList.add("hidden");
      ans6.classList.add("hidden");
    } else if (i === 3) {
      ans1.classList.add("hidden");
      ans2.classList.add("hidden");
      ans3.classList.add("hidden");
      ans4.classList.toggle("hidden");
      ans5.classList.add("hidden");
      ans6.classList.add("hidden");
    } else if (i === 4) {
      ans1.classList.add("hidden");
      ans2.classList.add("hidden");
      ans3.classList.add("hidden");
      ans4.classList.add("hidden");
      ans5.classList.toggle("hidden");
      ans6.classList.add("hidden");
    } else if (i === 5) {
      ans1.classList.add("hidden");
      ans2.classList.add("hidden");
      ans3.classList.add("hidden");
      ans4.classList.add("hidden");
      ans5.classList.add("hidden");
      ans6.classList.toggle("hidden");
    }
  });
}
