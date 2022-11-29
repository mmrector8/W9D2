// index.js
// const MovingObject = require('./moving_object.js')
import MovingObject from  './moving_object';
// import Asteroid from './asteroid';
// import Asteroid from './asteroid';
import Game from './game.js';

// const Asteroid = require('./asteroid.js')

window.MovingObject = MovingObject;
const canvas = document.getElementById('game-canvas');

let g = new Game(canvas);


// const mo = new MovingObject({
//   pos: [30, 30],  
//   vel: [10, 10],
//   radius: 50,
//   color: "#00FF00"
// });
// const astro = new Asteroid({pos: [30, 30]});


// mo.draw(ctx);
// astro.draw(ctx);
//mo.move();

// for (let i = 0; i < 10; i++) {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   mo.move();
//   mo.draw(ctx);
// }
