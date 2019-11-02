var properties = {
    screenHeight : 500,
    screenWidth : 500,
    levels : [{
        count : 1, 
        gameObjects : []
    }, {
        count : 2,
        gameObjects: []
    },{
        count : 3, gameObjects: []
    }],
    gameObjects : []
}

properties.levels[0].gameObjects.push(new Player(20, 20, 30, 30, 10, "#000"));
properties.levels[0].gameObjects.push(new Wall(480, 20, 0, 250, 0, "blue"));
properties.levels[0].gameObjects.push(new Wall(500, 20, 0, 0, 0, "blue"));
properties.levels[0].gameObjects.push(new Wall(500, 20, 0, 480, 0, "blue"));
properties.levels[0].gameObjects.push(new ScoreBoard(40, 40, 450, 20, 0));
properties.levels[0].gameObjects.push(new Item(10, 10, 350, 200, 0, "green"));

properties.levels[1].gameObjects.push(new Player(20, 20, 30, 460, 10, "#000"));
properties.levels[1].gameObjects.push(new ScoreBoard(40, 40, 450, 20, 0));
properties.levels[1].gameObjects.push(new Enemy(10, 10, 30, 30, 10, "red"));
properties.levels[1].gameObjects.push(new Wall(200, 20, 0, 350, 0, "blue"));

for(var i = 0; i < 5; i++){
    
    let posX =  (Math.floor((Math.random() * properties.screenWidth) + 1));
    let posY = (Math.floor((Math.random() * properties.screenHeight) + 1));

    properties.levels[0].gameObjects.push(new Enemy(10, 10, posX, posY, 10, "red"));
}

properties.levels[2].gameObjects.push(new ScoreBoard(40, 40, 450, 20, 0));
