var player,ground,titleImg;
var imageTitle;
var playButton;

var START=0;
var PLAY=1;
var END=2;

var gameState=START;

var menu;

function preload(){
    titleImg=loadImage("title.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight-150)
    player=createSprite(200,displayHeight-300,40,50);
    player.shapeColor="red";

    ground=createSprite(0,displayHeight-210,displayWidth*5,140);
    ground.velocityX=-20;
    playButton=createSprite((displayWidth/2)-5,(displayHeight/2)+20);

    menu=new Menu();
}

function draw(){
    background(0,190,235);

    if(gameState===START){
        menu.display();

        playButton.shapeColor="blue";

        player.visible=false;
        ground.visible=false;

        if(mousePressedOver(playButton)){
            gameState=PLAY;
        }
        
    }
    
    if(gameState===PLAY){
        
        if(keyDown("SPACE")&&player.y>displayHeight-315){
            player.velocityY=-15;
        }

        //gravity code

        imageTitle.visible=false;
        playButton.visible=false;

        player.visible=true;
        ground.visible=true;

        player.velocityY=player.velocityY+1;

        player.collide(ground);

        if(ground.x<700){
            ground.x=ground.width/2;
        }

    }

    drawSprites();

}