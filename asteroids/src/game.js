import Asteroid from "./asteroid";

const DIM_X  = 2160;
const DIM_Y  = 1460;
const NUM_ASTEROIDS  = 100;

export default class Game {
  // let DIM_X = 640;
  // let DIM_Y = 640;
  constructor(canvas) {
    this.asteroids = [];
    this.addAsteroids();
    this.ctx = canvas.getContext('2d');
    this.draw(this.ctx);
    this.animate();
  }

  addAsteroids() {
    while (this.asteroids.length < NUM_ASTEROIDS) {
      // MAKE NEW ASTEROID (RANDOM POSITION) AND PUSH TO ARRAY
      let newRoid = new Asteroid(this.randomPosition());
      this.asteroids.push(newRoid);
    }
  }

  randomPosition() {
    return {pos: [Math.floor(Math.random() * DIM_X), 
            Math.floor(Math.random() * DIM_Y)]};
  }

  draw(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, DIM_X, DIM_Y);
    this.asteroids.forEach(roid => roid.draw(ctx));
  }

  moveObjects(){
    this.asteroids.forEach(roid => roid.move());
    //  for (let i=0; i < this.asteroids.length; i++){
  //   this.asteroids[i].move();
  //  }
  }

  animate(){
    this.moveObjects();
    this.draw(this.ctx);
    
    requestAnimationFrame(this.animate.bind(this));
  }
}