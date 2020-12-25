var dog,  database, foodS, foodStock, dogImg1,dogImg2,readStock;

function preload()
{

dogImg1=loadImage("images/dogImg.png");
dogImg2=loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);

   dog=createSprite(250,250,50,50);
   dog.addImage("doggy",dogImg1);
   dog.scale=0.3
}


function draw() {  

  drawSprites();
  background(46, 139, 87)

  if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage("dogy",dogImg2);

  function readStock(data){

    foodS=data.val();
  }

  function writeStock(x){

    if (x<=0){
     x=0;
    }
    else{

      x=x-1;
    }


    database.ref('/').update({
    Food:x

    })
  }


drawSprites();
  }

textSize(15);
Fill("black");
text("press Up arrow to feed Drago Milk!",100,100);
}



