function addDarkMode() {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = "css/darkMode.css";
    link.id = "darkMode";

    document.head.appendChild(link);

    var dark = document.getElementById("dark");
    var light = document.getElementById("light");

    dark.style.display = "none";
    light.style.display = "block";
}

function removeDarkMode() {
    var head = document.head;
    var link = document.getElementById("darkMode");

    var dark = document.getElementById("dark");
    var light = document.getElementById("light");

    head.removeChild(link);
    light.style.display = "none";
    dark.style.display = "block";
}

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