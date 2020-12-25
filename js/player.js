class Player {
    constructor(){
this.index=null;
this.distance=0;
this.name=null;
        
    }
  
    getCount(){
      var playerCountRef = database.ref('playercount');
      playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playercount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + playerCount;
      database.ref(playerIndex).set({
       name:this.name,
        distance:this.distance
      });
    }

static getplayerinfo(){
var playerInfoRef=database.ref('players');
playerInfoRef.on("value",(data)=>{

allPlayers=data.val();

});

}
    
  }