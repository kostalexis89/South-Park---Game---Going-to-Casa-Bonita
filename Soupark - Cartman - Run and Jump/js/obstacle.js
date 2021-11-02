class Obstacle {
   
    constructor(){
        this.x = width
        this.y = height - 200
        this.width = 500
        this.height = 160
        this.appearing = false
        
    }
    draw (images){
        if(this.appearing){
            if(game.player.alive){
               this.x= this.x - game.backgroundImages[0].speed
        }
             image(game[images], this.x, this.y, this.width, this.height)
             if(this.x < -this.width){
                 this.appearing = false
             }
        }
        
    }
}
// class Kyle {
//     constructor(){
//         this.x = width
//         this.y = height - 200
//         this.width = 500
//         this.height = 160
//         this.appearing = false
//     }
//     draw (condition){
//         if(condition){
//             if(game.player.alive){
//                this.x= this.x - game.backgroundImages[0].speed
//         }
//              image(game.kyleImage, this.x, this.y, this.width, this.height)
//              if(this.x < -this.width){
//                  this.appearing = false
//              }
//         }
        
//     }
// }