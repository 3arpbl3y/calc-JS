"use strict";

let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const action = ["-", "+", "*", "/"];

//screen

const out = document.querySelector(".calc-screen p");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

document.querySelector(".reset").onclick = clearAll;

const keytest = document.querySelector(".keytest");

// document.addEventListener("keypress", (e) => {
//   console.log(e);
//   if (e.keyCode === 32) {
//     clearAll();
//   }
// });

document.addEventListener("keypress", (e) => {
  if (e.key === " ") {
    clearAll();
  }
});

document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("reset")) return;
  out.textContent = "";
  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (b === "" && sign === "") {
      a += key;

      console.log(a, b, sign);
      out.textContent = a;
    } else if (a != '' && b!== '' && finish)
  }

  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(a, b, sign);
    return;
  }
};
