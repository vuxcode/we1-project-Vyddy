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

//Set an empty state for the player
var state = {};


//Creating the array with game-pages as objects:
const pages = [
    {
        id:0,
        image: "intro1.jpg",
        text: "You accept a quest from the nearby village",
        options: [{op:">>>", next:1}]        
    },
    {
        id:1,
        image: "intro2.jpg",
        text: "The town has been terrorized by a dragon and has asked you to get rid of it.",
        options: [{op:">>>", next:2}]        
    },
    {
        id:2,
        image: "intro3.jpg",
        text: "Promising to rid this village from the dragon, you grab your sword and journey towards the mountains.",
        options: [{op:"Begin", next:3}]        
    },
    {
        id:3,
        text: "You come to a crossroads. Where do you go?",
        options: [
            {op:"Forest", next:4}, 
            {op:"Mountains", next:10}
        ]
    },
    {
        id:4,
        else: 7,
        setState: forestScenario=true,
        text: "You come across a fleeing fairy. Behind her you see greedy hunters chasing close behind. What do you do?",
        options: [
            {op:"Help the fairy", next: 5},
            {op:"Help the hunters", next: 6},
            {op:"Do nothing", next: 7}
        ]
    },
    {
        id:5,
        text: "You step in between the fleeing fairy and scare off the hunters. The fairy thanks you and magically produces a thank-you-gift in the shape of a porceline tea set. You gratefully accept and get on your way.",
        options:[{op:"Go back", next:3, setState: teaSet=true}]
    },
    {
        id: 6,
        text: "You block the fairy and help the hunters put her in a cage knowing the profit on fairy-dust. The hunters thank you by giving you one of their traps. It needs some time to set up but maybe you can use it.",
        options:[{op:"Go back", next:3, setState: trap=true}]
    },
    {
        id: 7,
        text: "There's no one left.",
        options: [{op: "Go back", next:3}]
    },
    {
        id: 8,
        text: "You journey to the dragon's lair. How do you approach?",
        options: [
            {op: "Attack", next: 9},
            {op: "Knock", next: 3}
        ]
    },
    {
        id: 9,
        text: "something",
        options: [
        {op: "go back", next: 4}
        ]
    }

]


//Creating the functions:

//Updates the board to the correct page
function showPage() {
//check requirements
checkRequirements();
//reset if id<0
    if (id<0) {
        id=0;
        state = {};
        showPage();
    }
//show picture if id>2
    if (id<=2) {
        picturebox.src = pages[id].image;
        picturebox.display="";
    }
    //not working:
    else {
        picturebox.display="none";
        picturebox.src="";
    }
//show text & options
textbox.innerText = pages[id].text;
console.log(pages[id].text);
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
else {ob3.style.display=""};
if (ob4.innerText == "") {
ob4.style.display = "none";
}
else {ob4.style.display=""};
//setState();
}

//Changes values to show the next page
function nextPage(){
    optionButtons.forEach(button => {
        button.addEventListener("click", function() {
            console.log("old id:", id);
            //Check which button is pushed
            if (button==ob1) {
                id = pages[id].options[0].next;
                console.log("New id:", id + " ob1");
                showPage();
            }
            else if (button==ob2) {
                id = pages[id].options[1].next;
                console.log("New id:", id + " ob2");
                showPage();
            }
            else if (button==ob3) {
                id = pages[id].options[2].next;
                console.log("New id:", id + " ob3");
                showPage();
            }
            else if (button==ob4) {
                id = pages[id].options[3].next;
                console.log("New id:", id + " ob4");
                showPage();
            }
            else {
                console.log("Not registering any buttons.")
            }
        });
    });
};

//Check requirements for a page
    //not working:
function checkRequirements(){
    console.log("forestScenario = " + forestScenario + "\n" + 
        "TeaSet = " + teaSet + "\n" + 
        "Trap = " + trap + "\n" 
       //"dragonNoticed = " + dragonNoticed
    );
   if (id==4 && forestScenario==true) {
        id=pages[id].else;
   }
};

    //not Working:
//Change variables if a page is reached.
/* function setState() {
    if (pages[id].setState == true) {
        state = Object.assign(state, pages[id].setState);
        console.log(state)
    }
}; */


//run the program
showPage();
nextPage();



