
class Obstacle {
   
    constructor(opponent){
        this.x = opponent.x
        this.y = opponent.y
        this.width = opponent.width
        this.height = opponent.height
        this.appearing = false
        this.image = opponent.image
       // console.log(this.image)
        
    }
    draw (){
 
        //if(this.appearing){
           if(game.player.alive){
              this.x= this.x - game.backgroundImages[0].speed
            }
               image(this.image, this.x, this.y, this.width, this.height)
          //   if(this.x < -this.width){
            //     this.appearing = false
             //}
        }
        
    //}//
}
//no its time to add some chicken nugets
class Coins {
    constructor(coin){
        this.image = coin.image
        this.x = width
        this.y = height - game.player.height*2 -100
        this.width = coin.width
        this.height = coin.height
        this.points = coin.points
    }

    collision(playerInfo) {
		const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2
		const obstacleX = this.x + this.width// / 2
		const obstacleY = this.y + this.height// / 2
		if (dist(obstacleX, obstacleY, playerX, playerY) > 150) {
			return false
		} else {
			game.player.nuggets += this.points
            if(game.player.nuggets>=5){
                game.player.nuggets = 0
                game.player.boxes++
            }
			//console.log(game.player.score)
			return true
		}
	}
    draw(){
        if(game.player.alive){
            this.x= this.x - game.backgroundImages[0].speed
        }
        image(this.image, this.x, this.y , this.width, this.height)
    }
}
class Shoots {
    constructor(image){
        this.x = game.player.x
        this.y = game.player.y
        this.width = 130
        this.height = 130
        this.image = image
        this.bombPurpose = true
    }
    draw() {
       // console.log('i am drawing')
        //lets first draw the KFC BOX
        
    //THIS IS WRONG BECAUSE IT REMOVES ALL THE THINGS
    // WE HAVE TO MAKE ANOTHER FUNCTION OUTSIDE OF THE DRAW

        //if(!this.bombPurpose){
            if(game.obstacle.length>0){
                let rotation = atan2(game.obstacle[0].y -this.y, game.obstacle[0].x - this.x )
                this.x += cos(rotation) * 20;
                this.y += sin(rotation) * 20;
                image(this.image, this.x, this.y , this.width, this.height)
            }
        // } else {
        //     image(game.playerImage[2], this.x, this.y , 300, 300)
        //     setInterval(() => {
        //         game.player.shoots.shift()
        //         game.obstacle.shift()
        //     }, 2000);   
           
        // }
        
    }
    checkIfTarget(shoot, obstacle){
        //console.log('I am checking if collided')
        //if shoot hits game.obsacle[0]
        //console.log(game.obstacle.length)
        // if(true){
        //     return true
        // }else {
        //     return false 
        // } 
        // const playerX = playerInfo.x + playerInfo.width / 2
		// const playerY = playerInfo.y + playerInfo.height / 2
		// const obstacleX = this.x + this.width// / 2
		// const obstacleY = this.y + this.height// / 2
		// if (dist(obstacleX, obstacleY, playerX, playerY) > 150) {
		// 	return false
		// } else {
		// 	game.player.nuggets += this.points
        //     if(game.player.nuggets>=5){
        //         game.player.nuggets = 0
        //         game.player.boxes++
        //     }
		// 	//console.log(game.player.score)
		// 	return true
		// }
        const bombX = shoot.x + shoot.width / 2
        const bombY = shoot.y + shoot.height / 2
        const obstacleX = obstacle.x + obstacle.width / 2
        const obstacleY = obstacle.y + obstacle.height / 2

        
		if (dist(bombX, bombY, obstacleX, obstacleY) > 200) {
			return false
		} else {
            game.player.shoots.shift()
            game.obstacle.shift()
            console.log('Boom')
        }
    }
    
}