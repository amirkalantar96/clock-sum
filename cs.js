"use strict";
document.getElementsByTagName("form")[0].addEventListener("input", sumClock);

function sumClock() {
    const fH = document.getElementById("firstHour").value;
    const fM = document.getElementById("firstMinute").value;
    const sH = document.getElementById("secondHour").value;
    const sM = document.getElementById("secondMinute").value;
    const show = document.getElementById("result");

    if (sM < fM) {
        const subtr = parseInt(sH) - 1;
        const total = parseInt(sM) + 60;
        const min = total - fM;
        const hr = subtr - fH;
        show.innerHTML = hr + " : " + min;
    } else {
        const finalHr = sH - fH;
        const finalMn = sM - fM;
        show.innerHTML = finalHr + " : " + finalMn;
    }
}