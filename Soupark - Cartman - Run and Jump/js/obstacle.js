
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
    }

    collision(playerInfo) {
		// console.log('collision', playerInfo)
		// get the middle of the player 
		const playerX = playerInfo.x + playerInfo.width / 2
		const playerY = playerInfo.y + playerInfo.height / 2
		// get the middle of the obstacle
		const obstacleX = this.x + this.width// / 2
		const obstacleY = this.y + this.height// / 2
		// measure the distance between obstacle and player
		if (dist(obstacleX, obstacleY, playerX, playerY) > 150) {
			// this is not a collision
			return false
		} else {
			// 
			// game.player.score += 10
			// console.log(game.player.score)
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