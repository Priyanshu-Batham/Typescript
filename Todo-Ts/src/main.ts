import "./style.css";

//an interface for defining the structure of Todos
interface Todo {
  id: string;
  data: string;
  isCompleted: boolean;
}

//main datastructure to hold all the Todos
let todoArr: Todo[] = [];

// -------------------------HTML ELEMENTS-------------------->
//selecting the Form
const form: HTMLFormElement = <HTMLFormElement>(
  document.querySelector(".myForm")
);
//selecting the TodoContainer
const todoContainer: HTMLUListElement = <HTMLUListElement>(
  document.querySelector(".todoContainer")
);

// -------------------------FUNCTIONS-------------------->
// deletes todo
function deleteTodo(id: string) {
  todoArr = todoArr.filter((todo) => todo.id !== id);
  render();
}

function toggleChecked(id: string) {
  todoArr.map((todo) => {
    if (todo.id === id) todo.isCompleted = !todo.isCompleted;
  });
  render();
}

//returns an HTML equivalent of given Todo Data
function generateTodo(data: Todo): HTMLLIElement {
  //creating li
  const HTMLTodo: HTMLLIElement = <HTMLLIElement>document.createElement("li");
  HTMLTodo.classList.add("todo");
  HTMLTodo.style.backgroundColor = data.isCompleted?'green':'purple';

  //creating checkbox inside li
  const checkbox: HTMLInputElement = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.classList.add("checkbox");
  checkbox.checked = data.isCompleted;
  checkbox.onchange = () => toggleChecked(data.id);

  //creating paragraph inside li
  const para: HTMLParagraphElement = document.createElement("p");
  para.innerText = data.data;
  para.classList.add("text");
  if(data.isCompleted) para.classList.add('checkedTodoText');

  //creating delete button inside li
  const btn: HTMLButtonElement = document.createElement("button");
  btn.innerText = "X";
  btn.classList.add("delete");
  btn.onclick = () => deleteTodo(data.id);

  HTMLTodo.append(checkbox, para, btn);

  return HTMLTodo;
}

//loops through the todoArr and renders an HTML version of each todo
function render() {
  todoContainer.innerHTML = "";
  todoArr.map((item) => {
    const HTMLTodo: HTMLLIElement = <HTMLLIElement>generateTodo(item);
    todoContainer.appendChild(HTMLTodo);
  });
}

// -------------------------EVENTS-------------------->
//adds todo in the todoArr and calls the render
form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    data: form.todoText.value,
    id: String(Math.random() * 100),
    isCompleted: false,
  };

  todoArr.unshift(todo);
  render();

  form.todoText.value = "";
};
