class Wall extends GameObject {
    collide(game, player, playerCopy, gameObject) {
        player.destroy(game.render);
        player.posX = playerCopy.posX;
        player.posY = playerCopy.posY;
    }
}