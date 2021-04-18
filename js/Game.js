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
      car1 = createSprite(100, 200, 20, 20);
      car2 = createSprite(300, 200, 20, 20);
      car3 = createSprite(500, 200, 20, 20);
      car4 = createSprite(700, 200, 20, 20);
      cars = [car1, car2, car3, car4];
    }
  }
  play() {
    form.hideForm();
    textSize(30);
    text("Game Start", width / 2, height / 2);
    Player.getPlayerInfo();

    if (allPlayers !== undefined) {
      //var display_position = 130;
      var x = 0;
      var y;
      var index = 0;
      for (var i in allPlayers) {
        //console.log(i);
        index++;
        x += 200;
        y = displayHeight - allPlayers[i].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        if (index === player.index) {
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
          cars[index - 1].shapeColor = "red";
        }

        //if(i === "Player"+player.index){
        //fill(255,0,0);
        //}else{
        //  fill(0);
        //}
        //display_position+= 20;
        //textSize(16);
        //text(allPlayers[i].name + ": "+allPlayers[i].distance,120,display_position);
      }
    }
    if (keyDown(UP_ARROW) && player.index !== null) {
      player.distance += 50;
      player.update();
    }
    drawSprites();
  }
}
