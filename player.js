class Player{
	constructor(){
		this.pos = {
			x : 450,
			y : 450
		}
		this.width = 50;
		this.height = 100;
		this.color = "#606000";
	}
	draw(){
		c.fillStyle = this.color;
		c.fillRect(this.pos.x, this.pos.y, this.width, this.height);
	}
	directionSwitch(direction){
		switch(direction){
			case "Left":
				this.pos.x += -1*grid.width;
				break;
			case "Right":
				this.pos.x += 1*grid.width;
				break;
		}
	}
	update(){
		this.draw();
	}
}
