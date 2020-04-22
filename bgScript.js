let backgroundItem = document.getElementById("background");

let bgInterval;

let startId = 1;
let currentId = 1;
let numbOfBgs = 3;

function updateImage() {
    backgroundItem.classList.remove("background" + currentId);
    currentId = currentId + 1 <= numbOfBgs ? currentId + 1 : startId;
    backgroundItem.classList.add("background" + currentId);
}

window.addEventListener('DOMContentLoaded', () => bgInterval = setInterval(updateImage, 5000))
