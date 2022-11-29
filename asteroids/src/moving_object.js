class MovingObject {
  constructor(moArgs) {
    console.log(moArgs);
  
    this.pos = moArgs.pos;
    this.vel = moArgs.vel;
    this.radius = moArgs.radius;
    this.color = moArgs.color;

  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    )
   
    ctx.fill();
  }

  move() {
    console.log('before pos');
    console.log(this.pos);
    console.log(this.vel);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
    console.log('after pos');
    console.log(this.pos);
  }
}


export default MovingObject;
















// Scratch code
// MovingObject.prototype.print = function() {
//   console.log(this.pos);
//   console.log(this.vel);
//   console.log(this.radius);
//   console.log(this.color);
// }



// const mo = new MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00"
// });
