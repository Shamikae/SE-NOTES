let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

let road = new Image;
road.src = "/Users/shamikaearle/Desktop/Development/Nebula_Academy/Notes/HtmlCssPractice/road.png";

road.onload = () => {
    requestAnimationFrame(gameLoop);
}

function gameLoop(){
    context.drawImage(road, 0, 0);
    requestAnimationFrame(gameLoop);
}