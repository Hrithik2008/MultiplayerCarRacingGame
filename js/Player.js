class Player {
  constructor() {
    this.name = null;
    this.distance = 0;
    this.index = null;
    this.rank = null;
  }
  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    });
  }
  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
  }
  update() {
    //this.index++;
    var playerIndex = "Players/Player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance
    });
  }
  getCarsAtEnd(){
    database.ref("CarsAtEnd").on("value",(data)=>{
        this.rank = data.val();
    });
  }
  static updateCarsAtEnd(rank){
    database.ref("/").update({
        CarsAtEnd : rank
    });
  }
  static getPlayerInfo() {
    var playerInfoRef = database.ref("Players");
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    });
  }
}
