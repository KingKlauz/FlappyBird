var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var score = 0;


var birdY = 100;
var birdX = 10;
var birdWidth = birdHeight = 25;

var gravity = 1.5;

var pipeGap = 380;
var pipeWidth = 50;
var pipeHeight = 300;


var pipe = [];


pipe[0] =
{
  x: cvs.width,
  y : -80
};



var birdy;
var pipey1, pipey2;

document.addEventListener("keydown",moveUp);

function moveUp()
{
    birdY -= 30;
}




function draw(){


ctx.clearRect(0,0,500,400);

ctx.fillStyle = "#181818";
birdy = ctx.fillRect(birdX, birdY, birdWidth, birdHeight);


  
birdY += gravity;
    

for(var i = 0; i < pipe.length; i++)
{
  ctx.fillStyle = "#f15f74";
  pipey1 = ctx.fillRect(pipe[i].x, pipe[i].y, pipeWidth, pipeHeight);


  ctx.fillStyle = "#f15f74";
  pipey2 = ctx.fillRect(pipe[i].x, pipe[i].y  + pipeGap, pipeWidth, pipeHeight);


  pipe[i].x = pipe[i].x - 2;



  if(pipe[i].x == 224)
  {
    pipe.push
    (
      {
        x: cvs.width,
        y : Math.round(Math.random()*pipeHeight)-pipeHeight

      }
    );

  }

  

 if(pipe[i].x == 0){
            score++;

}

ctx.font = "25px Arial";
ctx.fillStyle = "#181818";
ctx.fillText(score, 450, 50);


  if( birdX + birdWidth >= pipe[i].x 
    && birdX <= pipe[i].x + pipeWidth 
    && (birdY <= pipe[i].y + pipeHeight
      || birdY+ birdHeight >= pipe[i].y+pipeGap) 
      || birdY + birdHeight >=  cvs.height
      || birdY + birdHeight <= 0)
  {
           ctx.clearRect(0,0,500,400);// reload the page
   }
  }
  requestAnimationFrame(draw);
    
}

draw();

function intersectRect(r1, r2) {
  return !(r2.x > r1.y || 
           r2.y < r1.x || 
           r2.w > r1.h ||
           r2.h < r1.w);
}
