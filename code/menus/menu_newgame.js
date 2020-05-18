"use strict";

(function() {
    window.addEventListener("load", main);
}());

function main() {
    var playBtn= document.getElementById("playBtn");
    var backBtn= document.getElementById("backBtn");

    playBtn.addEventListener("mouseup", startGame)
    backBtn.addEventListener("mouseup",backMainMenu);
    
    playBtn.addEventListener("mouseenter",playSound);
    backBtn.addEventListener("mouseenter",playSound);

}

function backMainMenu() { location.replace("menu_play.html") }
function startGame() { 
    var input= document.getElementsByTagName("input")[0]
    if (input.value=="") {
        window.alert("First, tell me your name!")
    } else {
        if (confirm("Delete saved data?")) {
            if (confirm("All the data from the previous game will be deleted and you won't be able to recover it. Are you sure u want to proceed?")) {
                console.log("hi")
                const fs = require('fs')
                let data = input.value + " 00"
                fs.writeFile('../Save/Career.txt', data, (err) => {
                    if (err) throw err;
                })
                console.log("hello")
                location.replace("game.html")
            }
        }
    }
}

function playSound() {
    var sound= new Audio("../../resources/sounds/buttonSwitchSound.mp3")
    sound.play()
}