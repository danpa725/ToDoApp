const hours = new Date().getHours();
const body = document.querySelector("body");
const IMG_URL = [
    "../images/dayStart.jpg",
    "../images/afetrnoon.jpg",
    "../images/miidNight.jpg",
    "../images/deepNight.jpg",
];

const setBackground = (hours) => {
    if (6 < hours && hours < 12) {
        body.style.backgroundImage = `url(${IMG_URL[0]})`;
    } else if (12 < hours && hours < 18) {
        body.style.backgroundImage = `url(${IMG_URL[1]})`;
    } else if (18 < hours && hours < 24) {
        body.style.backgroundImage = `url(${IMG_URL[2]})`;
    } else if (0 < hours && hours < 6) {
        body.style.backgroundImage = `url(${IMG_URL[3]})`;
    }
};

const init = () => {
    setBackground(hours);
};

init();
