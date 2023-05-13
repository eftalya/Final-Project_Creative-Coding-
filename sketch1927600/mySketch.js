


let click = 0;




let song;
let font;
let nazar;
let flag;
let cabinet;
let rosalia;
let book_stack;
let figure;

//enlarged items 
let nazarPop;
let rosaliaPop;
let book_stackPop;
let flagPop;
let figurePop;

//mouse hover effect
let mousehoverFlag = false;
let mousehoverRosalia = false;
let mousehoverNazar = false;
let mousehoverBook = false;
let mousehoverFigure = false;


//scope of the mouse movement 
let mouseDistRosalia;
let mouseDistNazar;
let mouseDistFlag;
let mouseDistBook;
let mouseDistFigure;


//clicked events 
let rosaliaClicked = false;
let nazarClicked = false;
let flagClicked = false;
let bookClicked = false;
let figureClicked = false;






//load my images and their enlarged versions for mouse hover 
function preload() {
	//my cover page and cabinet to hold items 
  closeddoors = loadImage("wardrobe cover.png") //initial page 
  cabinet = loadImage("opendoors.png")//this will hold my items
	
	
	//rosalia poster
  rosalia = loadImage("rosalia poster.jpg")
	rosaliaPop = loadImage("rosalia poster.jpg")
	
	//turkish flag
  flag = loadImage("flag.png")
	flagPop = loadImage("flag.png")

	//nazar 
	nazar = loadImage("nazaruse.png") 
	nazarPop = loadImage("nazaruse.png") 
	
	//fav book
	book_stack = loadImage("book stack .png")
	book_stackPop = loadImage("book stack .png")
	
	//doll figure 
  figure = loadImage("figure.png")
	figurePop = loadImage("figure.png")

	
	font = loadFont("TokyoGeishaDEMO-Regular.otf");
	
	song = loadSound("di mi nombre.mp3")
	soundFormats("mp3");

}


function setup() {
  createCanvas(1000, 1000);
	rosaliaPop.resize(130, 180);
	nazarPop.resize(120, 120);
	book_stackPop.resize(200, 220);
	flagPop.resize(130, 150);
	figurePop.resize(130, 200);

	textFont(font);
  

}
function draw() {
  background(0);
  showImage();
	if (rosaliaClicked == true){
		playRosalia();}
	
}


function showImage() {
  //cabinet of curiosities closed doors 
  if (click == 0) {
    image(closeddoors, 0, 0);
		closeddoors.resize(600, 700);
    
  } else if (click == 1) {//shows the main interface 
    background(0);
		image(cabinet, 0, 0);
		cabinet.resize(600,600);
		
		//book 
		image(book_stack, 150, 180);
		book_stack.resize(140, 170);
		mouseDistBook = dist(190, 210, mouseX, mouseY); 
		if (mouseDistBook < 100) {
			mousehoverBook = true;
		}
		else {
			mousehoverBook = false;
		}
		
		if (mousehoverBook == true){
			image(book_stackPop, 150, 150);
			
    }else{
			image(book_stack, 150, 180);
		}
		
		if (bookClicked == true) {
			showTextBook();
		}
		
		
		//nazar 
		image(nazar, 350, 400);
		nazar.resize(100, 100);
		mouseDistNazar = dist(425, 430, mouseX, mouseY); 
		if (mouseDistNazar < 70) {
			mousehoverNazar = true;
		}
		else {
			mousehoverNazar = false;
		}
		
		if (mousehoverNazar == true){
			image(nazarPop, 340, 390);
			
    }else{
			image(nazar, 350, 400);
		}
		
		if (nazarClicked == true) {
			showTextNazar();
		}
		
		
		
		//rosalia 
		
		image(rosalia, 200, 350);
		rosalia.resize(110, 150);
		mouseDistRosalia = dist(225, 430, mouseX, mouseY);
		if (mouseDistRosalia < 70) {
			mousehoverRosalia = true;
		}
		else {
			mousehoverRosalia = false;
		}
		
		if (mousehoverRosalia == true){
			image(rosaliaPop, 180, 350);
    }else{
			image(rosalia, 200, 350);
		}
		
		if (rosaliaClicked == true) {
			playRosalia();
		}

			//flag 
		image(flag, 350, 250);
		flag.resize(100, 100);
		mouseDistFlag = dist(380, 270, mouseX, mouseY); 
		if (mouseDistFlag < 100) {
			mousehoverFlag = true;
		}
		else {
			mousehoverFlag = false;
		}
		
		if (mousehoverFlag == true){
			image(flagPop, 330, 240);
			
    }else{
			image(flag, 350, 250);
		}
		
		if (flagClicked == true) {
			showTextFlag();
		}
		
			//doll figure 
		image(figure, 260, 100);
		figure.resize(100, 140);
		mouseDistFigure = dist(270, 120, mouseX, mouseY); 
		if (mouseDistFigure < 100) {
			mousehoverFigure = true;
		}
		else {
			mousehoverFigure = false;
		}
		
		if (mousehoverFigure == true){
			image(figurePop, 250, 90);
			
    }else{
			image(figure, 260, 100);
		}
		
		if (figureClicked == true) {
			showTextFigure();
		}
		
		
		
	}
}

	function showTextNazar(){
	fill(0);
	stroke("#80FAF3");
	rect(595, 100, 1000, 300);
	strokeWeight(10);
	
	fill(255);
	strokeWeight(3);
	textSize(40);
	text("nazar", 650, 150);
	textSize(13);
	noStroke();
	text("It is commonly believed that the evil eye can\nbe given in the guise of a compliment,signifying\n its connection to the destructive power of envy\n(for one's wealth, beauty etc.). Amulets\nsuch as the nazar are used in accordance\nwith common sayings such as an eye for an eye,\nwhere another eye can be used\nto protect the recipient of the malefic gaze.", 600, 200);

	}

function playRosalia(){
	song.play();
  
}
function showTextBook(){
	fill(0);
	stroke("#E0C71F");
	rect(595, 100, 1000, 300);
	strokeWeight(10);
	
	fill(255);
	strokeWeight(3);
	textSize(20);
	text("The Passion According to G.H.", 610, 150);
	textSize(13);
	noStroke();
	text("this is my favorite book of all time,\nthese are the first few lines:\n“I’m searching, I’m searching. I’m trying to\nunderstand. Trying to give what I’ve lived to\n somebody else and I don’t know to whom,\nbut I don’t want to keep what I lived.\nI don’t know what to do with what I lived,\nI’m afraid of that profound disorder.”", 600, 200);

	}

	function showTextFlag(){
	fill(0);
	stroke("#FF161B");
	rect(595, 100, 1000, 300);
	strokeWeight(10);
	
	fill(255);
	strokeWeight(3);
	textSize(20);
	text("The Turkish Flag", 610, 150);
	textSize(13);
	noStroke();
	text("this is my country's flag. This is an item\nthat I must have in every room\nthat I have lived in.", 600, 200);

	

	}
function showTextFigure(){
	fill(0);
	stroke("#FA72F0");
	rect(595, 100, 1000, 300);
	strokeWeight(10);
	
	fill(255);
	strokeWeight(3);
	textSize(29);
	text("Amy Winehouse Figure", 610, 150);
	textSize(13);
	noStroke();
	text("This doll figure is one of my most cherished items,\nI bought a version of this doll in Madrid\nwhen I was doing study abroad in Spain.\nShe is one of my favorite artists of all time", 600, 200);

	}
	
function mouseClicked() {//shows the interface
  if(click == 0){  //when bookshelf closed
		click = 1;
	} else if (click ==1){//when bookshelf opened
		
		
		//when hover on rosalia
		if (mousehoverRosalia == true) 
		{
			rosaliaClicked = true
			if (rosaliaClicked == true){
			nazarClicked = false;
			bookClicked = false;
			flagClicked = false;}
		}
			
		
		if (mousehoverNazar == true) 
		{
			nazarClicked = true 
			if (nazarClicked == true){
			rosaliaClicked = false;
			bookClicked = false;
			flagClicked = false;
			figureClicked = false;}
		}
		
		if (mousehoverBook == true) 
		{
			bookClicked = true 
			if (bookClicked == true){
			rosaliaClicked = false;
			nazarClicked = false;
			flagClicked = false;
			figureClicked = false;}
			}
		
		if (mousehoverFlag == true)
		{
			flagClicked = true 
			if (flagClicked == true){
			rosaliaClicked = false;
			bookClicked = false;
			nazarClicked = false;
			figureClicked = false;}
	}
			
		if (mousehoverFigure == true)
		{
			figureClicked = true 
			if (figureClicked == true){
			rosaliaClicked = false;
			bookClicked = false;
			nazarClicked = false;
			flagClicked = false;
			}
	}
		}
		}
	
