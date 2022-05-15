

let h = 0, m = 0, s = 0, ms = 0;
let evnt = false;
let time = document.getElementById("caltime");
let button = document.getElementsByTagName("button");
function func1() {
    console.log("hello");
    button[0].addEventListener("click", startevnt);
    button[1].addEventListener("click", pause);
    button[1].disabled = true;
    button[2].addEventListener("click", stopevent);
    button[2].disabled = true;
    button[3].addEventListener("click", laps);
    button[3].disabled = true;
}
function startevnt() {
    if (evnt==false)
    {
    let main = document.getElementById("laps")
    let lp1 = main.getElementsByTagName("div");
    while (lp1[0]) {
        lp1[0].parentNode.removeChild(lp1[0]);
    }

    button[1].innerHTML = "Pause";
}
    evnt = setInterval(caltime, 10);
    function caltime() {
        ms++;
        if (ms == 100) {
            ms = 0;
            s++;
        }
        if (s == 60) {
            s = 0;
            m++;
        }
        if (m == 60) {
            m = 0;
            h++;
        }
        time.innerHTML = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
        button[0].disabled = true;
        button[1].disabled = false;
        button[2].disabled = false;
        button[3].disabled = false;
    }

}
function pause() {
    if (button[1].innerHTML == "Pause") {
        clearInterval(evnt);
        button[1].innerHTML = "continue";
    }
    else {
        startevnt();
        button[1].innerHTML = "Pause";
    }
}
function stopevent() {
    clearInterval(evnt);
    evnt = false;
    m = 0, s = 0, h = 0;
    time.innerHTML = "00:00:00:00";
    button[0].disabled = false;
    button[1].disabled = true;
    button[2].disabled = true;
    button[3].disabled = true;
}
function laps() {
    let lp = document.getElementById("laps")
    let varlaps = document.createElement("div");
    varlaps.setAttribute("class", "lapstime");

    varlaps.innerHTML = document.getElementById("caltime").innerHTML;
    lp.appendChild(varlaps);
}
func1();