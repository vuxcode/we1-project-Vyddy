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
var forestScenario = false;
var teaSet = false;
var trap = false;
var dragonNotified = false;



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
            {op:"Mountains", next:8}
        ]
    },
    {
        id:4,
        else: 7,
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
        options:[{op:"Go back", next:3}]
    },
    {
        id: 6,
        text: "You block the fairy and help the hunters put her in a cage knowing the profit on fairy-dust. The hunters thank you by giving you one of their traps. It needs some time to set up but maybe you can use it.",
        options:[{op:"Go back", next:3}]
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
            {op: "Knock", next: 10},
            {op: "Wait for it to leave", next: 13},
            {op: "Go back", next: 3}
        ]
    },
    {
        id: 9,
        text: "You brandish your sword. How do you attack?",
        options: [
        {op: "With your hood low... sneaky.", next: 16},
        {op: "You charge... FOR GLORY!", next:20}
        ]
    }, 
    {
        id: 10,
        else: 21,
        text: "The dragon seems suspicious but invites you in for a chat.",
        options: [{op: ">>>", next:11}]
    }, 
    {
        id: 11,
        else: 12,
        text: "The conversation starts out with some stiff small-talk until you take the opportunity to present the village's demands. During this you manage to make a drakecist comment and the sour mood shifts for the worse. You're thrown out and warned not to come back!",
        options: [{op: "Leave", next:3}]
    },
    {
        id: 12,
        text: "The conversation starts out with some stiff small-talk until you remember the tea set and ask if you may prepare some tea. Hesitantly the dragon agrees and not long after friendly conversation comes easily. You present the villagers perspective and you both agree on some terms. The dragon won't attack the village and you'll stop by from time to time for some afternoon-tea.",
        options: [{op: "Play again", next:-1}]
    },
    {
        id:13,
        else: 15,
        text: "You hide behind a big rock and bide your time. Eventually the dragon leaves its lair and flies away - giving you full access to set something up...",
        options: [
            {op: "Ambush!", next: 16},
            //If teaSet==true
            {op: "Tea set", next: 17},
            //if trap==true
            {op: "Trap", next: 14}
        ]
    },
    {
        id:14,
        text: "Success! The dragon returns and sets off the trap. How do you proceed?",
        options: [
            {op: "Mercy!", next: 18},
            {op: "Death!", next: 19}
        ]
    },
    {
        id:15,
        text: "The dragon won't leave! How do you proceed",
        options: [
            {op: "Attack", next: 9},
            {op: "Knock", next: 10},
            {op: "Go back", next: 3}
        ]
    },
    {
        id: 16,
        else: 22,
        text: "Your sneaky ambush is succesfull in giving you the upper hand and helps you slay the dragon and complete your task. The town is safe!",
        options: [{op: "Play again", next:-1}]
    },
    {
        id:17,
        text: "When the dragon returns you smile and offer them a cup of steaming tea. Hesitant but intruiged the dragon entertains you and soon laughter and comfortable conversation echo through out the lair.  You present the villagers perspective and you both agree on some terms. The dragon won't attack the village and you'll stop by from time to time for some afternoon-tea.",
        options: [{op: "Play again", next: -1}]
    },
    {
        id:18,
        text: "Before you release the dragon from your trap you set your terms: the village will no longer be part of its hunting grounds and you'll walk out of here safely. Reluctantly the dragon agrees - mercy for mercy.",
        options: [{op: "Play again", next: -1}]
    },
    {
        id: 19,
        text: "You know any promises made today won't be guaranteed tomorrow. With fierce determination you bring down your sword and finish your quest: the village is safe!",
        options: [{op: "Play again", next:-1}]
    },
    {
        id: 20,
        text: "You charge into the dragon's lair and seriously overestimate your own ability to fight an adult dragon without a solid plan. You're dead.",
        options: [{op: "reset", next:-1}]
    },
    {
        id: 21,
        text: "You'd been warned not to show yourself again. You pay the consequences and are greeted by burning hot flames. You're dead.",
        options: [{op: "reset", next:-1}]
    },
    {
        id: 22,
        text: "You'd been warned not to show yourself again. You pay the consequences and are greeted by burning hot flames. You're dead.",
        options: [{op: "reset", next:-1}]
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
        forestScenario = false;
        teaSet = false;
        trap = false;
        dragonNotified = false;
        showPage();
    }
//show picture if id>2
    if (pages[id].image) {
        picturebox.src = pages[id].image;
        picturebox.display="";
        picturebox.style.borderWidth="";
    }
    //not working:
    else {
        picturebox.display="none";
        picturebox.src="";
        picturebox.style.borderWidth=0;
    }
//show text & options
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
else {ob3.style.display=""};
if (ob4.innerText == "") {
ob4.style.display = "none";
}
else {ob4.style.display=""};
//hide ob2 & ob3 if conditions are met
if (id==13 && teaSet==false) {
    ob2.style.display="none";
   }
   if (id==13 && trap==false) {
    ob3.style.display="none";
   }
//Update values
if (id==4) {
    forestScenario=true;
}
else if (id==5) {
    teaSet=true;
}
else if (id==6) {
    trap=true;
}
else if (id==11) {
    dragonNotified=true;
}
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
function checkRequirements(){
    //Update console.log
    console.log("forestScenario = " + forestScenario + "\n" + 
        "TeaSet = " + teaSet + "\n" + 
        "Trap = " + trap + "\n" +
        "dragonNotified = " + dragonNotified
    );
//Conditions for id=else
   if (
    id==4 && forestScenario==true || 
    id==10 && dragonNotified==true ||
    id==11 && teaSet==true || 
    id==13 && dragonNotified==true ||
    id==16 && dragonNotified==true) {
        id=pages[id].else;
   }
};

//run the program
showPage();
nextPage();



