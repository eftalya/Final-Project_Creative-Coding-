let figure;
let book_stack;
let doors;
let nazar;
let cabinet;
let rosalia;
let flag; 

function preload() {
  figure = loadImage("amy winehouse doll figure .jpeg")
  book_stack = loadImage("book stack .png")
  doors = loadImage("initial wooden doors .png") //initial page 
  cabinet = loadImage("open wardrobe .jpeg")//this will hold my items
  rosalia = loadImage("rosalia poster.jpg")
  flag = loadImage("turkish flag .jpg")

}


function setup() {
  createCanvas(1000, 1000);


 
}
function draw() {
  background(0);
  image(doors, 0, 0);
  showImage();
}

function showImage() {
  //cabinet of curiosities closed doors 
  if (scene == 0) {
    image(doors, 0, 0);
    
  } else if (scene == 1) {//shows the main interface 
    image(wardrobe, 0, 0);
    }
 

function mousePressed() {//shows the interface
  if (250 < mouseX < 420 && 465 < mouseY < 540) {
    picker = 1;
  }
}}