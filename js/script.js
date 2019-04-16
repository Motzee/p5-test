/* preload elements to avoid delay at the beginning of display
function preload() {
 */

let canvas_width ;
let canvas_height ;
let canvas_col ; 
const arrow_width  = 50;
const arrow_height = 50;
let array_X ;

let arrow_corner_X = function(canvas_col , col_Number , arrow_width){
    let with1 = Math.floor(arrow_width /2)  ;
    let ColX = canvas_col * (col_Number-1) + with1 ;
    return  ColX+with1;
};

function setup() {
    canvas_width = windowWidth;
    canvas_height = windowHeight;
    canvas_col = canvas_width / 4 ; 
    
    //make a black surface of 800px by 400px
    createCanvas(canvas_width, canvas_height);
    background(0,0,0);
   
    
    //create a small square (50 by 50) with coords x = 400, y = 200
    /*arrowLeft = rect(windowHeight/3, windowHeight - 50, 50, 50);
    arrowLeft = rect(windowHeight/3 + 100, windowHeight - 50, 50, 50);
    arrowLeft = rect(windowHeight/3 + 200, windowHeight - 50, 50, 50);
    arrowLeft = rect(windowHeight/3 + 300, windowHeight - 50, 50, 50);*/
    array_X = [arrow_corner_X(canvas_col,1,arrow_width),arrow_corner_X(canvas_col,2,arrow_width),arrow_corner_X(canvas_col,3,arrow_width),arrow_corner_X(canvas_col,4,arrow_width)];
    
    console.log(array_X);
    
    array_X.forEach((X1 , index)=>{
        rect(X1 , arrow_height , arrow_height , arrow_height  );

    });
}

function draw() {
    
    array_X.forEach((X1 , index)=>{
        rect(X1 , canvas_height - arrow_height , arrow_height , arrow_height  );

    });
    
    
}