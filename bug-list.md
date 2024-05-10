# Bug List

//Programmering
1. Problem: script.js not finding the "getElementById".
   - Fixed by moving the <script src...> from the top to the bottom of <body> in gamepage.html.
2. if-statements to hide buttons with undefined value not working.
   - Fixed by moving statements inside of a function.
3. Code "textbox.innerText = content.skrift;" not working
   - Fixed by adding the array position: "textbox.innerText = content[0].skrift;"
4. nextPage() always registering ob1.
   - Fixed by using "==" instead of "="... (not the first time this project.)

//Webbutveckling
1. Nav buttons in gamepage.html aren't the right size.
2. class=board in gamepage.html isn't centered on the page despite using "margin:auto".
