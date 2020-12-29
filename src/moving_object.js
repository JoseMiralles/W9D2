function MovingObject(options) {
  // this.options = options;
  this.pos = options["pos"];
  this.vel = options["vel"];
  this.radius = options["radius"];
  this.color = options["color"];
};

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI)
  ctx.strokeStyle = this.color;
  ctx.lineWidth = 1;
  ctx.fillStyle = this.color;
  ctx.fill();
  ctx.stroke();
};

module.exports = {
  MovingObject      // this.MovingObject contains MovingObject
}