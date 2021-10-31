class Player {
    constructor() {
        this.gravity = 0.2
        this.velocity = 0
        this.x = 100
        this.y = height - 300
        this.width = 170
        this.height = 230
    }
    draw() {
        if(this.y < height -300) {
            this.y+=this.gravity 
        }
        image(game.playerImage, this.x, this.y, this.width, this.height)
       
    }
    jump() {
        this.y  -=300
    }
}