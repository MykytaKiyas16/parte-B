function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  background(0);

  fill(229, 43, 18);
    quad(0, 0, 360, 0, 360, 317, 0, 317);

 fill(255, 255, 255);
    quad(373, 0, 800, 0, 800, 318, 373, 318);
    quad(0, 335, 360, 335, 360, 510, 0, 510);  
    quad(372, 335, 800, 335, 800, 510, 372, 510);
    quad(86, 525, 359, 528, 359, 800, 86, 800); 
    quad(369, 770, 607, 770, 607, 800, 369, 800);
    quad(621, 528, 801, 528, 800, 800, 621, 800); 

  // 3º quadrado - Azul a girar
  fill(43, 43, 104);
  translate(0, 757);
  rotate(frameCount * 0.02);
  quad(369, 528, 609, 528, 609, 758, 369, 758);
  pop();

  // 4º quadrado - Amarelo a girar
 fill(255, 221, 4);
  translate(621, 800);
   rotate(frameCount * 0.01);
   quad(0, 525, 77, 525, 77, 800, 0, 800);
   pop();
     
}