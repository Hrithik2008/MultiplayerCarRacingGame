class Form{
    constructor(){
        this.title = createElement('h2','Multiplayer car racing game');
        this.input = createInput('Name');
        this.button = createButton("PLAY");
        this.greeting = createElement('h4');
        this.reset = createButton("Reset");
    }
    display(){
        this.title.position(displayWidth/2,0);         
        this.input.position(displayWidth/2-40,displayHeight/2-80);        
        this.button.position(displayWidth/2+30,displayHeight/2);  
        this.reset.position(displayWidth-100,20);      

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.rank = 0;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html('Welcome '+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        });

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.updateState(0);
            Player.updateCarsAtEnd(0);
            database.ref("/").update({
                Players : null
            });
        })
    }
    hideForm(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }
}