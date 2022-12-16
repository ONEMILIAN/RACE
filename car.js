class Car{
	constructor(){
		this.pos = {
			x : Math.floor(Math.random()*19)*grid.width,
			y : 0
		}
		this.width = 1*grid.width;
		this.height = 2*grid.height;
		this.color = "#400000";
		this.speed = 1*grid.height;
	}
	outOfScreen(){
		if(this.pos.y > 600){
			this.pos.x = Math.floor(Math.random()*19)*grid.width;
			this.pos.y = Math.floor(Math.random()*2)*grid.height;
		}
	}
	move(){
		this.pos.y += 1*this.speed;
	}
	draw(){
		c.fillStyle = this.color;
		c.fillRect(this.pos.x, this.pos.y, this.width, this.height);
	}
	update(){
		this.draw();
		this.move();
		this.outOfScreen();
	}
}
