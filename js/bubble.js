window.onload=function () {
    document.getElementById("s").onclick=function () {
        alert("a");
        event.cancelBubble=true;
    }
    document.getElementById("y").onclick=function () {
        alert("y");

    }
    document.getElementById("d").onclick=function () {
        alert("d");
        event.cancelBubble=true;
    }
}