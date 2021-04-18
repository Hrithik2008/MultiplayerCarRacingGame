class Form{
    constructor(){
        this.title = createElement('h2','Multiplayer car racing game');
        this.input = createInput('Name');
        this.button = createButton("PLAY");
        this.greeting = createElement('h4');
    }
    display(){
        this.title.position(displayWidth/2,0);         
        this.input.position(displayWidth/2-40,displayHeight/2-80);        
        this.button.position(displayWidth/2+30,displayHeight/2);        

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html('Welcome '+player.name);
            this.greeting.position(displayWidth/2-70,displayHeight/4);
        });
    }
    hideForm(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }
}