"use strict";
let h;
let m;
let s;
function checkDay(hr) {
    console.log(hr);
    let day = document.getElementById("photoDay");
    let night = document.getElementById("photoNight");
    let clockColor = document.getElementById("clock");
    let dateColor = document.getElementById("date");
    if (day == undefined || night == undefined || clockColor == undefined || dateColor == undefined)
        return null;
    if (hr >= 18 || hr <= 7) {
        day.style.display = "none";
        night.style.display = "block";
        clockColor.style.color = "white";
        dateColor.style.color = "white";
    }
    else {
        day.style.display = "block";
        night.style.display = "none";
        clockColor.style.color = "black";
        dateColor.style.color = "black";
    }
}
function tellDate(t) {
    let day = t.getDate();
    let month = t.getMonth() + 1;
    let year = t.getFullYear();
    let dayOfWeek = t.getDay();
    let dayName = "";
    if (dayOfWeek == 0)
        dayName = "Sunday";
    else if (dayOfWeek == 1)
        dayName = "Monday";
    else if (dayOfWeek == 2)
        dayName = "Tuesday";
    else if (dayOfWeek == 3)
        dayName = "Wednesday";
    else if (dayOfWeek == 4)
        dayName = "Thursday";
    else if (dayOfWeek == 5)
        dayName = "Friday";
    else if (dayOfWeek == 6)
        dayName = "Saturday";
    let dateHolder = document.getElementById("date");
    if (dateHolder == undefined)
        return null;
    dateHolder.innerHTML = dayName + ", " + day + "-" + month + "-" + year;
}
function tellTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let h = hours.toString();
    let m = minutes.toString();
    let s = seconds.toString();
    if (seconds < 10) {
        s = '0' + s;
    }
    if (minutes < 10) {
        m = '0' + m;
    }
    let clockHolder = document.getElementById('clock');
    if (clockHolder != undefined) {
        clockHolder.innerHTML = h + ":" + m + ":" + s;
    }
    tellDate(today);
    checkDay(hours);
}
setInterval(tellTime, 1000);
