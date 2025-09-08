let posX, posY;
let velX, velY;
let diam = 50;

function setup() {
  let cnv = createCanvas(800, 400);
  cnv.parent(document.querySelector('#animation1'));
  posX = 0;         // Posição inicial X
  posY = height/2;  // Posição inicial Y
  velX = 10;        // Velocidade X (pixels por frame)
  velY = 0;         // Velocidade Y (pode colocar != 0 para diagonal)
}

function draw() {
  background(220);

  // Atualiza posição
  posX += velX;
  posY += velY;

  // Verifica limites X
  if (posX + diam/2 > width || posX - diam/2 < 0) {
    velX *= -1; // Inverte direção X
  }

  // Verifica limites Y (para movimento diagonal)
  if (posY + diam/2 > height || posY - diam/2 < 0) {
    velY *= -1; // Inverte direção Y
  }

  // Desenha a bola
  fill(255, 204, 0);
  ellipse(posX, posY, diam);

  // Mostra posição (opcional)
  fill(0);
  textSize(16);
  text("x: " + nf(posX,1,2) + "  y: " + nf(posY,1,2), 10, 20);
}
