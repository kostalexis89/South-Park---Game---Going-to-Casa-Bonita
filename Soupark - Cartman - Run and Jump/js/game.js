const width = 1900
const height = 1200

class Game {
    
    setup(){
        this.backgroundMusic.setVolume(0.02)
       // this.backgroundMusic.play()
        
    }
    preload() {
        this.backgroundImages = [
            {src: loadImage('assets/background/bg.png'), x: 0, speed: 8 },
            {src: loadImage('assets/background/bg.jpg'), x: 0, speed: 0}
        ]
        this.playerImage = [loadImage('assets/player/cartman.gif'), loadImage('assets/player/cjump2.png'), loadImage('assets/player/explosion.gif'), loadImage('assets/player/cartmancries.gif')]
        this.obstacleImage = loadImage('assets/obstacle/obstacle.png')
        this.backgroundMusic = loadSound('assets/sounds/Minorities in my Waterpark.mp3')
        this.cartmanCries = loadSound('assets/sounds/CartmanGameOver.mp3');
        this.kyleImage = loadImage('assets/obstacle/kyle.gif')
        this.opponents = [
            {
                name: 'homeless',
                image: loadImage('assets/obstacle/obstacle.png'),
                x: width,
                y: height - 200,
                width: 500,
                height: 160
            },
            {
                name: 'Kyle',
                image: loadImage('assets/obstacle/kyle1.gif'),
                x: width,
                y: height - 280,
                width: 160,
                height: 210
            }
        ]
    }
    
    constructor() {
        this.background = new Background()
        this.player = new Player()
        this.obstacle = []
        this.backgroundMusic
        
    }

    draw() {
        //this draw should be called by the game
        //console.log('game drawing')        
        clear()
        this.background.draw()
        this.player.draw()
        //if I want to make the obstacle appears more often i have to change the following code-line
        if((Math.floor((Math.random() * 270))) % 249 === 0 && frameCount > 200){
      //  if(frameCount%300===0)
       // {
           frameCount = 0
            let random = Math.floor((Math.random() * 2))
            console.log(this.opponents[random])
            this.obstacle.push(new Obstacle(this.opponents[random]))

            //this.obstacle = new Obstacle()
           // this.obstacle.appearing = true
           // this.obstacle = new Obstacle() 
           // this.obstacle.x = width
        }
        this.obstacle.forEach(function (opponent) {
			if(opponent.x> - opponent.width){
                opponent.draw()
            }
		})
       
    }
    checkIfAlive(){
        console.log('i am checking if alive')
        

        // if((this.obstacle.x - this.player.x - this.player.width + 100) < 1 && (this.player.x - this.obstacle.x - this.obstacle.width +160)<1) {
        //    if(Math.abs(this.player.y - this.obstacle.y)<200){
        //     console.log('looser')
        //     this.player.alive = false
        //     if(!this.player.cryingIsPlaying){
        //         game.backgroundMusic.stop()
        //         game.cartmanCries.play()
        //     }
        //    }
        //    else {
        //     this.player.alive = true
        //     //this.player.gameOver = true

        //    }
        // }
    }
    giveAgameOver() {   
            //game.cartmanCries.play()
            return true
    }
}