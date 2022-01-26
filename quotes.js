const quotes = [
    {   quote : "삶이 있는 한 희망은 있다" , 
        author : "키케로" } ,
    {
        quote : "난 아직 배가 고프다 " , 
        author : "히딩크"
    },
    {
        quote : "산다는것 그것은 치열한 전투다" , 
        author : "로망로랑"
    },
    {
        quote : "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다" , 
        author : "사무엘 존슨"
    },
    {
        quote : "신은 용기있는 자를 결코 버리지 않는다"  , 
        author : "켄러"
    },
    {
        quote : "피할수 없으면 즐겨라" , 
        author : "로버트 앨리엇"
    },
    {
        quote : "먼저 자신을 비웃어라, 다른 사람이 당신을 비웃기 전에" , 
        author : "엘사 맥스웰"
    },
    {
        quote : "자신감은 전염된다 자신감의 부족도 마찬가지다" , 
        author : "빈스 롬바르디"
    },
    {
        quote : "얇은 사람은 행운을 믿으며, 강한 사람은 원인과 결과를 믿는다" , 
        author : "랄프 왈도 에머슨"
    },
    {
        quote : "크게 실패할 용기가 있는 자만이 크게 이룰 수 있습니다" , 
        author : "존.F.케네디" 
    },
]

const quote =  document.querySelector("#quote span:first-child");
const author =  document.querySelector("#quote span:last-child");

// 0부터 배열의 갯수만큼 중 1개를 랜덤으로 고름 
const random = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = random.quote;
author.innerText = `By ${random.author}`;
