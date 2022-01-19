const body = document.querySelector("body");
const h1 = document.querySelector("h1");
h1.style.color = "#000";

function HandleResize() {
  let WindowWidth = window.innerWidth;
  if (WindowWidth <= 100) {
    body.style.backgroundColor = "red";
  } else if (WindowWidth > 100 && WindowWidth <= 300) {
    body.style.backgroundColor = "orange";
  } else if (WindowWidth > 300 && WindowWidth <= 500) {
    body.style.backgroundColor = "yellow";
  } else if (WindowWidth > 500 && WindowWidth <= 700) {
    body.style.backgroundColor = "green";
  } else if (WindowWidth > 700 && WindowWidth <= 900) {
    body.style.backgroundColor = "blue";
  } else if (WindowWidth > 900 && WindowWidth <= 1100) {
    body.style.backgroundColor = "navy";
  } else {
    body.style.backgroundColor = "purple";
  }
}
window.addEventListener("resize", HandleResize);