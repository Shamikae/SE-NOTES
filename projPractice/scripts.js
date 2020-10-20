let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let road = new Image;
road.src = "Notes/Group 2.png";
let modifier = 5; 

road.onload = () => {
        requestAnimationFrame(gameLoop);
    }
 
let yOffSet = -512;

function gameLoop(){
    if(yOffSet>= 0) yOffSet = -512;
    
    ctx.drawImage(road, 0, yOffSet);
    ctx.drawImage(road, 0, yOffSet + 512);
    ctx.drawImage(road, 0, yOffSet + 1024);

    yOffSet += 10;
    ctx.drawImage(car, 490, 400);
    requestAnimationFrame(gameLoop);
}


window.addEventListener('keydown', (event) => { 
    const { style } = image1; 
    switch (event.key) { 
        case 'ArrowUp' : style.top = `${parseInt(style.top) - modifier}px` ; break; 
        case 'ArrowDown' : style.top = `${parseInt(style.top) + modifier}px`; break; 
        case 'ArrowLeft' : style.left = `${parseInt(style.left) - modifier}px`; break;
        case 'ArrowRight' : style.left = `${parseInt(style.left) + modifier}px`; break;
    }
});