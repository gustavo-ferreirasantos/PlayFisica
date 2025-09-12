let x_nuvem = 70, v_nuvem = 0.2, l_nuvem = 100;
let x_plataforma1 = 150, v_plataforma1 = 1;
let x_plataforma2 = 350, v_plataforma2 = 1;
let y_plataforma3 = 250, v_plataforma3 = 1;
let cnv;

function setup() {
  const container = document.querySelector('#animation1');
  cnv = createCanvas(container.offsetWidth, container.offsetHeight);
  cnv.parent(container);
}

function draw() {
  background(50, 150, 255);
  noStroke();

  let largura = width;
  let altura = height;

  // --------- Chão ---------
  fill(46,27,4);
  rect(largura * 0.2875, altura * 0.8667, largura * 0.025, altura * 0.1333);
  fill(125,88,44);
  rect(0, altura * 0.8667, largura * 0.15, altura * 0.1333);
  rect(largura * 0.3125, altura * 0.8667, largura * 0.6875, altura * 0.1333);
  fill(0,100,0);
  rect(largura * 0.28125, altura * 0.8417, largura * 0.03125, altura * 0.0333);
  fill(0,150,0);
  rect(0, altura * 0.8417, largura * 0.15625, altura * 0.0333);
  rect(largura * 0.30625, altura * 0.8417, largura * 0.695, altura * 0.0333);

  // --------- Montanhas ---------
  fill(80);
  triangle(largura*0.6875, altura*0.8417, largura*0.7875, altura*0.5667, largura*0.775, altura*0.8417);
  fill(100);
  triangle(largura*0.5625, altura*0.8417, largura*0.675, altura*0.5083, largura*0.65, altura*0.8417);
  fill(120);
  triangle(largura*0.775, altura*0.8417, largura*0.7875, altura*0.5667, largura*0.9375, altura*0.8417);
  fill(150);
  triangle(largura*0.65, altura*0.8417, largura*0.675, altura*0.5083, largura*0.825, altura*0.8417);
  fill(200);
  quad(largura*0.675, altura*0.5083, largura*0.6375, altura*0.6167, largura*0.6375, altura*0.6167, largura*0.66875, altura*0.575);
  quad(largura*0.788, altura*0.565, largura*0.76875, altura*0.6167, largura*0.78, altura*0.6333, largura*0.7875, altura*0.575);
  fill(255);
  quad(largura*0.675, altura*0.5083, largura*0.66875, altura*0.575, largura*0.7, altura*0.6417, largura*0.70625, altura*0.575);
  quad(largura*0.78, altura*0.6333, largura*0.7875, altura*0.5717, largura*0.81625, altura*0.6417, largura*0.8125, altura*0.6667);

  // --------- Rio ---------
  fill(0,255,150,120);
  rect(largura*0.15125, altura*0.9, largura*0.16125, altura*0.1667);

  // --------- Árvore ---------
  // Caule
  fill(82,56,26);
  rect(largura*0.0625, altura*0.725, largura*0.0125, altura*0.1167);
  rect(largura*0.025, altura*0.725, largura*0.0875, altura*0.05, 0.01*largura);
  fill(50,150,255);
  rect(largura*0.0375, altura*0.7083, largura*0.0625, altura*0.05, 0,0,0.0125*largura,0.0125*largura);

  // Folhas
  fill(0,100,0);
  rect(largura*0.0075, altura*0.6167, largura*0.125, altura*0.1333, 0.0125*largura);
  rect(largura*0.05, altura*0.5833, largura*0.05, altura*0.05, 0.0125*largura);
  fill(0,170,0);
  rect(largura*0.01875, altura*0.6083, largura*0.125, altura*0.1333, 0.0125*largura);
  rect(largura*0.0625, altura*0.575, largura*0.05, altura*0.05, 0.0125*largura);
  fill(0,100,0);
  rect(largura*0.0625, altura*0.65, largura*0.05, altura*0.05, 0.0125*largura);
  fill(0,200,100);
  rect(largura*0.06875, altura*0.6417, largura*0.05, altura*0.05, 0.0125*largura);

  // --------- Pinheiros ---------
  fill(82,56,26);
  rect(largura*0.375, altura*0.7583, largura*0.01875, altura*0.0833);
  rect(largura*0.9125, altura*0.7583, largura*0.01875, altura*0.0833);
  fill(0,120,0);
  triangle(largura*0.34, altura*0.7667, largura*0.384, altura*0.6833, largura*0.43125, altura*0.7667);
  triangle(largura*0.8775, altura*0.7667, largura*0.92125, altura*0.6833, largura*0.96875, altura*0.7667);
  fill(0,100,0);
  triangle(largura*0.34, altura*0.7667, largura*0.384, altura*0.6833, largura*0.36875, altura*0.7667);
  triangle(largura*0.8775, altura*0.7667, largura*0.92125, altura*0.6833, largura*0.90625, altura*0.7667);

  // --------- Nuvens ---------
  fill(150);
  ellipse(x_nuvem-0.0125*largura, altura*0.2083, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.025*largura, altura*0.175, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.05625*largura, altura*0.2, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.3625*largura, altura*0.125, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.4*largura, altura*0.0917, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.43125*largura, altura*0.125, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.7375*largura, altura*0.2917, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.775*largura, altura*0.2583, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.8*largura, altura*0.2917, l_nuvem, altura*0.0833);

  fill(255);
  ellipse(x_nuvem, altura*0.1917, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.0375*largura, altura*0.1667, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.05625*largura, altura*0.1917, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.375*largura, altura*0.1167, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.4125*largura, altura*0.0833, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.44375*largura, altura*0.1167, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.75*largura, altura*0.2833, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.7875*largura, altura*0.25, l_nuvem, altura*0.0833);
  ellipse(x_nuvem+0.8125*largura, altura*0.2833, l_nuvem, altura*0.0833);

  // --------- Plataformas ---------
  fill(125,88,44);
  rect(x_plataforma1, altura*0.75, largura*0.075, altura*0.0417, 0.01*largura);  
  rect(x_plataforma2, altura*0.6667, largura*0.075, altura*0.0417, 0.01*largura);
  rect(largura*0.6875, y_plataforma3, largura*0.075, altura*0.0417, 0.01*largura);
  fill(46,27,4);
  rect(x_plataforma1-0.0125*largura, altura*0.75, largura*0.025, altura*0.0417, 0.01*largura);
  rect(x_plataforma2-0.0125*largura, altura*0.6667, largura*0.025, altura*0.0417, 0.01*largura);
  rect(largura*0.675, y_plataforma3, largura*0.025, altura*0.0417, 0.01*largura);
  fill(0,100,0);
  rect(x_plataforma1-0.01875*largura, altura*0.7333, largura*0.03125, altura*0.0333, 0.01*largura);
  rect(x_plataforma2-0.01875*largura, altura*0.65, largura*0.03125, altura*0.0333, 0.01*largura);
  rect(largura*0.66875, y_plataforma3-0.025*altura, largura*0.03125, altura*0.0333, 0.01*largura);
  fill(0,150,0);
  rect(x_plataforma1+0.00625*largura, altura*0.7333, largura*0.075, altura*0.0333, 0.01*largura);
  rect(x_plataforma2+0.00625*largura, altura*0.65, largura*0.075, altura*0.0333, 0.01*largura);
  rect(largura*0.69375, y_plataforma3-0.025*altura, largura*0.075, altura*0.0333, 0.01*largura);

  // --------- Movimento Nuvens ---------
  x_nuvem += v_nuvem;
  if (x_nuvem > largura - l_nuvem/2 || x_nuvem < -0.25*largura) v_nuvem *= -1;

  // --------- Movimento Plataformas ---------
  x_plataforma1 += v_plataforma1;
  if (x_plataforma1 > largura * 0.3125 || x_plataforma1 < largura * 0.1875) v_plataforma1 *= -1;

  x_plataforma2 += v_plataforma2;
  if (x_plataforma2 > largura * 0.5625 || x_plataforma2 < largura * 0.3625) v_plataforma2 *= -1;

  y_plataforma3 += v_plataforma3;
  if (y_plataforma3 > altura * 0.6 || y_plataforma3 < altura * 0.4167) v_plataforma3 *= -1;
}

// --------- Atualiza o canvas quando a janela muda ---------
function windowResized() {
  const container = document.querySelector('#animation1');
  resizeCanvas(container.offsetWidth, container.offsetHeight);
}
