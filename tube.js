let canvas= document.getElementById('gamezone');
let context= canvas.getContext('2d');
let scoreshow=document.getElementById("score");

let birdimg= new Image();
let backgroundGame=new Image();
let frontTube= new Image();
let belowTube=new Image();

birdimg.src="img/bird.png";
backgroundGame.src="img/nenchinh.png";
frontTube.src="img/frontTube.png";
belowTube.src="img/belowTube.png";

let score=0;
let tubeDistanceUpDowns=150;
let tubeDistanceLeftRight;

let bird={
    x: backgroundGame.width/5,
    y: backgroundGame.height/2
}
let tube=[];
tube[0]={
    x:canvas.width,
    y:0
}

function run(){

    context.drawImage(backgroundGame,0,0);
    context.drawImage(birdimg,bird.x,bird.y);

    for(let i=0;i<tube.length;i++){
        tubeDistanceLeftRight=frontTube.height+tubeDistanceUpDowns;
        context.drawImage(frontTube,tube[i].x,tube[i].y);
        context.drawImage(belowTube,tube[i].x,tube[i].y+tubeDistanceLeftRight);
        tube[i].x-=5;
        if(tube[i].x == canvas.width/2){
            tube.push({
                x:canvas.width,
                y:Math.floor(Math.random()*frontTube.height)-frontTube.height
            })
        }
        if(tube[i].x == bird.x) score++;
        if(tube[i].x == 0 )tube.splice(0,1);

        if(bird.y+birdimg.height==canvas.height||
            bird.x+birdimg.width>= tube[i].x && bird.x <= tube[i].x +frontTube.width
            && (bird.y<=tube[i].y+frontTube.height||
                bird.y +birdimg.height>= tube[i].y+ tubeDistanceLeftRight)
        ){
            return alert("You lost");
        }
    }
    scoreshow.innerHTML= "score: " + score;
    bird.y+=3;
    requestAnimationFrame(run);
}
document.addEventListener("keydown",function(){
    bird.y-=60;
})
run();