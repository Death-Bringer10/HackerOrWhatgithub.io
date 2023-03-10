let dx = 2.5;
 let cx = 200;
 let cy = 200;
 let dy = 2.5;
 const radius = 10;
 let ry = 245;
 let rx = 300;
 let rh = 5;
 let rw = 50;
 let stemna;
 let score = 0;


let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
stemna = canvas.width/2;
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);



function animateCircle (){
  
    requestAnimationFrame(animateCircle);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'white';
    ctx.stroke();
    cx += dx;
    cy += dy;
  
    //Game life
    ctx.fillStyle = 'red';
    ctx.fillRect(5, 5, stemna, 5);
  
    //Game score
    ctx.fillStyle = 'green';
    ctx.fillRect(canvas.width/2 - 5, 5, score, 5)
    if(cx + radius > canvas.width || cx - radius < 0){
      dx = -dx;
    }
    
    /*if (cy + radius > canvas.geight || cy - radius < 0) {
       dy = -dy;
       ctx.font = "30px Arial";
       ctx.fillText("YOU LOST!",120,100);
     }*/ 
    if (cy + radius > canvas.height){
      if(cx > rx && cx < rx + rw ){
        dy = -dy;
        score += 20; 
      } else {
        reset();  
      }
   }
  
    if(score > canvas.width/2){
            ctx.font = "30px Arial";
            ctx.fillText("YOU WON!",165,100)
            stemna = canvas.width/2;
            dx = 0;
            dy = 0;
        }
        if(stemna < 0){
            ctx.font = "30px Arial";
            ctx.fillText("YOU LOST!",165,100);
            score = 0;
            dx = 0;
            dy = 0;
        }
  
   if (cy - radius < 0){
        dy = -dy
   }
}

function reset(){
  cy = 10;
  stemna -= 20;
}

function restart(){
  cx = 10;
  cy = 10;
  dx = 2.5;
  dy = 2.5;
  stemna = canvas.width/2;
  score = 0;
}


function movingBar(){
      requestAnimationFrame(movingBar);
      //ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'yellow';
      ctx.fillRect(rx, ry, rw, rh); 
 }
      
 function eventHandler(e){
   switch (e.keyCode) {
   case 37:  /* Left arrow was pressed */
       rx -= 20;
    if (rx - rw < 0){
      rx = 0;
    }
   break;
   case 39:  /* Right arrow was pressed */
       rx += 20;
    if (rx + rw > canvas.width){
      rx = canvas.width - rw;
     }
   break;
   }
}

function init (){
  
  animateCircle();
  movingBar();
  
}
init();
window.addEventListener('keydown', eventHandler, true);
  let button = document.getElementById('button');
  button.addEventListener('click', restart);