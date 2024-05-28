function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
}

function draw() {
		background(255);
	const tileCount = 50;
	const tileWidth = width / 40;
	const tileHeight = height / 40;
	for(let j = 0; j < tileCount; j++) {
		for(let i = 0; i < tileCount; i++) {


			const posX = i * tileWidth;
			const posY = j * tileHeight;
			let diameter = dist(mouseX, mouseY, posX, posY);

			diameter = (diameter / 10);
			push()
			translate(posX, posY, diameter * 5);
			noStroke()
			fill(0)
			ellipse(0, 0, diameter, diameter);
			pop()
		}
	}

}