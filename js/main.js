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

// Changes to JS:
// Pulled the page switching code and mode switching code into page.js
// Added Validate.js
// Basic comments and documentation
// Even listener for content loaded validation



document.addEventListener("DOMContentLoaded", function (event) {
    initValidation("#visitform", "#logged");
});
