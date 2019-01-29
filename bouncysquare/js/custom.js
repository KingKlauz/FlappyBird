var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var score = 0;


var birdY = 250;
var birdX = 225;
var birdWidth = birdHeight = 25;

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
    // birdY -= 30;



      e = e || window.event;

    if (e.keyCode == '13') {
      beginDraw = true;
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
      if(beginDraw)
       {
        birdX -= 30;
       birdY -= 40;
     }
    }
    else if (e.keyCode == '39') {
      if(beginDraw)
       {
        birdX += 30;
       birdY -= 40;
     }
    }
}




function draw(){


ctx.clearRect(0,0,500,400);

ctx.fillStyle = "#181818";

birdy = ctx.fillRect(birdX, birdY, birdWidth, birdHeight);


 ctx.fillStyle = "#f15f74";
  pipey1 = ctx.fillRect(pipe[0].x, pipe[0].y, pipeWidth, pipeHeight);

  ctx.fillStyle = "#f15f74";
  pipey2 = ctx.fillRect(pipe[0].x  + pipeGap, pipe[0].y, pipeWidth, pipeHeight);



if(beginDraw)
{
  birdY += gravity;



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
  

// if(

// ((birdX + birdWidth <= pipe[i].x + pipeWidth) && (birdY <= pipe[i].y + pipeHeight) && (birdY  + birdHeight <= pipe[i].y))
// )
// {
//  setTimeout(() => window.location.reload());
// }

// (birdY >= cvs.height || birdX <= 0 || birdX >= cvs.width)

    
  // if( birdY + birdHeight   >= pipe[i].y
  //   && birdY <= pipe[i].y + pipeHeight
  //   && (birdX <= pipe[i].x + pipeWidth
  //     || birdX+ birdWidth >= pipe[i].x+pipeGap) 
  //     || birdX + birdWidth >=  cvs.height
  //     || birdX + birdWidth <= 0
  //     )
  // {
  //           setTimeout(() => window.location.reload());// reload the page
        
  //            // cancelAnimationFrame(draw);

  //  }
  if((birdX + birdWidth >= pipe[i].x + pipeGap || birdX <= pipe[i].x + pipeWidth)
   &&(birdY <= pipe[i].y + pipeHeight)
    &&(birdY + birdHeight >= pipe[i].y)
    || (birdY >= cvs.height || birdX <= 0 || birdX >= cvs.width))
  {
     setTimeout(() => window.location.reload());
  }



 if(pipe[i].y == 200){
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


//     player = {
//       x : width/2,
//       y : height - 5,
//       width : 50,
//       height : 50,
//       speed: 50,
//       velX: 0,
//       velY: 0,
//       jumping: false
//     },

//     obstacles = {
      
//       x : 0,
//       y : 0,
//       width : 100,
//       height : 150,
//       speed: 50,
//       velX: 0,
//       velY: 0,
//     }

//     keys = [],
//     friction = 0.9,
//     gravity = 5;

//     count = 0;

// canvas.width = width;
// canvas.height = height;

// function update(){
//   // check keys
//     if (keys[38] || keys[32]) {
//         // up arrow or space
//       if(!player.jumping){
//        player.jumping = true;
//        player.velY = -player.speed*2;

//       }
//     }
//     if (keys[39]) {
//         // right arrow
//         if (player.velX < player.speed) {
//             player.velX++;
//         }
//     }
//     if (keys[37]) {
//         // left arrow
//         if (player.velX > -player.speed) {
//             player.velX--;
//         }
//     }
   
//     player.velX *= friction;
   
//     player.velY += gravity;
  
//     player.x += player.velX;
//     player.y += player.velY;
    
//     if (player.x >= width-player.width) {
//         player.x = width-player.width;
//     } else if (player.x <= 0) {
//         player.x = 0;
//     }
  
//     if(player.y >= height-player.height){
//         player.y = height - player.height;
//         player.jumping = false;
//     }

 
//  //   obstacles.velY +=obstacles.speed*2;
//    // obstacles.y += obstacles.velY;
  

//     //obstacles.velX *= friction;
   
// //    if(obstacles.y <= 1400)
// //    {   obstacles.velY += gravity * 0.1;
  
// //     obstacles.x += obstacles.velX;
// //     obstacles.y += obstacles.velY;

// // }
// //      if (obstacles.x >= width-obstacles.width) {

// //       obstacles.x = width-obstacles.width;
// //     } else if (obstacles.x <= 0) {
// //         obstacles.x = 0;
     
// //     }
  
// //     // if(obstacles.y >= height-obstacles.height){

// //     //     obstacles.y = height - obstacles.height;
      
// //     // }

// // if(obstacles.y >= 1400)
// //  { 
// //   count = false;
// //   obstacles.y = 0;
// //   obstacles.x = 0;
// //  }

//   ctx.clearRect(0,0,width,height);
//   // ctx.fillStyle = "lime";
//   // ctx.fillRect(player.x, player.y, player.width, player.height);
    

//   ctx.fillStyle = "red";
//   //ctx.fillRect(obstacles.x, obstacles.y, 300, 100);
  
//   if(count < 3)  
//   {
//     randomX = Math.floor(Math.random()*(640-(0)+1)+(0));
//     randomY = Math.floor(Math.random()*(360-(0)+1)+(0));

 
//     count++;
//   }


//   for(var i = 0; i < 3; i++)
//   {
//     ctx.fillRect(randomX + obstacles.x, randomY + obstacles.y, 300, 100);
//   }


//   console.log("randomX = " + randomX);
//   console.log("randomY = " + randomY);
//    console.log (count) ;
//     console.log(obstacles.y);


//   requestAnimationFrame(update);
// }

// document.body.addEventListener("keydown", function(e) {
//     keys[e.keyCode] = true;
// });

// document.body.addEventListener("keyup", function(e) {
//     keys[e.keyCode] = false;
// });


// window.addEventListener("load",function(){
//     update();
// });
