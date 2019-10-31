window.onload = function(e){ 
    
    var game = new Game();

    game.init(properties);
    game.start();

    var player;
    var resultBoard;

    for(var i = 0; i < game.gameObjects.length; i++) {
        if(game.gameObjects[i].type == GameObjectTypes.player){
            player = game.gameObjects[i];
        } else if(game.gameObjects[i].type == GameObjectTypes.score){
            resultBoard = game.gameObjects[i];
        } else if(game.gameObjects[i].type == GameObjectTypes.enemy){
            game.achievements.enemiesLeft += 1;
        }
    }

    document.onkeypress = function(evt) {
        
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
            alert("success");
        }
    };
	
}
