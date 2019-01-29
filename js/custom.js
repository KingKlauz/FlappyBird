var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


var score = 0;


var birdY = 100;
var birdX = 10;
var birdWidth = birdHeight = 25;

var gravity = 1.5;


// var pipeX = 300;
// var pipeY = 0;
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

    // console.log("y = " + pipe[i].y);
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
            location.reload(); // reload the page
   }
  }


  // if( birdX + 25 >= pipe[i].x 
  //   && birdX <= pipe[i].x + 50 
  //   && (birdY <= pipe[i].y + 100 
  //     || birdY+25>= pipe[i].y+pipeGap) 
  //   // || birdY + birdy.height >=  cvs.height - fg.height)
  //   )
  // {
  //           location.reload(); // reload the page
  //       }

// ctx.fillStyle = "red";
// ctx.fillRect(pipeX, pipeY, 50, 100);


// ctx.fillStyle = "blue";
// ctx.fillRect(pipeX, pipeY  + pipeGap, 50, 100);


// pipeX--;


        

  requestAnimationFrame(draw);
    
}

draw();

function intersectRect(r1, r2) {
  return !(r2.x > r1.y || 
           r2.y < r1.x || 
           r2.w > r1.h ||
           r2.h < r1.w);
}
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
