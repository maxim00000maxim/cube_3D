let r, g, b,rrr,angleChange = 0

function setup() {
  createCanvas(400, 400, WEBGL);	// include WEBGL for 3D rendering
}

function draw() {
  background(220);

  scale(-1)
  scale(-1)
  rotateX(frameCount*angleChange);
  rotateY(frameCount*angleChange);
   rotateZ(frameCount*angleChange);
  // Coordinates for verteces of the pyramid

  fill( r, g,  b,25);
  box(25)
 
   box(200)
   box(100)
  box(50)
   
}
  


function make() {
  r = etovVodr.value
  g = etovVodg.value
  b =etovVodb.value
  spee()
  
  
}
function randomi() {
 etovVodr.value = round(random(0,255))
  etovVodg.value = round (random(0,255))
  etovVodb.value = round (random(0,255))
  make ();
}
  function rr() {
 etovVodr.value = 255
   etovVodg.value = 0
    etovVodb.value = 0
  make ();
  }
  function gg() {
 etovVodr.value = 0
  etovVodg.value = 255
  etovVodb.value = 0
  make ();
  }
  function bb() {
 etovVodr.value = 0
   etovVodg.value = 0
  etovVodb.value = 255
  make ();
  
  
}
function spee() {
 angleChange =  +etovVodspeed.value/1000
  
  
  
}
