class Game {
    constructor(){
        this.achievements = null;
        this.gameObjects = [];
        this.physics = null;
        this.render = null;
    };

    init() {
        var screen = new GameScreen(500, 500, "canvas");
        
        this.canvas = document.getElementsByTagName(screen.tag)[0];
        this.canvas.height = screen.height;
        this.canvas.width = screen.width;   

        this.render = this.canvas.getContext("2d");
        this.achievements = new GameAchievements("Points");

        this.physics = new GamePhysics(this.render);
        this.gameObjects.push(new GameObject(20, 20, 10, 10, 10, gameObjectTypes.Player, "#000"));
        this.gameObjects.push(new GameObject(40, 40, 450, 20, 0, gameObjectTypes.Score));

        for(var i = 0; i <= 5; i++){
            console.log(i);
            this.gameObjects.push(
                new GameObject(
                    10,
                    10,
                    (Math.floor((Math.random() * this.canvas.width) + 1)),
                    (Math.floor((Math.random() * this.canvas.height) + 1)),
                    0,                   
                    gameObjectTypes.Enemy,
                    "red"
                )
            );

            this.achievements.enemiesLeft += 1;
        }

    };

    start() {
        for(var index = 0; index < this.gameObjects.length; index++) {
            var gameObject =  this.gameObjects[index];
            gameObject.draw(this.render,  this.canvas.width,  this.canvas.height, gameObject.color);
        }
    }
}