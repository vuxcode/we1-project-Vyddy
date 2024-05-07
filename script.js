//Get elements from gamepage
var picturebox = document.getElementById('picturebox');
var textbox = document.getElementById('textbox');
var options = document.getElementsByClassName('options');
var ob1 = document.getElementById('ob1')
var ob2 = document.getElementById('ob2')
var ob3 = document.getElementById('ob3')
var ob4 = document.getElementById('ob4')

//Creating the gamepage arrays
const pages = ["empty", "Text description", "Option1", "option 2", "option 3"];


//Creating the functions:

//Updates the board to the correct page
function showPage() {
textbox.innerText = pages[1];
ob1.innerText = pages[2];
ob2.innerText = pages[3];
ob3.innerText = pages[4];
ob4.innerText = pages[5];
//Hides the unused elements
if (ob2.innerText == "undefined") {
    ob2.style.display = "none";
}
if (ob3.innerText == "undefined") {
    ob3.style.display = "none";
}
if (ob4.innerText == "undefined") {
ob4.style.display = "none";
}
};

//run the program
showPage();


