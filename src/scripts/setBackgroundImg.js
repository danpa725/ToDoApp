const hours = new Date().getHours();
const body = document.querySelector("body");
const IMG_URL = [
    "../images/dayStart.jpg",
    "../images/afetrnoon.jpg",
    "../images/midNight.jpg",
    "../images/deepNight.jpg",
];

const setBackground = (hours) => {
    if (6 < hours && hours < 12) {
        body.classList.add("day-start");
    } else if (12 < hours && hours < 18) {
        body.classList.add("afternoon");
    } else if (18 < hours && hours < 24) {
        body.classList.add("midnight");
    } else if (0 < hours && hours < 6) {
        body.classList.add("deep-night");
    }
};

const init = () => {
    setBackground(hours);
};

init();
