class GameObjectCollisions{

    constructor(){}
    
    static collide(game, player, playerCopy, gameObject){
        if (gameObject.type == GameObjectTypes.enemy) {
            this.enemy(game, gameObject);
        } else if (gameObject.type == GameObjectTypes.wall) {
            this.wall(game, player, playerCopy, gameObject);
        }
    }

    static enemy(game, gameObject) {
        if(gameObject.status == GameObjectStatus.alive) {
            game.achievements.addPoints(10);
            game.achievements.enemiesLeft -= 1;

            gameObject.destroy(game.render);
            gameObject.setDied();     
        }
    }

    static wall(game, player, playerCopy, gameObject) {

        player.destroy(game.render);
        player.posX = playerCopy.posX;
        player.posY = playerCopy.posY;

        gameObject.update(game.render, game.canvas.width, game.canvas.height, gameObject.color);
    }
}