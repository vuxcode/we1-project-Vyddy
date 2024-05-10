//Get elements from gamepage
var picturebox = document.getElementById('picturebox');
var textbox = document.getElementById('textbox');
var options = document.getElementsByClassName('options');
var ob1 = document.getElementById('ob1')
var ob2 = document.getElementById('ob2')
var ob3 = document.getElementById('ob3')
var ob4 = document.getElementById('ob4')

//creating variables
var id=0;

//Creating the array with game-pages:
const pages = [
    {
        id:0,
        skrift: "You accept a quest from the nearby village",
        op1: ">>>",
        next:1
    },
    {
        id:1,
        skrift: "The town has been terrorized by a dragon and has asked you to get rid of it.",
        op1: ">>>",
        next:2
    },
    {
        id:2,
        skrift: "Promising to rid this village from the dragon, you grab your sword and journey towards the mountains.",
        op1: "Begin",
        next:3
    },

]


//Creating the functions:

//Updates the board to the correct page
function showPage() {
textbox.innerText = pages[id].skrift;
ob1.innerText = pages[id].op1;
ob2.innerText = pages[id].op2;
ob3.innerText = pages[id].op3;
ob4.innerText = pages[id].op4;
//Hides the unused buttons
if (ob2.innerText == "undefined") {
    ob2.style.display = "none";
    ob1.style.width = "604px";
}
if (ob3.innerText == "undefined") {
    ob3.style.display = "none";
}
if (ob4.innerText == "undefined") {
ob4.style.display = "none";
}
};

//Changes values to show the next page
function nextPage(){
    ob1.addEventListener("click", function() {
        console.log("Current id:", id);
        id = pages[id].next;
        console.log("New id:", id);
        showPage();
    })
} 

//run the program
showPage();
nextPage();


