let gunfightgif;

function preload()
{
    gunfightgif = loadImage('gunfight.gif');
}



function setup() 
{
	createCanvas(700, 700);
}

function draw()
{
    background(255,255,200);
    image(gunfightgif, 0, 0);
}
