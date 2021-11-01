class Player {
    constructor() {
        this.gravity = 0.3
        this.velocity = 0
        this.x = 100
        this.y = height - 300
        this.width = 170
        this.height = 230
        this.isHeJumping = false
        this.alive = true
        this.gameOver = false
    
    }
    draw() {
        //in every draw I check if Eric cartman is alive or dead. If he is dead then we will add the explosion gif
        if(this.alive){
            this.velocity += this.gravity
            this.y += this.velocity
            if(this.y >= height - 300){
                this.y = height - 300
            }
            if(this.y === height - 300){
                image(game.playerImage[0], this.x, this.y, this.width, this.height)
                this.isHeJumping = false
            }
            if(this.velocity !==0 && this.isHeJumping){
                image(game.playerImage[1], this.x, this.y, this.width, this.height)
            }
            game.checkIfAlive()
        }
        else {
            if(!this.gameOver){
                image(game.playerImage[2], this.x, this.y - 200, this.width + 200 , this.height + 200)
                setInterval(() => {
                    this.gameOver = game.giveAgameOver()
                }, 1350);
                
                
                
            }
        }
       
      //  image(game.playerImage[0], this.x, this.y, this.width, this.height)
        
    }
    jump() {
        this.velocity = -12.5
        this.isHeJumping = true
    }
    // checkIfAlive(){
    //     console.log('im checking')

    // }
}