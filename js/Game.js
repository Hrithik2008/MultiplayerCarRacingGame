class Game {
  constructor() {}
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", (data) => {
      gameState = data.val();
    });
  }
  updateState(state) {
    database.ref("/").update({
      gameState: state,
    });
  }
  start() {
    if (gameState === 0) {
      player = new Player();
      form = new Form();
      form.display();
      player.getCount();
    }
  }
  play(){
    form.hideForm();
    textSize(30);
    text("Game Start",width/2,height/2);
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 130;
      for(var i in allPlayers){
        if(i === player.index){
          fill(255,0,0);
        }else{
          fill(0);
        }
        display_position+= 20;
        textSize(16);
        text(allPlayers[i].name + ": "+allPlayers[i].distance,120,display_position);
      }
      if(keyDown(UP_ARROW)&&player.index !== null){
        player.distance+=50;
        player.update();
      }
    }

  }
}
