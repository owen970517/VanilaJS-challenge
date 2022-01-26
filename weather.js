//getCurrentPosition() >> 2개의 argument가 존재하는데 
//하나는 모든 게 잘 실행됬을 경우 실행되는 함수 나머지는 에러가 발생했을때 실행

// 내 고유의 API_KEY
const API_KEY = "df7901bc99212a9f6b937a6d76ef7165";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("내 위도" , lat , "내 경도" , lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main}/ ${Math.floor(data.main.temp)}℃`; 
    });
}
function onGeoError() {
    alert("실패했음")
}

navigator.geolocation.getCurrentPosition(onGeoOk , onGeoError);