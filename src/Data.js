var properties = {
    screenHeight : 500,
    screenWidth : 500,
    gameObjects : []
}

properties.gameObjects.push(new GameObject(20, 20, 30, 30, 10, GameObjectTypes.player, "#000"));
properties.gameObjects.push(new GameObject(480, 20, 0, 250, 0, GameObjectTypes.wall, "blue"));
properties.gameObjects.push(new GameObject(500, 20, 0, 0, 0, GameObjectTypes.wall, "blue"));
properties.gameObjects.push(new GameObject(500, 20, 0, 480, 0, GameObjectTypes.wall, "blue"));
properties.gameObjects.push(new GameObject(40, 40, 450, 20, 0, GameObjectTypes.score));


for(var i = 0; i < 5; i++){
    
    let posX =  (Math.floor((Math.random() * properties.screenWidth) + 1));
    let posY = (Math.floor((Math.random() * properties.screenHeight) + 1));

    properties.gameObjects.push(new GameObject(10, 10, posX, posY, 10, GameObjectTypes.enemy, "red"));
}