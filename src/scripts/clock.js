const clockTitle = document.querySelector(".clock-print");

const getTime = () => {
    const date = new Date();

    const hours = date.getHours();
    const minute = date.getMinutes();
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
