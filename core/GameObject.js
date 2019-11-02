class GameObject{
	constructor(width, height, posX, posY, stepSize, color) {
		this.width = width;
		this.height = height;
		this.posX = posX;
		this.posY = posY;
		this.stepSize = stepSize;
		this.color = color;
		this.type = this.constructor.name;
		this.status = GameObjectStatus.alive;
	}
    
    draw(render) {
		if(this.color){
			render.fillStyle = this.color;
			render.fillRect(
				this.posX, 
				this.posY,
				this.width, 
				this.height
			);
		}

		if(this.data){
			render.font = "16px Arial";
			render.fillStyle = this.color;
			render.fillText(this.data, this.posX + 15, this.posY + 15);
		}
	}
	
	destroy(render){
		render.clearRect(
		  this.posX,
		  this.posY,
		  this.height,
		  this.width
	  );  
	}
	  
	collide(game, player, playerCopy, gameObject) {}
    
    setData(render, data) {
        render.font = "16px Arial";
        render.fillStyle = this.color;
		render.fillText(data, this.posX + 15, this.posY + 15);
    }

    move(key, render, screenWidth, screenHeight, color) {       
		
		this.destroy(render);
	
		if(key == 'w') {
		   this.posY -= this.stepSize
		}
		else if(key == 's') { 
		   this.posY += this.stepSize
		}
		else if(key == 'a') {
		   this.posX -= this.stepSize
		}
		else if(key == "d") { 
		   this.posX += this.stepSize
		}

		if(this.posX > screenWidth + this.stepSize) {
			this.posX = -10;
		}
		else if(this.posX < -this.stepSize) {
			this.posX = 490;
		}

		if(this.posY > screenHeight + this.stepSize) {
			this.posY = -10;
		}
		else if(this.posY <  -this.stepSize){
			this.posY = screenHeight -10;
		}

		this.draw(render)
	} 

	update(render) {
		this.draw(render)
	}
}
