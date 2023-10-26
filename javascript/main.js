"use strict";

//funktion för dropdown meny
//tagit hjälp från w3schools


function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//stäng dropdown menyn om användaren klickar utaför

window.onclick = function(event) {
    if(!event.target.matches('.dropbutton')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        //loopa igenom 
        for(i=0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}