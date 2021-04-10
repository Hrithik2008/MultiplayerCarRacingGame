class Form{
    constructor(){
        this.title = createElement('h2','Multiplayer car racing game');
        this.input = createInput('Name');
        this.button = createButton("PLAY");
        this.greeting = createElement('h4');
    }
    display(){
        this.title.position(width/2,40);         
        this.input.position(width/2,height/2);        
        this.button.position(width/2,height/2-40);        

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount++;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html('Welcome '+player.name);
            this.greeting.position(width/2,height/2);
        });
    }
    hideForm(){
        this.input.hide();
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }
}