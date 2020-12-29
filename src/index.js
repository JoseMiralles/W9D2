// object destructuring i.e. {MovingObject}
const {MovingObject} = require("./moving_object.js");
const {Asteroid} = require("./asteroid.js");

// testing purposes only
window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    
    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // });
    // mo.draw(ctx);

    const as = new Asteroid({
        pos: [30,30]
    });
    as.draw(ctx);
});