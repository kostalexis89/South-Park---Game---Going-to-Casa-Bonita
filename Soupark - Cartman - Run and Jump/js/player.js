class Player {
    constructor() {
        this.gravity = 0.3
        this.velocity = 0
        this.x = 100
        this.y = height - 300
        this.width = 170
        this.height = 230
    }
    draw() {

        this.velocity += this.gravity
        this.y += this.velocity
        if(this.y >= height - 300){
            this.y = height - 300
        }
        image(game.playerImage, this.x, this.y, this.width, this.height)
    }
    jump() {
        this.velocity = -12.5
    }
}