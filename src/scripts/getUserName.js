const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const bootMessage = document.querySelector(".boot-message");
const resetBtn = document.querySelector(".reset-user");
//! local storage to store things.
const USER_KEY = "userName";

const paintingUserForm = () => {
    const currentUser = localStorage.getItem(USER_KEY);

    // 사용자 이름이 존재하는 경우
    if (currentUser === null) {
        form.classList.remove("form-remove");
        bootMessage.innerText = "Type Your Name!";
    } else {
        form.classList.add("form-remove");
        bootMessage.innerText = `Welocome ${currentUser}`;
    }
};
paintingUserForm();
//처음에 사용자 form 렌더링 여부 결정하기

const getUserName = (target) => {
    const name = target.value;
    return name;
};

const saveUserName = (name) => {
    localStorage.setItem("userName", name);
};

const init = () => {
    const NAME = getUserName(input);
    saveUserName(NAME);
};

form.addEventListener("submit", init);

//reset func
const resetUserName = () => {
    localStorage.removeItem(USER_KEY);
    paintingUserForm();
};

resetBtn.addEventListener("click", resetUserName);
