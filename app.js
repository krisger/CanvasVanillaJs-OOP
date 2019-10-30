window.onload = function(e){ 
    
    var game = new Game();
    game.init();
    game.start();

    var player;
    var enemies = [];
    var resultBoard;
    for(var i = 0; i < game.gameObjects.length; i++) {
        if(game.gameObjects[i].type == gameObjectTypes.Player){
            player = game.gameObjects[i];
        } else if(game.gameObjects[i].type == gameObjectTypes.Enemy) {
            enemies.push(game.gameObjects[i]);
        } else if(game.gameObjects[i].type == gameObjectTypes.Score){
            resultBoard = game.gameObjects[i];
        }
    }

    document.onkeypress = function(evt) {
        
        var charCode = evt.keyCode || evt.which;
        var charStr = String.fromCharCode(charCode);
        var isCollide = false;
        
        player.move(charStr, game.render, game.canvas.width, game.canvas.height, "#000");
        for(var i = 0; i < enemies.length; i++){
            if(enemies[i].status == "alive") {
             
                isCollide = game.physics.collision(player, enemies[i]);
                if(isCollide) {

                    game.achievements.addPoints(10);
                    game.achievements.enemiesLeft -= 1;

                    enemies[i].destroy(game.render);
                    enemies[i].setDied();                   
                }
            }   
        }

        player.update(game.render, game.canvas.width, game.canvas.height, "#000");
        resultBoard.destroy(game.render);
        resultBoard.setData(
            game.render, 
            game.achievements.getPoints()
        );

        if(game.achievements.enemiesLeft == 0){
           
        }
    };
	
}
