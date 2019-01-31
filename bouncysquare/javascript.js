var cvs = document.getElementById("canvasGame");
var ctx = cvs.getContext("2d");


var score = 0;


var playerY = 250;
var playerX = 225;
var playerWidth = playerHeight = 25;

var gravity = 3;


// var pipeX = 300;
// var pipeY = 0;
var pipeGap = 500;
var pipeWidth = 350;
var pipeHeight = 50;


var beginDraw;
var pipe = [];


pipe[0] =
{
  x: 0,
  y : 0
};



var birdy;
var pipey1, pipey2;

document.addEventListener("keydown",moveUp);

function moveUp(e)
{
    e = e || window.event;

    if (e.keyCode == '13')
    {
      beginDraw = true;
    }
    else if (e.keyCode == '37') 
    {
      if(beginDraw)
      {
        playerX -= 30;
        playerY -= 40;
      }
    }
    else if (e.keyCode == '39') 
    {
      if(beginDraw)
      {
        playerX += 30;
        playerY -= 40;
      }
    }
}




function draw()
{

  //Clear canvas
  ctx.clearRect(0,0,500,400);


  //Render player
  ctx.fillStyle = "#181818";
  ctx.fillRect(playerX, playerY, playerWidth, playerHeight);


  ctx.fillStyle = "#f15f74";
  pipey1 = ctx.fillRect(pipe[0].x, pipe[0].y, pipeWidth, pipeHeight);

  ctx.fillStyle = "#f15f74";
  pipey2 = ctx.fillRect(pipe[0].x  + pipeGap, pipe[0].y, pipeWidth, pipeHeight);



if(beginDraw)
{
    playerY += gravity;

    for(var i = 0; i < pipe.length; i++)
    {
      ctx.fillStyle = "#f15f74";
      pipey1 = ctx.fillRect(pipe[i].x, pipe[i].y, pipeWidth, pipeHeight);


      ctx.fillStyle = "#f15f74";
      pipey2 = ctx.fillRect(pipe[i].x  + pipeGap, pipe[i].y, pipeWidth, pipeHeight);

      pipe[i].y = pipe[i].y + 2;



      if(pipe[i].y == 200)
      {
        pipe.push
        (
          {
            x: Math.round(Math.random()*pipeWidth)-pipeWidth,
            y : -50

          }
        );

      }
      

      //Death Checker
      if((playerX + playerWidth >= pipe[i].x + pipeGap || playerX <= pipe[i].x + pipeWidth)
       &&(playerY <= pipe[i].y + pipeHeight)
        &&(playerY + playerHeight >= pipe[i].y)
        || (playerY >= cvs.height || playerX <= 0 || playerX >= cvs.width))
      {
         setTimeout(() => window.location.reload());
      }



     if(pipe[i].y == 200)
     {
        score++;
     }

    }
    

    ctx.font = "25px Arial";
    ctx.fillStyle = "#181818";
    ctx.fillText(score, 450, 50);

}

  requestAnimationFrame(draw);
 
}
  
draw();


