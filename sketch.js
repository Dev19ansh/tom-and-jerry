var cat,catImg1,catImg2,catImg3,catImg4,mouse,mouseImg1,mouseImg2,mouseImg4;
var bgImg

function preload() {
    //load the images here
    catImg1 = loadImage("images/cat1.png");
    catImg2 = loadImage("images/cat2.png");
    catImg3 = loadImage("images/cat3.png");
    catImg4 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    
    mouseImg4 = loadImage("images/mouse4.png");
    bgImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,600,40,70);
    cat.addImage(catImg1);
    cat.scale=0.2;

    mouse=createSprite(200,600,40,70);
   // mouse.addImage(mouseImg4);
    
    //mouse.addAnimation("m",mouseImg2);
    mouse.addImage(mouseImg1);
    mouse.scale=0.2;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    
    if( cat.x - mouse.x < cat.width/2 + mouse.width/2
        && mouse.x - cat.x < cat.width/2 + mouse.width/2
        && cat.y - mouse.y < cat.height/2 + mouse.height/2
        && mouse.y - cat.y < cat.height/2 + mouse.height/2){
            
            cat.addImage(catImg4);
            mouse.addImage(mouseImg4);
            mouse.changeImage(mouseImg4);
            cat.changeImage(catImg4);
        }
    else{
        cat.addImage(catImg1);
        mouse.addImage(mouseImg1);
    }    
    keyPressed();
    drawSprites();
}


function keyPressed(){

    if(keyDown("left")){
        cat.addImage(catImg2);
        cat.changeImage(catImg2);
        cat.x=cat.x-5;
        
        mouse.changeAnimation("m",mouseImg2);
    }
  //For moving and changing animation write code here


}
