
function setup() {
	createCanvas( windowWidth, windowHeight ); 
	background(0); 
	strokeWeight(1)
	stroke("white"); 
}


let steps = 50; 
let x=[1]; 
let min = 1.0001; 
let max = 1.2; 
let count = min; 
let increasing = true; 

function createCounter(min, max) {

    if (increasing) {
      count+=0.0004; 
      if (count >= max) {
        increasing = false; 
      }
    } else {
      count-=0.0005; 
      if (count <= min) {
        increasing = true; 
      }
    }
    return count;
}

function draw() {
	background("black"); 
	let factor = createCounter(min,max); 
	

	for(let i=1; i<steps/2; i++){
		x[i] = x[i-1]*factor;
	}
	
	let x_coordinates = []; 
	x.forEach((element) => x_coordinates.push(map(element,x[0],x[steps/2-1],width/2,0.1)));
	
	for (let i=0 ; i < x_coordinates.length; i++){
		line(x_coordinates[i],0,width/2-[...x_coordinates].reverse()[i],height/2); 
		line(x_coordinates[i],height,width/2-[...x_coordinates].reverse()[i],height/2);
		line(width-[...x_coordinates].reverse()[i],0,x_coordinates[i]+width/2,height/2);
		line(width-[...x_coordinates].reverse()[i],height,x_coordinates[i]+width/2,height/2);
	}
}

