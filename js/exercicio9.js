let   y_r = 400,y_t1_1 = 500,y_t1_2 = 550,y_t1_3 = 550,y_t2_1 = 500,y_t2_2 = 550,y_t2_3 = 550,y_t3_1 = 350,y_t3_2 = 400,y_t3_3 = 400;
let y_c1=550,y_c2=550,y_c3=550;
let velocidade=0, aceleracao=0.3;
let velocidade2=0, aceleracao2=0.1;
function setup() {
  let cnv = createCanvas(800,700);
  cnv.parent(document.querySelector('#animation9'));
}

function draw() {
  background(0,200,255);
  
  fill(255,255,0);
  noStroke();
  circle(100,160,115);
  
  stroke(0);
  line(100,50,120,70);
  line(120,70,135,50);
  line(200,155,220,180);
  line(220,180,240,155);
  line(400,280,420,300);
  line(420,300,440,280);
  line(500,330,520,350);
  line(520,350,540,330);
  line(650,200,670,220);
  line(670,220,690,200);
  
  noStroke();
  fill (255,150,0,220);
  quad (0,550,0,700,400,700,400,550);
  fill (0,50,255);
  quad (400,550,400,700,800,700,800,550);
  
  fill(150,80,0);
  quad (100,425,100,550,150,550,150,425);
  
  fill(0,150,0,200);
  circle (70,420,70);
  circle (125,420,70);
  circle (175,420,70);
  circle (100,375,70);
  circle (150,375,70);
  
  fill (255,0,0);
  rect (270,y_r,50,150);
  fill (0,0,255);
  triangle (270,y_t1_1,220,y_t1_2,270,y_t1_3);
  triangle (320,y_t2_1,320,y_t2_2,370,y_t2_3);
  triangle (295,y_t3_1,255,y_t3_2,335,y_t3_3);
  velocidade = velocidade + aceleracao;
  y_r = y_r - velocidade;
  y_t1_1 = y_t1_1 - velocidade;
  y_t1_2 = y_t1_2 - velocidade;
  y_t1_3 = y_t1_3 - velocidade;
  y_t2_1 = y_t2_1 - velocidade;
  y_t2_2 = y_t2_2 - velocidade;
  y_t2_3 = y_t2_3 - velocidade;
  y_t3_1 = y_t3_1 - velocidade;
  y_t3_2 = y_t3_2 - velocidade;
  y_t3_3 = y_t3_3 - velocidade;
  



  fill(100,150);
  circle (265,y_c1,50);
  circle (295,y_c2,50);
  circle (325,y_c3,50);
  velocidade2 = velocidade2 + aceleracao2;
  y_c1 = y_c1 + velocidade2;
  y_c2 = y_c2 + velocidade2;
  y_c3 = y_c3 + velocidade2;


  function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 5, { delay: 1 });
  }
}
}