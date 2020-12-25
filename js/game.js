


class Game {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gamestate');
      gameStateRef.on("value",function(data){
         gamestate = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gamestate: state
      });
    }
  
    start(){
      if(gamestate === 0){
        player = new Player();
        player.getCount();
        form = new Form()
        form.display();
      }
    }

play(){
form.hide();
textSize(30);
text("Game Start",350,100);
Player.getplayerinfo();
if(allPlayers!==undefined){

var displayPosition=130;
for(var plr in allPlayers){
 
  if(plr==="player"+player.index){
   fill("red");
    

  }
 else{

  fill("black"); 
 }
 
 displayPosition+=20
 textSize(15) 
text(allPlayers[plr].name+": "+allPlayers[plr].distance,330,displayPosition)

  }
  if(keyIsDown(UP_ARROW)&& player.index!==null){
    player.distance+=50;
    player.update();
}









}
  

}


  }