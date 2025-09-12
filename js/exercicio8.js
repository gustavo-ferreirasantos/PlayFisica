let larguradatela = 800;
let x_nuvem = 70, v_nuvem = 0.2,l_nuvem=100;
let x_plataforma1=150,v_plataforma1=1;
let x_plataforma2=350,v_plataforma2=1;
let y_plataforma3=250,v_plataforma3=1;

function setup() {
  let cnv = createCanvas(larguradatela,600);
  cnv.parent(document.querySelector('#animation1'));
}

function draw() {
  background(50,150,255);
  noStroke();
  
  //Chão
  fill(46,27,4);
  rect (230,520,20,80);
  fill(125, 88, 44);
  rect (0,520,120,80);
  rect (250,520,550,80);
  fill (0,100,0);
  rect (225,505,25,20,5);
  fill(0,150,0);
  rect (0,505,125,20,5);
  rect (245,505,555,20,5);
  
  //Montanhas
  fill(80);
  triangle (550,505,630,340,620,505);
  fill(100);
  triangle (450,505,540,305,520,505);
  fill(120);
  triangle (620,505,630,340,750,505);
  fill(150);
  triangle (520,505,540,305,660,505);
  fill (200);
  quad (540,305,510,370,510,370,535,345);
  quad (631,339,615,370,628,380,630,345);
  fill (255);
  quad (540,305,535,345,560,370,565,345);
  quad (628,380,630,343,653,370,650,400);
  
  //Rio
  fill(0,255,150,120);
  rect (121,540,129,100)
  
  //Caule da Árvore
  fill (82, 56, 26);
  rect (50,435,10,70);
  rect (20,435,70,30,10);
  fill (50,150,255)
  rect (30,425,50,30,0,0,10,10);
  
  //Folhas escuras da árvore
  fill (0,100,0);
  rect (6,370,100,80,10);
  rect (40,350,40,30,10);
  
  //Folhas claras da Árvore
  fill (0,170,0);
  rect (15,365,100,80,10);
  rect (50,345,40,30,10);
  
  //Folhas escuras e claras da parte da frente
  fill (0,100,0);
  rect (50,390,40,30,10);
  fill (0,200,100);
  rect (55,385,40,30,10);
  
  //Pinheiros
  fill (82, 56, 26);
  rect (300,455,15,50);
  rect (730,455,15,50);
  fill (0,120,0);
  triangle (272,460,307,410,345,460);
  triangle (702,460,737,410,775,460);
  fill (0,100,0);
  triangle (272,460,307,410,295,460);
  triangle (702,460,737,410,725,460);
  fill (0,120,0);
  triangle (272,435,307,385,345,435);
  triangle (702,435,737,385,775,435);
  fill (0,100,0);
  triangle (272,435,307,385,295,435);
  triangle (702,435,737,385,725,435);
  
  //Nuvens escuras
  fill (150);
  ellipse (x_nuvem-10,125,l_nuvem,50);
  ellipse (x_nuvem+20,105,l_nuvem,50);
  ellipse (x_nuvem+45,120,l_nuvem,50);
  ellipse (x_nuvem+290,75,l_nuvem,50);
  ellipse (x_nuvem+320,55,l_nuvem,50);
  ellipse (x_nuvem+345,75,l_nuvem,50);
  ellipse (x_nuvem+590,175,l_nuvem,50);
  ellipse (x_nuvem+620,155,l_nuvem,50);
  ellipse (x_nuvem+640,175,l_nuvem,50);
  
  //Nuvens Claras
  fill (255,255,255);
  ellipse (x_nuvem,115,l_nuvem,50);
  ellipse (x_nuvem+30,100,l_nuvem,50);
  ellipse (x_nuvem+55,115,l_nuvem,50);
  ellipse (x_nuvem+300,70,l_nuvem,50);
  ellipse (x_nuvem+330,50,l_nuvem,50);
  ellipse (x_nuvem+355,70,l_nuvem,50);
  ellipse (x_nuvem+600,170,l_nuvem,50);
  ellipse (x_nuvem+630,150,l_nuvem,50);
  ellipse (x_nuvem+650,170,l_nuvem,50);
  
  //Plataformas
  fill(125, 88, 44);
  rect (x_plataforma1,450,60,25,5);  
  rect (x_plataforma2,400,60,25,5);
  rect (550,y_plataforma3,60,25,5);
  fill(46,27,4);
  rect (x_plataforma1-10,450,20,25,5);
  rect (x_plataforma2-10,400,20,25,5);
  rect (540,y_plataforma3,20,25,5);
  fill(0,100,0);
  rect (x_plataforma1-15,440,25,20,5);
  rect (x_plataforma2-15,390,25,20,5);
  rect (535,y_plataforma3-15,25,20,5);
  fill(0,150,0);
  rect (x_plataforma1+5,440,60,20,5);
  rect (x_plataforma2+5,390,60,20,5);
  rect (555,y_plataforma3-15,60,20,5);
  
  //Movimento das Nuvens
  x_nuvem = x_nuvem + v_nuvem;
  if (x_nuvem>larguradatela - l_nuvem/2){
    v_nuvem = v_nuvem *-1;
  }
  if (x_nuvem < -200){
     v_nuvem = v_nuvem *-1;
  }
  
  //Movimento das Plataformas
  x_plataforma1 = x_plataforma1 + v_plataforma1;
  if (x_plataforma1 > 250){
    v_plataforma1 = v_plataforma1 *-1;
  }
  if (x_plataforma1 < 150){
    v_plataforma1 = v_plataforma1 *-1;
  }
  
  x_plataforma2 = x_plataforma2 + v_plataforma2;
  if (x_plataforma2 > 450){
    v_plataforma2 = v_plataforma2 *-1;
  }
  if (x_plataforma2 < 290){
    v_plataforma2 = v_plataforma2 *-1;
  }
  
  y_plataforma3 = y_plataforma3 + v_plataforma3;
  if (y_plataforma3 > 360){
    v_plataforma3 = v_plataforma3 *-1;
  }
  if (y_plataforma3 < 250){
    v_plataforma3 = v_plataforma3 *-1;
  }
  
}