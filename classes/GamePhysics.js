class GamePhysics{
    
    constructor(render){
        this.render = render;
    }
    
    static collision(firstObject, secondObject){
        return (firstObject.posX < secondObject.posX + secondObject.width &&
            firstObject.posX + firstObject.width > secondObject.posX &&
            firstObject.posY < secondObject.posY + secondObject.height &&
            firstObject.posY + firstObject.height > secondObject.posY);
    }
    
}
