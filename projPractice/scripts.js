let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

let road = new Image;
road.src = "/Users/shamikaearle/Desktop/Development/Nebula_Academy/Notes/projPractice/GameRaod.png";
let modifier = 5; 
let obj1 = new Image;
obj1.src = "/Users/shamikaearle/Desktop/Development/Nebula_Academy/Notes/projPractice/car.png"
let obj2 = new Image;
obj2.src = "/Users/shamikaearle/Desktop/Development/Nebula_Academy/Notes/projPractice/car1.png"
let obj3 = new Image;
obj3.src = "/Users/shamikaearle/Desktop/Development/Nebula_Academy/Notes/projPractice/car2.jpeg"
let obj4 = new Image;
obj4.src = "/Users/shamikaearle/Desktop/Development/Nebula_Academy/Notes/projPractice/goldDollar.png"
let car = new Image;
car.src = "/Users/shamikaearle/Desktop/Development/Nebula_Academy/Notes/projPractice/car2.jpeg"
var objArray = [obj1, obj2, obj3, obj4]
var incomingObjs = [];
var count = 0;
for(var i = 0; i < 100; i++){
    var randomObj = objArray[Math.floor(Math.random()* objArray.length)];
    incomingObjs.push(randomObj);

}




console.log(objArray);
console.log('Random obj:' + randomObj)


road.onload = () => {
        requestAnimationFrame(gameLoop);
    }
 
let yOffSet = -680;

function gameLoop(){
    
    if(yOffSet>= 0) {
        yOffSet = -680;
        // count++;
    } 
    
    ctx.drawImage(road, 0, yOffSet);
    ctx.drawImage(road, 0, yOffSet + 680);
    ctx.drawImage(road, 0, yOffSet + 1360);
    
    yOffSet += 10;
    ctx.drawImage(car, 490, 400);
    ctx.drawImage(incomingObjs[count], 600, 200);
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