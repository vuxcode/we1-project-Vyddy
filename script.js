//Get elements from gamepage
var picturebox = document.getElementById('picturebox');
var textbox = document.getElementById('textbox');
var options = document.getElementsByClassName('options');
var ob1 = document.getElementById('ob1')
var ob2 = document.getElementById('ob2')
var ob3 = document.getElementById('ob3')
var ob4 = document.getElementById('ob4')

/* //Creating the gamepage arrays
const pages = ["intro1", "intro2", "intro3", "crossroads", "forest1"];
const image = [];
const text = [
"You accept a quest from the nearby village.",
"You promise them to get rid of the dragon-issue they've been having.",
"You grip your sword tightly in your hand. You will not fail."
]
const option1 = [];
const option2 = [];
const option3 = [];
const option4 = []; */

const content = [
    {
        id:1,
        skrift: "You accept a quest from the nearby village",
         op1: ">>>"},

]


//Creating the functions:

//Updates the board to the correct page
function showPage() {
textbox.innerHTML = content.skrift;
ob1.innerText = content.op1;
ob2.innerText = "pages[3]";
ob3.innerText = "pages[4]";
ob4.innerText = "pages[5]";
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


