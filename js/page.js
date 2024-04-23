/*
Project:  Project 5
Name: Bryn Webb
Submitted: <Submit Date>
 
I declare that the following source code was written by me, or provided
by the instructor for this project. I understand that copying source
code from any other source, providing source code to another student, 
or leaving my code on a public web site constitutes cheating.
I acknowledge that  If I am found in violation of this policy this may result
in a zero grade, a permanent record on file and possibly immediate failure of the class.
*/


// Makes Home Screen visible and hides everything else
function homeButton() {
    var h = document.getElementById("home");
    h.style.display = "flex";

    var t = document.getElementById("types");
    t.style.display = "none";

    var m = document.getElementById("music");
    m.style.display = "none";
}

// Makes Types of Harps page visible and hides everything else
function typesButton() {
    var h = document.getElementById("home");
    h.style.display = "none";

    var t = document.getElementById("types");
    t.style.display = "flex";

    var m = document.getElementById("music");
    m.style.display = "none";
}

// Makes Music page visible and hides everything else
function musicButton() {
    var h = document.getElementById("home");
    h.style.display = "none";

    var t = document.getElementById("types");
    t.style.display = "none";

    var m = document.getElementById("music");
    m.style.display = "flex";
}

// Makes visitor field visible
function visitButton() {
    console.log("visitor function getting called");
    var v = document.getElementById("visitor");
    v.style.display = "block";
}



//Function for changing to the dark mode
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


//Function to move back to normal mode
function removeDarkMode() {
    var head = document.head;
    var link = document.getElementById("darkMode");

    var dark = document.getElementById("dark");
    var light = document.getElementById("light");

    head.removeChild(link);
    light.style.display = "none";
    dark.style.display = "block";
}

