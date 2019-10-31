window.onload = function(e){ 
    var game = new Game();
    game.init(properties);
    game.load(properties);

    var resultBoard = game.resultBoard;

    document.onkeypress = function(evt) {
        
        let player = game.player;
        var charCode = evt.keyCode || evt.which;
        var charStr = String.fromCharCode(charCode);
    
        var playerCopy = new GameObject(player.width, player.height, player.posX, player.posY);
        player.move(charStr, game.render, game.canvas.width, game.canvas.height);
        
        game.gameObjects.forEach(gameObject => {
            
            if(GamePhysics.collision(player, gameObject)) {
                GameObjectCollisions.collide(game, player, playerCopy, gameObject);
            }
    
            if(gameObject.status == GameObjectStatus.alive){
                gameObject.update(game.render, game.canvas.width, game.canvas.height);
            }
        });
    
        player.update(game.render, game.canvas.width, game.canvas.height);
    
        resultBoard.destroy(game.render);
        resultBoard.setData(
            game.render, 
            game.achievements.getPoints()
        );
    
        if(game.achievements.enemiesLeft == 0){
            game.level ++;
            if(properties.levels[game.level]){
                game.destroy();
                game.load(properties);
            }else{
                alert("Game over");
            }
        }
    };
}
	

