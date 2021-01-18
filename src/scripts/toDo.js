const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector("#todo-input");
const ul = document.querySelector(".todo-list");

const QUERY = "toDos";

let toDos = [];

const loadToDo = () => {
    let dbToDo = localStorage.getItem(QUERY);
    dbToDo = JSON.parse(dbToDo);
    if (dbToDo !== null) {
        const dbToDos = Object.values(dbToDo);
        dbToDos.forEach((toDo) => {
            toDos.push(toDo);
            renderer(toDo.text, toDo.id);
        });
    }
};

const getText = (target) => {
    const text = target.value;
    target.value = "";
    return text;
};

const handleToDo = (e) => {
    e.preventDefault();
    const toDo = getText(toDoInput);
    const toDoObj = {
        text: toDo,
        id: Date.now(),
        fin: false,
    };
    toDos.push(toDoObj);
    saveToDo(toDos);
    renderer(toDoObj.text, toDoObj.id, toDoObj.fin);
};

const saveToDo = (toDos) => {
    localStorage.setItem(QUERY, JSON.stringify(toDos));
};

const renderer = (element, id, fin) => {
    const span = document.createElement("span");
    const li = document.createElement("li");
    const finBtn = document.createElement("button");
    const delBtn = document.createElement("button");
    li.innerHTML = `${element}`;
    delBtn.innerHTML = "❌";
    finBtn.innerHTML = "✔";
    span.appendChild(li);
    span.appendChild(delBtn);
    span.appendChild(finBtn);
    ul.appendChild(span);

    delBtn.id = id;
    delBtn.addEventListener("click", deleteToDo);
};

const deleteToDo = (e) => {
    const id = e.target.parentNode.querySelector("button").id;
    e.target.parentNode.classList.add("hide");
    const del = toDos.find((toDo) => toDo.id === Number(id));
    const idx = toDos.indexOf(del);

    if (idx > -1) toDos.splice(idx, 1);
    saveToDo(toDos);
};

const init = () => {
    loadToDo();
    toDoForm.addEventListener("submit", handleToDo);
};

init();
