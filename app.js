// selecteurs
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const todochecked = document.querySelector(".todo-checked");
//ecouteurs
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", check);
//fonctions
function addTodo(event){
  event.preventDefault();
  //créer la div Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Créer le Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //Bouton Check
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}
function check(e) {
  const item=e.target;
if (item.classList[0] === "complete-btn") {
  const todo = item.parentElement;
  todo.classList.toggle("completed");
}
}
