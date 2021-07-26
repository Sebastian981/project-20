var bg;
var cat,catImg1,catImg2;
var mouse,mouseImg1,mouseImg2;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(900,700);
mouse=createSprite(100,700);
cat.addAnimation("cat",catImg1);
mouse.addAnimation("mouse",mouseImg1);
cat.scale=0.3;
mouse.scale=0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) { 
        cat.velocityX=0; 
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2; 
        cat.changeAnimation("catLastImage"); 
        mouse.addAnimation("mouseLastImage", mouseImg3); 
        mouse.scale=0.15; 
        mouse.changeAnimation("jerryLastImage");
    
}
drawSprites();
}

function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseteasing",mouseImg2);
    mouse.changeAnimation("mouseteasing");
    mouse.frameDelay= 25;
    cat.addAnimation("catrunning",catImg2);
    cat.changeAnimation("catrunning");
    cat.velocityX=-3;
}

}
