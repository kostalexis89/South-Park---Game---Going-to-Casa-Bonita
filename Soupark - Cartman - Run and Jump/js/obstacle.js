
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
        this.y = (Math.random() * height) / 2.5
        this.width = coin.width
        this.height = coin.height
    }
    draw(){
        this.x = this.x - game.backgroundImages[0].speed
        image(this.image, this.x, this.y, this.width, this.height)
    }
}