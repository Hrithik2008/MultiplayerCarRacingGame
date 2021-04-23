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
      car1.addImage("car1", car1_img);
      car2 = createSprite(300, 200, 20, 20);
      car2.addImage("car2", car2_img);
      car3 = createSprite(500, 200, 20, 20);
      car3.addImage("car3", car3_img);
      car4 = createSprite(700, 200, 20, 20);
      car4.addImage("car4", car4_img);
      cars = [car1, car2, car3, car4];
    }
  }
  play() {
    Player.getPlayerInfo();
    player.getCarsAtEnd();
  
    background(ground_img);
    form.hideForm();
    
    textSize(30);
    text("Game Start", width / 2, height / 2);
    
    if (allPlayers !== undefined) {
      //var display_position = 130;
      image(track_img, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
      var x = 200;
      var y;
      var index = 0;
      for (var i in allPlayers) {
        //console.log(i);
        index++;
        x += 225;
        y = displayHeight - allPlayers[i].distance;
        cars[index - 1].x = x;
        cars[index - 1].y = y;
        
        if (index === player.index) {
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y;
          cars[index - 1].shapeColor = "red";
          fill(255, 0, 0);
          ellipse(x, y, 75, 75);
        }

        //display_position+= 20;
        //textSize(16);
        //text(allPlayers[i].name + ": "+allPlayers[i].distance,120,display_position);
      }
    }
    if (keyDown(UP_ARROW) && player.index !== null) {
      player.distance += 50;
      player.update();
    }
    if (player.distance > 3860) {
      gameState = 2;
      //console.log(indexx);
      //indexx++;
      //player.updateRank(indexx);
      player.rank++;
      Player.updateCarsAtEnd(player.rank);
    }

    drawSprites();
  }
  end() {
    background(0);
    console.log("Game has ended ");
    textSize(20);
    fill(255);
    //textAlign(CENTER);
    //text("Game has ended",camera.position.x,camera.position.y);
    //text(`Your rank is ${player.rank}`,camera.position.x,camera.position.y-50);
    console.log(player.name, player.rank);
  }
}
