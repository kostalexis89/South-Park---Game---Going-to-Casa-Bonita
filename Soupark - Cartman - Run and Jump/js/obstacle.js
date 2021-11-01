class Obstacle {
   
    constructor(){
        this.x = width
        this.y = height - 200
        this.width = 400
        this.height = 160
        
    }
    draw (){
        this.x= this.x - game.backgroundImages[0].speed
        image(game.obstacleImage, this.x, this.y, this.width, this.height)
    }
}