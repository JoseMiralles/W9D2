const Util = require("./utils.js");
const {MovingObject} = require("./moving_object");

function Asteroid(options){
    this.color = options["color"] || "grey";
    this.radius = options["radius"] || 15;
    this.pos = options["pos"];
    this.vel = Util.randomVec(1);
    MovingObject.call(this, this);
}

Util.inherits(Asteroid, MovingObject);

module.exports = {
    Asteroid
}