// Test P5 Function

let canvas_width = 0;
let canvas_height = 0;
let canvas_col =   0 ; 
let Flash_Width  = 30;
const Flash_Height = 80;
let Flash_X ;
let Flash_Array = [];//[{x:0,y:600},{x:100,y:600}];
let Flash_Left_X = (canvas_col , col_Number , Flash_Width)=>{
    let HalfwithFlesh = Math.floor(Flash_Width /2)  ;
    let HalfwithCol = Math.floor(canvas_col /2)  ;
    let ColX = canvas_col  * (col_Number) ;
       return  ColX+HalfwithCol-HalfwithFlesh;
}

var TargetLeft ;
var TargetUp ;
var TargetDown ;
var TargetRight ;
var Score=0;


var PlayerArrowsGroup      ; // keeps all the player Arrow sprite
var PlayerArrowsUpGroup    ; // keeps all the player Up    Arrow sprite
var PlayerArrowsDownGroup  ; // keeps all the player Down  Arrow sprite
var PlayerArrowsLeftGroup  ; // keeps all the player Left  Arrow sprite
var PlayerArrowsRightGroup ; // keeps all the player Right Arrow  sprite

let chanson = {
        name : 'Test' ,
        time_insecond : 180 ,
        notes : [
            {measure : 0, s1 :[1,2,3,4] ,    fl : [1,2,3,4]},
            {measure : 1, s1:[10,11,10,13] , fl : [2,0,3,0]},
            {measure : 2, s1:[13,14,15,16] , fl : [0,1,0,0]},
            {measure : 3, s1:[0,20,40,59] ,  fl : [0,0,0,4]},
            {measure : 4, s1:[0,20,40,59] ,  fl : [1,0,0,0]}
    ]

    }

var mySound;
var button;
var jumpButton;

function preload(){
    soundFormats('mp3', 'ogg');
    mySound = loadSound(TD_Selected_Song);
    
}

function setup(){

    canvas_width = 600; //windowWidth-50;
    canvas_height = 600; //windowHeight-50;
    canvas_col =   canvas_width / 4 ; 

    button = createButton("play");
    button.mousePressed(togglePlay);
    jumpButton = createButton("jump");
    jumpButton.mousePressed(jumpSong);
    jumpButton.parent('Player_Details_Container');
    button.parent('Player_Details_Container');
    button.class("button");
    jumpButton.class("button");

    pixelDensity(1); 
//    CanvasFg = createGraphics(canvas_width,canvas_height);


                chanson.notes.forEach(function (measure){

            measure.s1.forEach(function( time1 , index ){
            
                if (measure.fl[index] >0){
                    
                    let CId = mySound.addCue(time1,Add_Arrow, measure.fl[index]);
                    
                }

            });
        });
        Canvasbg =  createCanvas(canvas_width, canvas_height);
        Canvasbg.parent("Canvas_Container");
        Canvasbg.style('display', 'block');
        background(160,130,238);


        PlayerArrowsGroup      = new Group(); // keeps all the player flesh sprite
        PlayerArrowsUpGroup    = new Group(); // keeps all the player flesh sprite
        PlayerArrowsDownGroup  = new Group(); // keeps all the player flesh sprite
        PlayerArrowsLeftGroup  = new Group(); // keeps all the player flesh sprite
        PlayerArrowsRightGroup = new Group(); // keeps all the player flesh sprite
        Canvas_Background();
        canvas_BG_Flesh();

}



function Add_Score(spritePlayer, spriteTarget){
  if (!spritePlayer.SWCollide) Score +=  1;
  spritePlayer.SWCollide = true;
  
  document.getElementById('Score').innerHTML=Score ; 
  

}


function Add_Arrow(Direction){

 
let new_flash = {

    x: Flash_Left_X(canvas_col,Direction-1,Flash_Width) ,
    y: canvas_height + Flash_Height ,

} ;

    Flash_Array.push(new_flash);

let Drection_Name ='';
switch (Direction){

  case 1 : Drection_Name ='Left';break;
  case 2 : Drection_Name ='Up';break;
  case 3 : Drection_Name ='Down';break;
  case 4 : Drection_Name ='Right';break;
}

    Arrow(new_flash.x,new_flash.y,Flash_Width,Drection_Name,'Play');

}

//----------------------
//----------------------

function Arrow(x,y,length,Direction,type='bg'){
    this.x=x;
    this.y=y;
    this.length = length;
    let NewArrow = createSprite(this.x, this.y, 64, 64);

    /// ------------ Player Arrows 
    if (type!='bg'){

      var myAnimation = NewArrow.addAnimation('floating', 'img/Player'+Direction+'.png');
      NewArrow.velocity.x = 0;//random(-5, 5);
      NewArrow.velocity.y = -3;
      
      PlayerArrowsGroup.add(NewArrow)  ;
      switch(Direction){
        case 'Up'   :  PlayerArrowsUpGroup.add(NewArrow)   ; break;
        case 'Down' :  PlayerArrowsDownGroup.add(NewArrow)  ; break;
        case 'Left' :  PlayerArrowsLeftGroup.add(NewArrow)  ; break;
        case 'Right':  PlayerArrowsRightGroup.add(NewArrow) ; break;
      }
    }
    /// ------------ Target Arrows 
    else{
      
      var myAnimation = NewArrow.addAnimation('floating', 'img/Target'+Direction+'.png');
      switch(Direction){
        case 'Up'   : TargetUp = NewArrow ; break;
        case 'Down' : TargetDown = NewArrow ; break;
        case 'Left' : TargetLeft = NewArrow ; break;
        case 'Right': TargetRight = NewArrow ; break;
      }

      
    }  

  }


//---------------------------
//---------------------------


function draw(){

    background(255,255,255);
    Canvas_Background();
    //transparent();
    tint(255, 127);
   // CanvasFg.clear();
   Canvasbg.clear();

   PlayerArrowsUpGroup.overlap(   TargetUp    , Add_Score);
   PlayerArrowsDownGroup.overlap( TargetDown  , Add_Score);
   PlayerArrowsLeftGroup.overlap( TargetLeft  , Add_Score);
   PlayerArrowsRightGroup.overlap(TargetRight , Add_Score);



   //----------- Remove the arrows after leaving the canvas
   //----------- Not working yet
   console.log('Arrowa =',PlayerArrowsGroup.length);

    for(var i = 0; i<PlayerArrowsGroup.length; i++) {
      var Arrow1 = PlayerArrowsGroup[i];
      //moving all the ghosts y following a sin function (sinusoid)
      if (Arrow1.position.y< 0) Arrow1.remove();

      //console.log('Arrow1',i,'=',Arrow1.position.y);
    }
  
  drawSprites();

}

function togglePlay() {
    if (!mySound.isPlaying()) {
      mySound.play();
      PlayerArrowsGroup.forEach(function(Arrow,index){Arrow.velocity.y = -3;})
      button.html("pause");
    } else {
      mySound.pause();
      button.html("play");
      //PlayerArrowsGroup.stop();
      PlayerArrowsGroup.forEach(function(Arrow,index){Arrow.velocity.y = 0;})
    }
  }

  function Canvas_Background() {

    /*fill("#E29397");
    rect(0*canvas_col,0,canvas_col,canvas_height);
    fill("#DA627D");
    rect(1*canvas_col,0,canvas_col,canvas_height);
    fill("#A53860");
    rect(2*canvas_col,0,canvas_col,canvas_height);
    fill("#450920");
    rect(3*canvas_col,0,canvas_col,canvas_height);*/
   
    strokeWeight(1);
    drawingContext.setLineDash([5, 15]);
   stroke(120);
   line(1*canvas_col,0,1*canvas_col,canvas_height );
   line(2*canvas_col,0,2*canvas_col,canvas_height );
   line(3*canvas_col,0,3*canvas_col,canvas_height );
  
  }

  function canvas_BG_Flesh(){
    Arrow(Flash_Left_X(canvas_col,0,Flash_Width),100,Flash_Width , 'Left'  ,'bg');
    Arrow(Flash_Left_X(canvas_col,1,Flash_Width),100,Flash_Width , 'Up'    ,'bg');
    Arrow(Flash_Left_X(canvas_col,2,Flash_Width),100,Flash_Width , 'Down'  ,'bg');
    Arrow(Flash_Left_X(canvas_col,3,Flash_Width),100,Flash_Width , 'Right' ,'bg');
  }
  
  function jumpSong() {
    var len = mySound.duration();
    var j = random(len);
    mySound.jump(j);
  }