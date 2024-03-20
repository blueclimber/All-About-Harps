function homeButton() {
    var h = document.getElementById("home");
    h.style.display = "flex";

    var t = document.getElementById("types");
    t.style.display = "none";

    var m = document.getElementById("music");
    m.style.display = "none";
}

function typesButton() {
    var h = document.getElementById("home");
    h.style.display = "none";

    var t = document.getElementById("types");
    t.style.display = "flex";

    var m = document.getElementById("music");
    m.style.display = "none";
}

function musicButton() {
    var h = document.getElementById("home");
    h.style.display = "none";

    var t = document.getElementById("types");
    t.style.display = "none";

    var m = document.getElementById("music");
    m.style.display = "flex";
}