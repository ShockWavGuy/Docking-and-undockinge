var backgroundIm, IssIm, spaceCraft1, spaceCraft2, spaceCraft3, spaceCraft4;
var ISS, spaceCraft, hasDocked; 

function preload(){
   backgroundIm = loadImage("Images for Docking/spacebg.jpg");
   IssIm = loadImage("Images for Docking/iss.png");
   spaceCraft1 = loadImage("Images for Docking/spacecraft1.png");
   spaceCraft2 = loadImage("Images for Docking/spacecraft2.png");
   spaceCraft3 = loadImage("Images for Docking/spacecraft3.png");
   spaceCraft4 = loadImage("Images for Docking/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  hasDocked = false;

  ISS = createSprite(400, 200, 50, 50);
  ISS.addImage(IssIm);
  ISS.scale = 0.7;
  
   
  spaceCraft = createSprite(0,340,40,40);
  spaceCraft.addImage(spaceCraft1);
  spaceCraft.scale = (0.15);

  spaceCraft.x = random(1,400);
}

function draw() {
  background(backgroundIm); 
  
  if(!hasDocked){
    console.log(mouseX+", "+mouseY);
    

    if(keyDown("LEFT_ARROW")){
      spaceCraft.addImage(spaceCraft3);
      spaceCraft.x += -2;
    }

    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(spaceCraft4);
      spaceCraft.x += 2;
    }
    
    if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(spaceCraft2)
    }

    if(keyDown("UP_ARROW")){
      spaceCraft.y +=-3;
    }

    if(spaceCraft.y <= (ISS.y+70) && spaceCraft.x <= (ISS.x+140)){
       hasDocked = true;
    }
  }
  if(hasDocked){
    textSize(25);
      fill("white");
      text("Docking Successful!", 200, 300); 
  }
   
  drawSprites();
}