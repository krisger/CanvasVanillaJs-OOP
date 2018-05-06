window.onload = function(e){ 
    var isCollide = false;
    var screen = new GameScreen(500, 500, "canvas");
    var canvas = document.getElementsByTagName(screen.tag)[0];

    canvas.height = screen.height;
    canvas.width = screen.width;   
    var render = canvas.getContext("2d");

    var Achievements = new GameAchievements("Points");
    var Physics = new GamePhysics(render);
    var Player = new GameObject(20, 20, 10, 10, 10, "player");
    var ResultBoard = new GameObject(30, 30, 450, 20, 0, "score");


    ResultBoard.draw(render, screen.width, screen.height, "#fff")
    ResultBoard.setData(
        render, 
        Achievements.getPoints(), 
        "#000"
    );

    Player.draw(render, screen.width, screen.height, "#000")
    var Enemies = new Array;


    for(var i = 0; i<= 5; i++){
        Enemies.push(
            new GameObject(
                10,
                10,
                (Math.floor((Math.random() * screen.width) + 1)),
                (Math.floor((Math.random() * screen.height) + 1)),
                "enemy"
            )
        );
    }

    for(var i = 0; i <Enemies.length; i++){
        Enemies[i].draw(render, screen.width, screen.height, "red")
    }


    document.onkeypress = function(evt) {
        var charCode = evt.keyCode || evt.which;
        var charStr = String.fromCharCode(charCode);

        Player.move(charStr, render, screen.width, screen.height, "#000");
        for(var i = 0; i <Enemies.length; i++){
            if(Enemies[i].status == "alive"){
                isCollide = Physics.collision(Player, Enemies[i]);
                if(isCollide){
                    Enemies[i].destroy(render);
                    Enemies[i].setDied();


                    Achievements.addPoints(10);


                    ResultBoard.destroy(render);

                    ResultBoard.setData(
                        render, 
                        Achievements.getPoints(), 
                        ResultBoard.posX, 
                        ResultBoard.posY
                    );
                }
            }   
        }
    };
	
}
