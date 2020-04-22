let countdownItem = document.getElementById("countdown");
let countdownContainerItem = document.getElementById("countdown-container");

const isOpenClass = "is-open";
const publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1uaD3WagQYZu2Ho0GE9Sh0-gl5ZVFG0LabC4RZh1olQQ/edit?usp=sharing';

let startDate;

let interval;

function updateTime() {
    let date = moment();

    let days = date.diff(startDate, 'days');
    date.subtract(days, 'days');

    let hours = date.diff(startDate, 'hours');
    date.subtract(hours, 'hours');

    let minutes = date.diff(startDate, 'minutes');
    date.subtract(minutes, 'minutes');

    let seconds = date.diff(startDate, 'seconds');

    countdownItem.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
}

function initTableTop() {
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: onGetDataFromSpreadsheet
    })
}

function onGetDataFromSpreadsheet(data) {
    let covid19Data = data.covid19.all();

    if (covid19Data && covid19Data.length > 0) {
        let startIsolationData = covid19Data[0];

        startDate = moment(startIsolationData.date);

        countdownContainerItem.classList.remove("hidden");

        updateTime();

        interval = setInterval(updateTime, 1000);
    }
}

window.addEventListener('DOMContentLoaded', initTableTop)