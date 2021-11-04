const width = 1900
const height = 1200
class Game {  
    setup(){
        this.boom = loadSound('assets/sounds/Boom.mp3')
        this.backgroundMusic = loadSound('assets/sounds/Minorities in my Waterpark.mp3')
        this.backgroundMusic.setVolume(0.4)
        this.boom.setVolume(0.3)
       // this.backgroundMusic.play()
    }
    preload() { 
        this.backgroundImages = [
            {src: loadImage('assets/background/bg.png'), x: 0, speed: 8 },
            {src: loadImage('assets/background/bg.jpg'), x: 0, speed: 0}
        ]
        this.playerImage = [loadImage('assets/player/cartman.gif'), loadImage('assets/player/cjump2.png'), loadImage('assets/player/explosion.gif'), loadImage('assets/player/cartman dead.gif')]
        this.obstacleImage = loadImage('assets/obstacle/obstacle.png')
        
        this.cartmanCries = loadSound('assets/sounds/cartmandies3.mp3');
        this.kyleImage = loadImage('assets/obstacle/kyle.gif')
        this.bombExplosion = loadImage('assets/coins/bomb-explosion.gif')
        
        this.gameOverImage = loadImage('assets/background/press.png')
        this.opponents = [
            {
                name: 'homeless',
                image: loadImage('assets/obstacle/obstacle.png'),
                x: width,
                y: height - 200,
                width: 500,
                height: 160,
                point: 300
            },
            {
                name: 'Kyle',
                image: loadImage('assets/obstacle/kyle1.gif'),
                x: width,
                y: height - 280,
                width: 160,
                height: 210,
                point: 500
            },
            {
                name: 'Orphan',
                image: loadImage('assets/obstacle/orphan3.gif'),
                x: width,
                y: height - 250,
                width: 120,
                height: 187,
                point: 100
            },
            {
                name: 'Tsoupakampra',
                image: loadImage('assets/obstacle/tsoupakampra.gif'),
                x: width,
                y: height - 300,
                width: 186,
                height: 220,
                point: 200
            },
            {
                name: 'Paris Hilton',
                image: loadImage('assets/obstacle/paris-hilton.gif'),
                x: width,
                y: height - 300,
                width: 230,
                height: 300,
                point: 20
            },
            {
                name: 'Jesus',
                image: loadImage('assets/obstacle/Jesus2.png'),
                x: width, 
                y: height - 300,
                width: 250,
                height: 280,
                point: -1000
            },
            {
                name: 'manBearPig',
                image: loadImage('assets/obstacle/manbearpig.png'),
                x: width, 
                y: height - 300,
                width: 300,
                height: 280,
                point: 600
            }
        ]
        this.coins =[
            {
                name: 'chickenNugget',
                points: 1,
                image: loadImage('assets/coins/chickenNugget.gif'),
                rare: 6,
                width: 60,
                height: 60
            },
            {
                name: 'KfcBox',
                points: 5,
                image: loadImage('assets/coins/kfc-bucket.gif'),
                rare: 3,
                width: 100,
                height: 100
            }
        ]
    }
    constructor() {
        this.background = new Background()
        this.player = new Player()
        this.obstacle = []
        this.nuggets = []
        this.backgroundMusic
        this.bombX
        this.bombY
        this.bombPurpose = false
    }

    draw() {
        clear()
        this.background.draw()
        this.player.draw()
        let frameCount2= frameCount
        //next lines are all about calling the obstacles
        if((Math.floor((Math.random() * 270))) % 249 === 0 && frameCount > 100){
            frameCount2 = frameCount
            frameCount = 0
            let random = Math.floor((Math.random() * this.opponents.length))
           // console.log(this.opponents[random])
            this.obstacle.push(new Obstacle(this.opponents[random]))
        }
        //drawing the opponents
        this.obstacle.forEach(function (opponent) {
           // console.log('I am drawing the opponent')
			
                opponent.draw()
            
		})
        this.obstacle = this.obstacle.filter(function(obs){
            if(obs.x<=-obs.width){
                return false
            } else {
                return true
            }
        })
     //   console.log(this.obstacle)
        //next lines are all about drawing the chickenNuggets / coins
        if((Math.floor((Math.random() * 270))) % 249 === 0 && frameCount2 > 150){
            frameCount2 = 0
            //console.log('Iam here')
            let randomNumber = (Math.floor((Math.random() * 4)))
            if(randomNumber*this.coins[0].rare > randomNumber*this.coins[1].rare){
               // console.log('Nugget')
                this.nuggets.push(new Coins(this.coins[0]))
               // console.log(this.nuggets)
            } else {
               // console.log('box')
                this.nuggets.push(new Coins(this.coins[1]))
            }
        }
        //drawing the nuggets
        this.nuggets.forEach(function (coin) {
			if(coin.x> - coin.width){
                coin.draw()
              //  console.log('I am drawing the coin')
            }
		})
        //HERE I DRAW THE KFC BOMBS!!!!!!!
        game.player.shoots.forEach(function (shoot){
            shoot.draw()
            //here i check if colided
            if(shoot.checkIfTarget(shoot, game.obstacle[0])){
                console.log('not colided')
               
            }
        })
        this.nuggets = this.nuggets.filter(nugget => {
			if (nugget.collision(this.player)) {
				return false
			} else {
				return true
			}
		})
        //drawing the score
        text('Points: ' + game.player.points, 750, 80);     
        textSize(width / 40);
        fill(255, 255, 255 );
        text('Chicken Nuggets :' + game.player.nuggets, width - 450, 50);        
        text('KFC Boxes :' + game.player.boxes, width - 330, 110);
        textSize(25);
        fill(255, 255, 255);
        text('Space to jump, Enter to fire, Q for MusicTrack', 20 , 40);
        textSize(100);
        
        
        if(game.player.gameOver){
            
            setInterval(() => {
                noLoop() 
            }, 9000);  
        }
    }

    checkIfAlive(){     
        this.obstacle.forEach(function (opponent) {
            if((opponent.x - game.player.x - game.player.width + 70) < 1 && (game.player.x - opponent.x - opponent.width +160)<1) {
                if(Math.abs(game.player.y - opponent.y)<200){
               //  console.log('looser')
                 game.player.alive = false
                 if(!game.player.cryingIsPlaying){
                     game.backgroundMusic.stop()
                     game.cartmanCries.play()
                 }
                }
                else {
                 game.player.alive = true
                 //this.player.gameOver = true
     
                }
             }
		})
    }
    giveAgameOver() {   
            //game.cartmanCries.play()
            return true
    }
}