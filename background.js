const images = [
    "0.png",
    "1.png",
    "2.png",
    "3.png"
];

// images 배열에서 배열의 길이만큼 랜덤으로 숫자 하나를 선택하고 저장 
const randomimage = images[Math.floor(Math.random() * images.length)];
// img element를 생성 
const bgImage = document.createElement("img");
// 이미지 소스를 연결 
bgImage.src = `img/${randomimage}`;


//body 안에 추가 
document.body.appendChild(bgImage);
bgImage.id = "bgImage";