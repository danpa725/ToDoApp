import { deleteFromToDo, deleteFromFin, finToDo, returnToDo } from "../toDo";

const SPAN_STYLE =
    "flex flex-row items-center justify-between mt-3 py-3 w-full bg-white bg-opacity-90 rounded-md shadow transition duration-150 ease-in-out transform-gpu hover:-translate-y-1 hover:shdow-xl";
const DEL_IMG_STYLE =
    "w-6 h-6 rounded-full mr-2 img-setting del-img transition duration-150 ease-in-out transform-gpu hover:scale-125 focus:outline-none focus:scale-95 focus:ring-2 focus:ring-red-300";
const FINISH_IMG_STYLE =
    "w-6 h-6 rounded-full img-setting fin-img transition duration-150 ease-in-out transform-gpu hover:scale-125 focus:outline-none focus:scale-95 focus:ring-2 focus:ring-blue-300";
const APPEND_IMG_STYLE =
    "w-6 h-6 rounded-full img-setting append-img transition duration-150 ease-in-out transform-gpu hover:scale-125 focus:outline-none focus:scale-95 focus:ring-2 focus:ring-green-300";
const BTN_STYLE = "flex flex-row mr-3";
const LI_STYLE = "ml-3";

const toDoList = document.querySelector(".todo-list");
const toDoFinList = document.querySelector(".todo-fin");

const renderToDo = (text, id, fin) => {
    if (fin === false) {
        const span = document.createElement("span");
        const div = document.createElement("div");
        const li = document.createElement("li");
        const finBtn = document.createElement("button");
        const delBtn = document.createElement("button");

        li.innerHTML = `${text}`;
        delBtn.innerHTML = "";
        finBtn.innerHTML = "";

        span.appendChild(li);
        div.appendChild(delBtn);
        div.appendChild(finBtn);

        span.appendChild(div);
        toDoList.appendChild(span);

        span.className = SPAN_STYLE;
        delBtn.className = DEL_IMG_STYLE;
        finBtn.className = FINISH_IMG_STYLE;
        div.className = BTN_STYLE;
        li.className = LI_STYLE;

        delBtn.id = id;

        delBtn.addEventListener("click", deleteFromToDo);
        finBtn.addEventListener("click", finToDo);
    } else if (fin === true) {
        const span = document.createElement("span");
        const div = document.createElement("div");
        const li = document.createElement("li");
        const delBtn = document.createElement("button");
        const returnBtn = document.createElement("button");
        li.innerHTML = `${text}`;
        delBtn.innerHTML = "";
        returnBtn.innerHTML = "";

        span.appendChild(li);
        div.appendChild(delBtn);
        div.appendChild(returnBtn);

        span.appendChild(div);
        toDoFinList.appendChild(span);

        span.className = SPAN_STYLE;
        delBtn.className = DEL_IMG_STYLE;
        returnBtn.className = APPEND_IMG_STYLE;
        div.className = BTN_STYLE;
        li.className = LI_STYLE;

        delBtn.id = id;

        delBtn.addEventListener("click", deleteFromFin);
        returnBtn.addEventListener("click", returnToDo);
    }
};

export default renderToDo;
