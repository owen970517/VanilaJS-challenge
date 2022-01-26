const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting  = document.querySelector("#greeting");

// ()가 존재하면 브라우저가 바로 실행시킴 
function onLoginSubmit(event) {
    // 브라우저의 기본 동작을 막아줌 
    event.preventDefault();
    loginForm.classList.add("hidden");
    //input 창에 적은 값을 username에 저장 
    const username = loginInput.value;
    // db을 이용하지 않고 데이터를 저장하는 방법 
    //localstorage에 "이름"의 Key와 username 이라는 Value를 저장 
    localStorage.setItem("이름" , username);
    //"Hello " + username == `hello ${username}`
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `Welcome ${username}`;
    greeting.classList.remove("hidden");
}

//  "이름"인 Key의 Value 값을 saveUsername에 저장 
const saveUsername = localStorage.getItem("이름");

if(saveUsername === null) {
    //loginform을 보여주고 
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit" , onLoginSubmit);
} else {
    paintGreeting(saveUsername);

}