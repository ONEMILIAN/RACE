//CANVAS
canvas = document.getElementById("canvas");
c = canvas.getContext("2d");

//POINTS
pointsDoc = document.getElementById("points");
let points = 0;

//CLASS INIT
player = new Player;
car1 = new Car;
car2 = new Car;
car3 = new Car;

//GAME
let game = {
	active : false,
	setActive : (bool)=>{
		game.active = bool;
	},
	update : ()=>{
		c.clearRect(0, 0, canvas.width, canvas.height);
		pointsDoc.innerHTML = points;
		++points;
	},
	reset : ()=>{
		game.update();
		game.setActive(false);
	}
};

//MAIN
(function main(){
	window.setInterval(()=>{
		if(game.active){
			game.update();
			player.update();
			car1.update();
			car2.update();
			car3.update();
		}
	},50)
}());

//CONTROLS
window.addEventListener("keydown", ((e)=>{
	const direction = e.key.replace("Arrow", "");
	player.directionSwitch(direction);
}))
