// object destructuring i.e. {MovingObject}
const {MovingObject} = require("./moving_object.js");

// testing purposes only
window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    console.log("test");
});