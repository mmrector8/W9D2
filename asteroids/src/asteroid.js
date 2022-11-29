// import {randomVec} from "./util";
const Util = require("./util")
import MovingObject from './moving_object';
//import {dummy, Util} from "./util.js"
let COLOR = "grey";
let RADIUS = 25;
let VEC_LENGTH =10;

export default class Asteroid extends MovingObject{
  constructor(pos){
    // this.vel = Util.scale(Util.randomVec(VEC_LENGTH), VEC_SCALER);
    let moArgs = {pos: pos.pos,
                  vel: Util.randomVec(VEC_LENGTH),
                  radius: RADIUS,
                  color: COLOR};
    
                  // super(pos, vel, RADIUS, color)
    super(moArgs);
  }

  
}




 