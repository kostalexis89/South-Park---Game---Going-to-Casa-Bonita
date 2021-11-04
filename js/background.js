class Background {
    //we need a draw function so the backround can draw its  self
    
    draw(){
       // console.log('this is the backround')
        
       if(game.player.alive){
           game.backgroundImages[0].x -= game.backgroundImages[0].speed
    }
        image(game.backgroundImages[1].src, 0, 0, width, 400)
        image(game.backgroundImages[0].src, game.backgroundImages[0].x, 0, width, height)
        image(game.backgroundImages[0].src, game.backgroundImages[0].x + width, 0, width, height)
        if (game.backgroundImages[0].x < -width){
            game.backgroundImages[0].x = 0
        }
        if(game.bombPurpose){
            
            image(game.bombExplosion, game.bombX - 50, game.bombY - 200, 400 , 400)
            game.bombX-=game.backgroundImages[0].speed
        }
        if(game.player.gameOver){
            image(game.gameOverImage, 0, 0, width, height)
        }
        
    }

}
