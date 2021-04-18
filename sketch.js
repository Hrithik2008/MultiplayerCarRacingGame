var database;
var form, player, game;
var gameState = 0;
var playerCount;
var allPlayers;
var car1, car2, car3, car4, cars;

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.start();
  game.getState();
}

function draw() {
  background("white");
  //player.update();
  if (playerCount === 4) {
    game.updateState(1);
  }
  if (gameState === 1) {
    game.play();
  }
}
