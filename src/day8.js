const randForm = document.querySelector(".randform");
const maxNum = document.querySelector(".maxNum");
const myNum = document.querySelector(".myNum");
const show = document.querySelector(".show");
const winlose = document.querySelector(".winlose");

function onPlayBtnClick(e) {
  e.preventDefault();
  let randNum = Math.floor(Math.random() * (maxNum.value - 0 + 1) + 0);
  show.innerHTML =
    "you chose : " + myNum.value + ", the machine chose : " + randNum;
  if (myNum.value === randNum.toString()) {
    winlose.innerHTML = "you Win!";
  } else {
    winlose.innerHTML = "you lose!";
  }
}

randForm.addEventListener("submit", onPlayBtnClick);