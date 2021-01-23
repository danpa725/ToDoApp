import renderToDo from "./export/render";

const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector("#todo-input");

const QUERY_TODO = "toDos";
const QUERY_FIN = "toDosFin";

const DELETE = "deleteToDo";
const POSTPONE = "postponeToDo";
const RETURN = "returnToDo";
const DELETE_FIN = "deleteFin";

let toDos = [];
let toDosFin = [];

//!----------------------------------------------------------------------------------------

const loadToDo = (QUERY, setArr) => {
    let dbToDo = localStorage.getItem(QUERY);
    dbToDo = JSON.parse(dbToDo);

    if (dbToDo !== null) {
        const dbToDos = Object.values(dbToDo);
        // 객체화 하기 but 순수 객체는 아니기에 객체의 valiue만 빼와서 arr에 대입.
        dbToDos.forEach((toDo) => {
            setArr.push(toDo);
            renderToDo(toDo.text, toDo.id, toDo.fin);
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
    const text = getText(toDoInput);
    const toDoObj = {
        text,
        id: Date.now(),
        fin: false,
    };
    toDos.push(toDoObj);
    saveToDo();
    renderToDo(toDoObj.text, toDoObj.id, toDoObj.fin);
};

const saveToDo = () => {
    localStorage.setItem(QUERY_TODO, JSON.stringify(toDos));
};
const saveToDoFin = () => {
    localStorage.setItem(QUERY_FIN, JSON.stringify(toDosFin));
};

const deleteFromToDo = (e) => {
    console.log(e.target.parentNode);
    const delObjId = e.target.parentNode.querySelector("button").id;
    console.log(delObjId);
    e.target.parentNode.classList.add("hide");

    mutatesArr(DELETE, toDos, null, delObjId);
};

const deleteFromFin = (e) => {
    const delObjId = e.target.parentNode.querySelector("button").id;
    console.log(delObjId);
    e.target.parentNode.classList.add("hide");

    mutatesArr(DELETE_FIN, toDosFin, null, delObjId);
};

const finToDo = (e) => {
    const finObjId = e.target.parentNode.querySelector("button").id;
    e.target.parentNode.classList.add("hide");

    mutatesArr(POSTPONE, toDos, toDosFin, finObjId);
};

const returnToDo = (e) => {
    const returnObjId = e.target.parentNode.querySelector("button").id;
    e.target.parentNode.classList.add("hide");

    mutatesArr(RETURN, toDosFin, toDos, returnObjId);
};

const mutatesArr = (TYPE, mutateArr, inputArr, finObjId) => {
    const mutationObj = mutateArr.find((toDo) => toDo.id === Number(finObjId));
    const idx = mutateArr.indexOf(mutationObj);

    switch (TYPE) {
        case DELETE:
            if (idx > -1) mutateArr.splice(idx, 1);

            saveToDo();

            break;

        case DELETE_FIN:
            if (idx > -1) mutateArr.splice(idx, 1);

            saveToDoFin();

            break;

        case POSTPONE:
            if (idx > -1) {
                let finObj = mutateArr[idx];
                finObj.fin = true;

                inputArr.push(finObj);

                mutateArr.splice(idx, 1);

                const { text, id, fin } = finObj;
                renderToDo(text, id, fin);
            }

            saveToDo();
            saveToDoFin();

            break;

        case RETURN:
            if (idx > -1) {
                let finObj = mutateArr[idx];
                finObj.fin = false;

                inputArr.push(finObj);

                mutateArr.splice(idx, 1);

                const { text, id, fin } = finObj;
                renderToDo(text, id, fin);
            }

            saveToDo();
            saveToDoFin();

            break;
    }
};

const init = () => {
    loadToDo(QUERY_TODO, toDos);
    loadToDo(QUERY_FIN, toDosFin);
    toDoForm.addEventListener("submit", handleToDo);
};

init();

export { deleteFromFin, deleteFromToDo, finToDo, returnToDo };
