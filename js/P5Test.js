// Test P5 Function

let canvas_width = 0;
let canvas_height = 0;
let canvas_col =   0 ; 
let Flash_Width  = 30;
const Flash_Height = 30;
let Flash_X ;
let Flash_Left_X = (canvas_col , col_Number , Flash_Width)=>{
    let with1 = Math.floor(Flash_Width /2)  ;
    let ColX = canvas_col  * (col_Number-1) + with1 ;
   

    return  ColX+with1;
}
//console.log(canvas_col);
//console.log(Flash_X);

function setup(){

    canvas_width = windowWidth-50;
    canvas_height = windowHeight-50;
    canvas_col =   canvas_width / 4 ; 

    createCanvas(canvas_width, canvas_height);
    background(160,130,238);
    Flash_X = [Flash_Left_X(canvas_col,1,Flash_Width),
        Flash_Left_X(canvas_col,2,Flash_Width),
        Flash_Left_X(canvas_col,3,Flash_Width),
        Flash_Left_X(canvas_col,4,Flash_Width)];
}





function draw(){
    
    Flash_X.forEach((X1 , index)=>{
        rect(X1 , canvas_height - Flash_Height , Flash_Height , Flash_Height  );

    });

}