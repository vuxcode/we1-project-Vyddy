//Get elements from gamepage
var picturebox = document.getElementById('picturebox');
var textbox = document.getElementById('textbox');
var options = document.getElementsByClassName('options');
var ob1 = document.getElementById('ob1')
var ob2 = document.getElementById('ob2')
var ob3 = document.getElementById('ob3')
var ob4 = document.getElementById('ob4')

//creating variables
var optionButtons = [ob1, ob2, ob3, ob4];
var id=0;
var teaSet=false;
var trap=false;
var dragonNoticed=false;

//Creating the array with game-pages as objects:
const pages = [
    {
        id:0,
        text: "You accept a quest from the nearby village",
        options: [{op:">>>", next:1}]        
    },
    {
        id:1,
        text: "The town has been terrorized by a dragon and has asked you to get rid of it.",
        options: [{op:">>>", next:2}]        
    },
    {
        id:2,
        text: "Promising to rid this village from the dragon, you grab your sword and journey towards the mountains.",
        options: [{op:"Begin", next:3}]        
    },
    {
        id:3,
        text: "You come to a crossroads. Where do you go?",
        options: [
            {op:"Forest", next:2}, 
            {op:"Mountains", next:1}
        ],
    },

]


//Creating the functions:

//Updates the board to the correct page
function showPage() {
textbox.innerText = pages[id].text;
ob1.innerText = pages[id].options[0].op;
ob2.innerText = pages[id].options?.[1]?.op||"";
ob3.innerText = pages[id].options?.[2]?.op||"";
ob4.innerText = pages[id].options?.[3]?.op||"";
//Hides the unused buttons
if (ob2.innerText == "") {
    ob2.style.display = "none";
    ob1.style.width = "604px";
}
else {
    ob2.style.display="block"; 
    ob1.style.width="";
}
if (ob3.innerText == "") {
    ob3.style.display = "none";
}
if (ob4.innerText == "") {
ob4.style.display = "none";
}
};

//Changes values to show the next page
function nextPage(){
    optionButtons.forEach(button => {
        button.addEventListener("click", function() {
            console.log("old id:", id);
            //Check which button is pushed
            if (button==ob1) {
                id = pages[id].options[0].next;
                console.log("New id:", id + " ob1");
            }
            else if (button==ob2) {
                id = pages[id].options[1].next;
                console.log("New id:", id + " ob2");
            }
            else if (button==ob3) {
                id = pages[id].options[2].next;
                console.log("New id:", id + " ob3");
            }
            else if (button==ob4) {
                id = pages[id].options[3].next;
                console.log("New id:", id + " ob4");
            }
            else {
                console.log("Not registering any buttons.")
            }
            showPage();
        });
    });
} 

//run the program
showPage();
nextPage();


