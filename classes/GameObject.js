class GameObject{
	constructor(width, height, posX, posY, stepSize, type){
		this.width = width;
		this.height = height;
		this.posX = posX;
		this.posY = posY;
		this.stepSize = stepSize;
		this.type = type;
		this.moveBy = 10; 
		this.status = "alive";
	}
    
    draw(render, scrennWidth, screenHeight, color){
		
		if(this.posX == 490) {
			this.posX = -10;
		}
		else if(this.posX == -10) {
			this.posX = 490;
		}

		if(this.posY == 490) {
			this.posY = -10;
		}
		else if(this.posY == -10){
			this.posY = 490;
		}

		render.fillStyle = color;
		render.fillRect(
			this.posX, 
			this.posY,
			this.width, 
			this.height
		);
    }
	
    setDied() {
        this.status = "die"; 
    }
    
    setData(render, data, color) {
        render.font = "16px Arial";
        render.fillStyle = color;
        render.fillText(data, this.posX + 15, this.posY + 15);
    }
    
    destroy(render){
      	render.clearRect(
			this.posX,
			this.posY,
			this.height,
			this.width
		);  
    }
    
    move(key, render, scrennWidth, screenHeight, color){       
     
		this.destroy(render);

		if(key == 'w') {
		   this.posY -= this.moveBy
		}
		if(key == 's') { 
		   this.posY += this.moveBy
		}
		if(key == 'a') {
		   this.posX -= this.moveBy
		}
		if(key == "d") { 
		   this.posX += this.moveBy
		}

		this.draw(render, scrennWidth, screenHeight, color)
    } 
}
