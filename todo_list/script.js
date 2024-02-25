const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

const todosUl = JSON.parse(localStorage.getItem("todos"));
  
if (todosUl){
  todosUl.forEach(todo =>{
    addTodo(todo)
  });
  
}

form.addEventListener("submit", function(e){
   e.preventDefault();
   addTodo();
});

function addTodo(todo){

  let todoText = input.value;
  if (todo){
     todoText = todo.text
  }
  //const todoText =input.value ;

  if (todoText){
    const todoEl = document.createElement("li");
    if(todo && todo.complited){
    todoEl.classList.add("complited");
    }
    todoEl.innerText = todoText;

    todoEl.addEventListener("click", function(){
     todoEl.classList.toggle("complited");

     updateLS();
    });
    
    todoEl.addEventListener("contextmenu", (e)=>{
       e.preventDefault();

       todoEl.remove();

       updateLS()
    });

    todos.appendChild(todoEl);
   
    input.value ="";
    updateLS();
  }
}

function updateLS(){
  const todosEl = document.querySelectorAll("li");

  const todos = [];
  todosEl.forEach(todoEl =>{
   todos.push({
    text: todoEl.innerText,
    complited: todoEl.classList.contains("complited")
   })
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}