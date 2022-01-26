const todoform =  document.getElementById("todo-form");
const todoinput = todoform.querySelector("input");
const todolist =  document.getElementById("todo-list");


let todos = [];

//JSON stringify 모든 값들을 string 형태로 저장 ;
function saveToDos() {
    localStorage.setItem("할일" , JSON.stringify(todos));
}

// parentElement는 자신이 클릭한 element의 부모 element를 가져옴
function todoDelete(event) {
    // 타입은 string
   const li = event.target.parentElement;
   li.remove();
             // 우리가 지우고 싶은 리스트의 아이디와 다른 것들은 남겨둔다 
   todos =  todos.filter(todo => todo.id !== parseInt(li.id));
   saveToDos();

}

function paintToDo(urtodo) {
    const li = document.createElement("li");
    li.id = urtodo.id;
    const span = document.createElement("span");
    span.innerText = urtodo.text;
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click" , todoDelete);
    li.appendChild(span);
    li.appendChild(button);
    todolist.appendChild(li);
}

function handleToDosubmit(event) {
    event.preventDefault();
    const urtodo =  todoinput.value;
    todoinput.value = "";
    const newTodoObj = {
        text : urtodo ,
        id : Date.now()
    };
    todos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

todoform.addEventListener("submit" , handleToDosubmit);

const savedtodos = localStorage.getItem("할일");

//foreach 는 array에 들어있는 아이템 마다 실행한다 
if(savedtodos != null) {
    // string을 array로 변환시켜줌 
    const parseToDos = JSON.parse(savedtodos);
    todos = parseToDos;
    parseToDos.forEach(paintToDo);
}