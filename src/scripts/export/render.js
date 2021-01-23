import { deleteFromToDo, deleteFromFin, finToDo, returnToDo } from "../toDo";
const APPEND_BTN = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="19" fill="#8CCA8E" stroke="white" stroke-width="2"/>
<path d="M20 20V12" stroke="white" stroke-linecap="round"/>
<path d="M20 20H28" stroke="white" stroke-linecap="round"/>
<circle cx="20" cy="20" r="9" stroke="white" stroke-width="2"/>
</svg>;
`;
const DELETE_BTN = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="19" fill="#EF8787" stroke="white" stroke-width="2"/>
<path d="M28 13L12 28M12 13L28 28" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>`;
const FINISHING_BTN = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="19" fill="#7FA2D7" stroke="white" stroke-width="2"/>
<path d="M8.5 17.5L18.5 27.5L31 13" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>`;

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

        span.className = "flex flex-row";

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

        span.className = "flex flex-row ";

        delBtn.id = id;

        delBtn.addEventListener("click", deleteFromFin);
        returnBtn.addEventListener("click", returnToDo);
    }
};

export default renderToDo;
