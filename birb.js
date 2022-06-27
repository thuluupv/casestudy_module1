
let canvas= document.getElementById('gamezone');
let context= canvas.getContext('2d');
let scoreshow=document.getElementById('score');

let birdimg= new Image();
let background=new Image();
let frontTube= new Image();
let belowTube=new Image();
birdimg.src="images/bird.png";
background.src="img/backgroundgame.png";
frontTube.src="img/frontTube.png";
belowTube.src="img/belowTube.png";
class Bird {
    x;
    y;
constructor(x,y) {
    this.x = x;
    this.y = y;
}
drawBird(){

}
}