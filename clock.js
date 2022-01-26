const clock = document.querySelector("h2#clock");

// ` ` << ES6 부터 도입 된 템플릿 리터럴인 백틱
// 줄바꿈 등을 자유롭게 가능  
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}

getClock();
setInterval(getClock , 1000);