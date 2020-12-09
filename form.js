class Form{
    constructor(){
        this.button = createButton("Play");
        this.input = createInput("Name");
        this.grrets = createElement("h3");
    }
    hide(){
        this.grrets.hide();
        this.button.hide();
        this.input.hide();
    }


    display(){
        var title = createElement("h2");
        title.html("The Car Racing Game");
        title.position(130,0);

       
        this.input.position(130,160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{

            
                this.input.hide();
                this.button.hide();
                player.name = this.input.value();

                playerCount += 1;
                player.index = playerCount;
                player.update();
                player.updateCount(playerCount);

                this.grrets.html("Welcome " + player.name);
                this.grrets.position(130,100);
            }
        );

    }
}