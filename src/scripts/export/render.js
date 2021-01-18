import { deleteFromToDo, deleteFromFin, finToDo, returnToDo } from "../toDo";
const toDoList = document.querySelector(".todo-list");
const toDoFinList = document.querySelector(".todo-fin");

const renderToDo = (text, id, fin) => {
    if (fin === false) {
        const span = document.createElement("span");
        const li = document.createElement("li");
        const finBtn = document.createElement("button");
        const delBtn = document.createElement("button");
        li.innerHTML = `${text}`;
        delBtn.innerHTML = "❌";
        finBtn.innerHTML = "✔";

        span.appendChild(li);
        span.appendChild(delBtn);
        span.appendChild(finBtn);
        toDoList.appendChild(span);

        delBtn.id = id;
        delBtn.addEventListener("click", deleteFromToDo);
        finBtn.addEventListener("click", finToDo);
    } else if (fin === true) {
        const span = document.createElement("span");
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const returnBtn = document.createElement("button");
        li.innerHTML = `${text}`;
        delBtn.innerHTML = "❌";
        returnBtn.innerHTML = "🕓";

        span.appendChild(li);
        span.appendChild(delBtn);
        span.appendChild(returnBtn);
        toDoFinList.appendChild(span);

        delBtn.id = id;
        delBtn.addEventListener("click", deleteFromFin);
        returnBtn.addEventListener("click", returnToDo);
    }
};

export default renderToDo;
