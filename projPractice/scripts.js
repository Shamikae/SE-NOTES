let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let road = new Image;
road.src = "/Users/shamikaearle/Desktop/Development/Nebula_Academy/Notes/projPractice/Group 2.png";
let modifier = 5; 
let obj1 = new Image;
obj1.src = "/Users/shamikaearle/Desktop/Development/Nebula_Academy/Notes/projPractice/car.png"
let obj2 = new Image;
obj2.src = "/Users/shamikaearle/Desktop/Development/Nebula_Academy/Notes/projPractice/car1.png"
let obj3 = new Image;
obj3.src = "/Users/shamikaearle/Desktop/Development/Nebula_Academy/Notes/projPractice/car2.jpeg"
let obj4 = new Image;
obj4.src = "/Users/shamikaearle/Desktop/Development/Nebula_Academy/Notes/projPractice/goldDollar.png"

var objArray = [obj1, obj2, obj3, obj4]

console.log(objArray.ran)


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
    // ctx.drawImage(car, 490, 400);
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