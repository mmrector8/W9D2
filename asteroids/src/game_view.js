
export default class GameView {

  constructor(){
    this.game = new Game(canvas);
    this.ctx = canvas.getContext('2d');
  }
  
}