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
function clearToDo(event) {
     // li
    const tar = event.target.parentElement;
    const listAll = document.querySelectorAll('.mytodo');
    for (const i in todos) {
        if(todos[i].id === parseInt(tar.id)) {
            if(todos[i].is_done === false) {
                listAll[i].classList.add("clearLine");
                todos[i].is_done = true;
            } else {
                listAll[i].classList.remove("clearLine");
                todos[i].is_done = false;
            }
        }
    }
    saveToDos();
}

function AddToDo(urtodo) {
    const li = document.createElement("li");
    li.id = urtodo.id;
    const span = document.createElement("span");
    span.innerText = urtodo.text;
    span.classList.add("mytodo");
    const button = document.createElement("button");
    button.innerText = "x";
    button.addEventListener("click" , todoDelete);
    const clearBtn = document.createElement("input");
    clearBtn.setAttribute('type' , 'checkbox');
    clearBtn.classList.add('clear');
    clearBtn.addEventListener('click' , clearToDo)
    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(clearBtn);
    todolist.appendChild(li);
}


function handleToDosubmit(event) {
    event.preventDefault();
    const urtodo =  todoinput.value;
    const newTodoObj = {
        text : urtodo ,
        id : Date.now(),
        is_done : false,
    };
    todoinput.value = "";
    todos.push(newTodoObj);
    saveToDos();
    AddToDo(newTodoObj);
}



function init() {
    const savedtodos = localStorage.getItem("할일");
    //foreach 는 array에 들어있는 아이템 마다 실행한다 
    if(savedtodos != null) {
        // string을 array로 변환시켜줌 
        const parseToDos = JSON.parse(savedtodos);
        todos = parseToDos;
        parseToDos.forEach(AddToDo);
    } 
    todoform.addEventListener("submit" , handleToDosubmit);
}
init();


