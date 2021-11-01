const width = 1900
const height = 1200

class Game {
    constructor() {
        this.background = new Background()
        this.player = new Player()
        this.backgroundImages = []
    }

    preload() {
        this.backgroundImages = [
            {src: loadImage('assets/background/bg.png'), x: 0, speed: 8 },
            {src: loadImage('assets/background/bg.jpg'), x: 0, speed: 0}
        ]
        this.playerImage = [loadImage('assets/player/cartman.gif'), loadImage('assets/player/cjump2.png')]
    }

    draw() {
        //this draw should be called by the game
        //console.log('game drawing')
        clear()
        this.background.draw()
        this.player.draw()
    }
}
