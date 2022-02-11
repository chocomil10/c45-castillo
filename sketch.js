/*
escape del castillo
es un juego multijugador de 2 jugadores,
 que iran saltando diferente obstaculos,
 en caso de caer fuera de las plataformas estaria comenzado el juego,
se moveran de izquierda a derechea y hacia arriba con las teclas de direccion
el segundo jugador se movera con las letras de direccion A, W, D
*/
var fondo;
function preload() {
 fondo = loadImage("castillo 2.png"); 
 //fondo.scale = 0.05;
}

function setup() {
  canvas = createCanvas(888, 600);
  
  
}

function draw() {
  background(51);
  image(fondo,0,0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
