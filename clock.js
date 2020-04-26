function clock(){

let currDate = new Date();
let hour = currDate.getHours();
let min = currDate.getMinutes();
let sec = currDate.getSeconds();

if (hour<10) {
    hour = "0" + hour;
}
if (min<10) {
    min = "0" + min;
}
if (sec<10) {
    sec = "0" + sec;
}

document.getElementById("hour").innerHTML = hour + ":";
document.getElementById("minute").innerHTML = min + ":";
document.getElementById("second").innerHTML = sec;

}

setInterval(clock, 100);