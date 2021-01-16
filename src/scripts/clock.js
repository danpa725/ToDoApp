const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

const getTime = () => {
    const date = new Date();

    const minute = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minute < 9 ? `0${minute}` : minute
    }:${seconds < 9 ? `0${seconds}` : seconds}`;
};

const init = () => {
    getTime();
    setInterval(getTime, 1000);
};

init();
