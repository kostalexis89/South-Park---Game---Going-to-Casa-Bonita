const game = new Game();

function preload() {
    game.preload()
}
function setup() {
    //1. create Canvas
    createCanvas(width,height)
}
function draw() {
    game.draw()
}
function keyPressed() {
    if(keyCode===32 && game.player.y === height - 300){
       game.player.jump()
       //console.log('jump')
    }
}