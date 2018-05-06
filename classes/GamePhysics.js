class GamePhysics{
    
    constructor(render){
        this.render = render;
    }
    
    collision(firstObject, secondObject){
        return !(
            ((firstObject.posY + firstObject.height) < (secondObject.posY)) ||
            (firstObject.posY > (secondObject.posY + secondObject.height)) ||
            ((firstObject.posX + firstObject.width) < secondObject.posX) ||
            (firstObject.posX > (secondObject.posX + secondObject.width))
        );
    }
    
}
