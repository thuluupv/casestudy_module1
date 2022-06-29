let canvas= document.getElementById('gamezone');
let context= canvas.getContext('2d');
let scoreshow=document.getElementById("score");

let birdimg= new Image();
let backgroundGame=new Image();
let frontTube= new Image();
let belowTube=new Image();

let audio = new Audio();
let audio2 = new Audio();
let audio3= new Audio();

birdimg.src="img/bird.png";
backgroundGame.src="img/backgroundgame.png";
frontTube.src="img/frontTube.png";
belowTube.src="img/belowTube.png";
audio.src="audio/flysound.mp3"
audio2.src="audio/congrat.mp3"
audio3.src="audio/losesound.mp3"

let score=0;
let tubeDistanceUpDowns=150;
let tubeDistanceLeftRight;
let speed=6;
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

    for(let i=0; i<tube.length; i++){
        tubeDistanceLeftRight=frontTube.height+tubeDistanceUpDowns;
        context.drawImage(frontTube,tube[i].x,tube[i].y);
        context.drawImage(belowTube,tube[i].x,tube[i].y+tubeDistanceLeftRight);
        tube[i].x-=speed;

        if(tube[i].x  == canvas.width/2){
            tube.push({
                x:canvas.width,
                y:Math.floor(Math.random()*frontTube.height)-frontTube.height
            })
        }
        if(tube[i].x == bird.x) {
            score++;
            if (score%5==0 && score!=0) {
                audio2.play()
                tubeDistanceUpDowns-=10;
                backgroundGame.src="img/nenchinh.png";
            }
        }

        if(tube[i].x == 0 ) {
            tube.splice(0,1);
        }

        if(bird.y+birdimg.height==canvas.height||
            bird.x+birdimg.width>= tube[i].x && bird.x <= tube[i].x +frontTube.width
            && (bird.y<=tube[i].y+frontTube.height||
                bird.y +birdimg.height>= tube[i].y+ tubeDistanceLeftRight)
        ){
            context.font="50px Times";
            context.fillText("GameOver",400, 200);
            context.fillText(score,480, 270);
            return audio3.play();
        }
    }

    scoreshow.innerHTML= "score: " + score;
    bird.y+=3;
    requestAnimationFrame(run);
}

document.addEventListener("keydown",function(){
    bird.y-=60;
    audio.play()
})
run();