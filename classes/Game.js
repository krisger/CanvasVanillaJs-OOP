class Game {
    constructor(){
        this.achievements = null;
        this.gameObjects = [];
        this.physics = null;
        this.render = null;
    };

    init(properties) {
        
        var screen = new GameScreen(properties.screenWidth, properties.screenHeight, "canvas");
        this.canvas = document.getElementsByTagName(screen.tag)[0];
        this.canvas.height = screen.height;
        this.canvas.width = screen.width;   

        this.render = this.canvas.getContext("2d");
        this.achievements = new GameAchievements("Points");

        this.physics = new GamePhysics(this.render);
        this.gameObjects = properties.gameObjects;
    };

    start() {
        for(var index = 0; index < this.gameObjects.length; index++) {
            var gameObject =  this.gameObjects[index];
            gameObject.draw(this.render,  this.canvas.width,  this.canvas.height, gameObject.color);
        }
    }
}