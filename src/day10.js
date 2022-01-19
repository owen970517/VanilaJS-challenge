const clock = document.querySelector('.clock');

function Xmas() {
    const today = new Date();
    const christmas = new Date('2022-12-25T00:00:00');
    // 1970년 부터 2022년 12월 25일 까지의 시간을 밀리초로 나타냄 
    const christmasTime = christmas.getTime();
    //1970 년 부터 지금까지의 시간을 밀리초로 나타냄 
    const todayTime = today.getTime();
    const remainTime = christmasTime - todayTime;
    const christmasDay = String(Math.floor((remainTime/8.64e+7))).padStart(3,"0");
    const christmasHours = String(Math.floor((remainTime / 3.6e+6 % 24))).padStart(2,'0');
    const christmasMinutes =  String(Math.floor(remainTime %(1000*60*60)/(1000*60))).padStart(2,"0");
    const seconds = String(Math.floor((remainTime % (1000*60))/1000)).padStart(2,"0");
    clock.innerHTML = `${christmasDay}d ${christmasHours}h ${christmasMinutes}m ${seconds}s` ;
}
Xmas();
setInterval(Xmas , 1000);


