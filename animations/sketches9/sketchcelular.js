let y_r = 400, y_t1_1 = 500, y_t1_2 = 550, y_t1_3 = 550,
    y_t2_1 = 500, y_t2_2 = 550, y_t2_3 = 550,
    y_t3_1 = 350, y_t3_2 = 400, y_t3_3 = 400;

let y_c1 = 550, y_c2 = 550, y_c3 = 550;

let velocidade = 0, aceleracao = 0.3;
let velocidade2 = 0, aceleracao2 = 0.1;

// Canvas original
let originalWidth = 800;
let originalHeight = 700;

// Novo tamanho
let newWidth = 330;
let newHeight = 377;

// Fatores de escala
let scaleX = newWidth / originalWidth;
let scaleY = newHeight / originalHeight;

function setup() {
  createCanvas(newWidth, newHeight);
}

function draw() {
  background(0, 200, 255);

  fill(255, 255, 0);
  noStroke();
  circle(100*scaleX, 160*scaleY, 115*scaleX);

  stroke(0);
  line(100*scaleX,50*scaleY,120*scaleX,70*scaleY);
  line(120*scaleX,70*scaleY,135*scaleX,50*scaleY);
  line(200*scaleX,155*scaleY,220*scaleX,180*scaleY);
  line(220*scaleX,180*scaleY,240*scaleX,155*scaleY);
  line(400*scaleX,280*scaleY,420*scaleX,300*scaleY);
  line(420*scaleX,300*scaleY,440*scaleX,280*scaleY);
  line(500*scaleX,330*scaleY,520*scaleX,350*scaleY);
  line(520*scaleX,350*scaleY,540*scaleX,330*scaleY);
  line(650*scaleX,200*scaleY,670*scaleX,220*scaleY);
  line(670*scaleX,220*scaleY,690*scaleX,200*scaleY);

  noStroke();
  fill(255,150,0,220);
  quad(0,550*scaleY,0,700*scaleY,400*scaleX,700*scaleY,400*scaleX,550*scaleY);
  fill(0,50,255);
  quad(400*scaleX,550*scaleY,400*scaleX,700*scaleY,800*scaleX,700*scaleY,800*scaleX,550*scaleY);

  fill(150,80,0);
  quad(100*scaleX,425*scaleY,100*scaleX,550*scaleY,150*scaleX,550*scaleY,150*scaleX,425*scaleY);

  fill(0,150,0,200);
  circle(70*scaleX,420*scaleY,70*scaleX);
  circle(125*scaleX,420*scaleY,70*scaleX);
  circle(175*scaleX,420*scaleY,70*scaleX);
  circle(100*scaleX,375*scaleY,70*scaleX);
  circle(150*scaleX,375*scaleY,70*scaleX);

  fill(255,0,0);
  rect(270*scaleX, y_r*scaleY, 50*scaleX, 150*scaleY);
  fill(0,0,255);
  triangle(270*scaleX, y_t1_1*scaleY, 220*scaleX, y_t1_2*scaleY, 270*scaleX, y_t1_3*scaleY);
  triangle(320*scaleX, y_t2_1*scaleY, 320*scaleX, y_t2_2*scaleY, 370*scaleX, y_t2_3*scaleY);
  triangle(295*scaleX, y_t3_1*scaleY, 255*scaleX, y_t3_2*scaleY, 335*scaleX, y_t3_3*scaleY);

  velocidade += aceleracao;
  y_r -= velocidade;
  y_t1_1 -= velocidade;
  y_t1_2 -= velocidade;
  y_t1_3 -= velocidade;
  y_t2_1 -= velocidade;
  y_t2_2 -= velocidade;
  y_t2_3 -= velocidade;
  y_t3_1 -= velocidade;
  y_t3_2 -= velocidade;
  y_t3_3 -= velocidade;

  fill(100,150);
  circle(265*scaleX, y_c1*scaleY, 50*scaleX);
  circle(295*scaleX, y_c2*scaleY, 50*scaleX);
  circle(325*scaleX, y_c3*scaleY, 50*scaleX);

  velocidade2 += aceleracao2;
  y_c1 += velocidade2;
  y_c2 += velocidade2;
  y_c3 += velocidade2;
}
