class Game {
    constructor(){
        this.achievements = null;
        this.canvas = null;
        this.level = 0;
        this.physics = null;
        this.gameObjects = [];
        this.render = null;   
        this.resultBoard = null;
        this.player = null;
    };

    init(properties) {
        
        var screen = new GameScreen(properties.screenWidth, properties.screenHeight, "canvas");
        this.canvas = document.getElementsByTagName(screen.tag)[0];
        this.canvas.height = screen.height;
        this.canvas.width = screen.width;   

        this.physics = new GamePhysics(this.render);
        this.render = this.canvas.getContext("2d");
        this.achievements = new GameAchievements("Points");
    };

    start(gameObjects) {  
        
        this.gameObjects = gameObjects;

        for(var index = 0; index < this.gameObjects.length; index++) {
            var gameObject =  this.gameObjects[index];
            gameObject.draw(this.render,  this.canvas.width,  this.canvas.height, gameObject.color);
        }
    }

    load(properties){
        if(properties.levels.length > 0){

            this.start(properties.levels[this.level].gameObjects);
    
            for(var i = 0; i < this.gameObjects.length; i++) {
                if(this.gameObjects[i].type == "Player"){
                    this.player = this.gameObjects[i];
                } else if(this.gameObjects[i].type == "ScoreBoard"){
                    this.resultBoard = this.gameObjects[i];
                } else if(this.gameObjects[i].type == "Enemy"){
                    this.achievements.enemiesLeft += 1;
                }
            }
        }else{
            throw "No gameobjects defined";
        }
    }

    destroy(){
        this.gameObjects = [];
        this.render.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}