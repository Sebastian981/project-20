var bgImg;
var cat,catImg1,catImg2;
var mouse,mouseImg1,mouseImg2;
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(800,600);
mouse=createSprite(250,600);
cat.addAnimation("cat",catImg1);
mouse.addAnimation("mouse",mouseImg1);
cat.scale=0.4;
mouse.scale=0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x <(cat.width - mouse.width)/2){
 cat.changeAniamtion("cat");
 mouse.changeAniamtion("mouse");
 cat.velocityX=0;
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAniamtion("mouseTeasing");
    mouse.frameDelay= 25;
    cat.addAnimation("catRunning",catImg2);
    cat.changeAniamtion("catRunning");
    cat.velocityX=-3;
}

}
