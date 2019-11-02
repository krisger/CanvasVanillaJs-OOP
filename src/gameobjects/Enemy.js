class Enemy extends GameObject {

    setDied() {
        this.status = GameObjectStatus.dead; 
    }

    collide(game, player, playerCopy, gameObject){
        
        if(gameObject.status == GameObjectStatus.alive) {
            
            game.achievements.addPoints(10);
            game.achievements.enemiesLeft -= 1;

            gameObject.destroy(game.render);
            gameObject.setDied();     
        }
    }
}