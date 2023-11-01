// author: Ned - Nadeem Elahi nadeem@webscripts.biz

data.psvFactor = 1;

// Background Image - requires web server
loadBackgroundImage( bgReady );
function bgReady(){ 
	ngl.loadImageTexture(this); 
	drawFrame();
}

// drawFrame(); // un-comment if not loading background image

function drawBackgroundImage(){
	// 2D - 6 verts - requires web server
	ngl.setShaderProgByIndex( 0 );
	ngl.loadAttribute(fsQuad, "fsQuad", 2);
	ngl.loadAttribute(fsTexQuad, "fsTexQuad", 2);
	ngl.draw(0,6);
}

function draw_verts_colours(){
	// 3D - 3 verts
	ngl.setShaderProgByIndex( 1 );
	ngl.loadAttribute(verts, "vert", 3);
	ngl.loadAttribute(colours, "colour", 3);
	data.load_tsrp();
	ngl.draw(0,3);
}

var dim , vertCnt ;
function drawFrame(){

	ngl.clear();

	drawBackgroundImage();
	
	draw_verts_colours();
	
	animateXYrotation();
}

var speed = 100;
function animateXYrotation(){
	data.xAngle++; data.yAngle++;
	if(data.xAngle > 360) data.xAngle = 0;
	if(data.yAngle > 360) data.yAngle = 0;
	//ngl.setShaderProgByIndex( 1 ); // already set to 1 since was set lastly in drawFram()
	data.load_tsrp();

	setTimeout(drawFrame, speed);
}
