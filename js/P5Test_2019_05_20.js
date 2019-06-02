// Test P5 Function

let canvas_width = 0;
let canvas_height = 0;
let canvas_col =   0 ; 
let Flash_Width  = 5;
const Flash_Height = 30;
let Flash_X ;
let Flash_Array = [];//[{x:0,y:600},{x:100,y:600}];
let Flash_Left_X = (canvas_col , col_Number , Flash_Width)=>{
    let HalfwithFlesh = Math.floor(Flash_Width /2)  ;
    let HalfwithCol = Math.floor(canvas_col /2)  ;
    let ColX = canvas_col  * (col_Number) ;
       return  ColX+HalfwithCol-HalfwithFlesh;
}

Y_Step = 30;

let chanson = {
        name : 'Test' ,
        time_insecond : 180 ,
        notes : [
            {measure : 0, s1 :[1,2,3,4] ,    fl : [1,1,1,1]},
            {measure : 1, s1:[10,11,10,13] , fl : [1,0,1,0]},
            {measure : 2, s1:[13,14,15,16] , fl : [0,1,0,0]},
            {measure : 3, s1:[0,20,40,59] ,  fl : [0,0,0,1]},
            {measure : 4, s1:[0,20,40,59] ,  fl : [1,0,0,0]}
    ]

    }

var mySound;
var button;
var jumpButton;

function preload(){
    soundFormats('mp3', 'ogg');
    mySound = loadSound('/music/01.mp3');
}

function setup(){

    canvas_width = 600; //windowWidth-50;
    canvas_height = 600; //windowHeight-50;
    canvas_col =   canvas_width / 4 ; 

    button = createButton("play");
    button.mousePressed(togglePlay);
    jumpButton = createButton("jump");
    jumpButton.mousePressed(jumpSong);
    pixelDensity(1); 
    CanvasBg = createGraphics(canvas_width,canvas_height);
    //CanvasBg.background(0);

        
  /*  Flash_X = [Flash_Left_X(canvas_col,1,Flash_Width),
        Flash_Left_X(canvas_col,2,Flash_Width),
        Flash_Left_X(canvas_col,3,Flash_Width),
        Flash_Left_X(canvas_col,4,Flash_Width)]; */

                chanson.notes.forEach(function (measure){

            measure.s1.forEach(function( time1 , index ){
            
                if (measure.fl[index]==1){
                    
                    let CId = mySound.addCue(time1,Add_Arrow, index);
                    
                }

            });
        });

       // mySound.setVolume(0.1);
       // mySound.play(); 
        //background(160,130,238);
        createCanvas(canvas_width, canvas_height);

}


function Add_Arrow(colnumber){

 
let new_flash = {

    x: Flash_Left_X(canvas_col,colnumber,Flash_Width) ,
    y: canvas_height - Flash_Height ,

} ;

    Flash_Array.push(new_flash);

}

//----------------------
//----------------------

function Arrow(x,y,length){
    this.x=x;
    this.y=y;
    this.length = length;
   // this.update = function() {
    var angle =   radians(270); //atan2(mouseY-y, mouseX-x);
    push();
    translate(this.x,this.y);
    rotate(angle);
    
    beginShape()
      stroke(3);
      fill(random(100,250));
    vertex(0,-this.length); // 0, -100
    vertex(5*this.length, -this.length); //500, 100
    vertex(5*this.length, -3*this.length); //500 , -300
    vertex(9*this.length, 0); // 900  0
    vertex(5*this.length, 3*this.length); // 500, 300
    vertex(5*this.length, this.length); // 500, 100
    vertex(0,this.length); // 0 , 100
    endShape(CLOSE);


  /*  beginShape()
    stroke(3);
    fill(random(100,250));
  vertex(this.x+0,(this.y-this.length)); // 0, -100
  vertex((5*this.length)+this.x, (this.y-this.length)); //500, 100
  vertex((5*this.length)+this.x, (this.y-3*this.length)); //500 , -300
  vertex((9*this.length)+this.x, 0+this.y); // 900  0
  vertex((5*this.length)+this.x, (3*this.length)+this.y); // 500, 300
  vertex((5*this.length)+this.x, this.length+this.y); // 500, 100
  vertex(0+this.x,this.length+this.y); // 0 , 100
  endShape(CLOSE); */

    pop();
   // }
  }


//---------------------------
//---------------------------




Y_Step  = 1;
function draw(){

    background(160,130,238);
    Canvas_Background();
    //transparent();
    tint(255, 127);
    CanvasBg.clear();
if (Flash_Array.length>0)
    Flash_Array.forEach(function(Flash1 , index, Flash_Array){
        CanvasBg.rect(Flash1.x , Flash1.y , Flash_Height , Flash_Height  );
       Flash1.y -=  Y_Step ;
       if (Flash1.y <0) Flash_Array.splice(index,1);
       console.log(Flash_Array.length);

    });
    
    image(CanvasBg,0,0);
}

function togglePlay() {
    if (!mySound.isPlaying()) {
      mySound.play();
      button.html("pause");
    } else {
      mySound.pause();
      button.html("play");
    }
  }

  function Canvas_Background() {
   fill("#E29397");
   rect(0*canvas_col,0,canvas_col,canvas_height);
   fill("#DA627D");
   rect(1*canvas_col,0,canvas_col,canvas_height);
   fill("#A53860");
   rect(2*canvas_col,0,canvas_col,canvas_height);
   fill("#450920");
   rect(3*canvas_col,0,canvas_col,canvas_height);

   // 
   Arrow(Flash_Left_X(canvas_col,0,Flash_Width),100,Flash_Width);
   Arrow(Flash_Left_X(canvas_col,1,Flash_Width),100,Flash_Width);
   Arrow(Flash_Left_X(canvas_col,2,Flash_Width),100,Flash_Width);
   Arrow(Flash_Left_X(canvas_col,3,Flash_Width),100,Flash_Width);
   
  }
  
  function jumpSong() {
    var len = mySound.duration();
    var j = random(len);
    mySound.jump(j);
  }