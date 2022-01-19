const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];


const h2 = document.querySelector("h2");

const superEventHandler = {
  mouseoverHandle: function () {
    h2.innerHTML = "mouseOver";
    h2.style.color = colors[0];
  },
  mouseLeaveHandle: function () {
    h2.innerHTML = "mouseLeave";
    h2.style.color = colors[1];
  },
  windowResizeHandle: function () {
    h2.innerHTML = "resizing";
    h2.style.color = colors[2];
  },
  mouseRightClick: function () {
    h2.innerHTML = "mouseRightBtnClick";
    h2.style.color = colors[3];
  }
};
//조건 1(condition 1)
h2.addEventListener("mouseenter", superEventHandler.mouseoverHandle);
//조건 2 (condition 2)
h2.addEventListener("mouseleave", superEventHandler.mouseLeaveHandle);
//조건 3 (condition 3)
window.addEventListener("resize", superEventHandler.windowResizeHandle);
//조건 4 (condition 4)
window.addEventListener("contextmenu", superEventHandler.mouseRightClick);