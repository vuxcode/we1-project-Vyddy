# Bug List

//Programmering
1. Problem: script.js not finding the "getElementById".
   - Fixed by moving the <script src...> from the top to the bottom of <body> in gamepage.html.
   - Fixed again by using defer src and so being able to move it into the head again.
2. if-statements to hide buttons with undefined value not working.
   - Fixed by moving statements inside of a function.
3. Code "textbox.innerText = content.skrift;" not working
   - Fixed by adding the array position: "textbox.innerText = content[0].skrift;"
4. nextPage() always registering ob1.
   - Fixed by using "==" instead of "="... (not the first time this project.)
5. Requirements in array not working.
   - fixed by scrapping Object.assign in favour of specific if statements.
7. intro pictures seen in elements but not on screen.
   - fixed by cleaning up code. Not entirely sure what the problem was.
8. if-statement for intro picture id>2 not working.
   - fixed by using it correctly (id<2) but scrapped in favour of if (pages[id].image) to check if the page has an image rather than a conditional id.
9. Picturebox.display="none" not hiding the picturebox.
   - Fixed by removing set measurements in CSS code & also removing the border.

//Webbutveckling
1. Nav buttons in gamepage.html aren't the right size.
2. class=board in gamepage.html isn't centered on the page despite using "margin:auto".
   - fixed by box-sizing and not keeping the .board the same width as .game
