var dog, happyDog, database, foodS, foodStock;
var dogimage, dogimageone;

function preload(){
dogimage = loadImage("dogimage.png");
dogimageone = loadImage("dogimageone.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
dog = createSprite(250, 300, 150, 150);
dog.addImage(dogimage);
dog.scale = 0.2;
foodStock=database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  
 background(46, 139, 87);
 fill("white");
 text("Food remaining:"+foodS, 170,150);
 text("Press Up Arrow To Feed Dog", 130,10,300,20);
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dogimageone);
 }
   drawSprites();
   //add styles here
}
  function readStock(data){
   foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food: x
  })
}





