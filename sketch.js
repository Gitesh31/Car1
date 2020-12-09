var form ,player, game, database , playerCount ;
var gameState = 0;
var canvas , bgimg;
var allPlayers;
var distance = 0;

function setup(){
   

   database = firebase.database();

   game = new Game();
   game.getState();
   game.start();

}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState == 1){
      clear();
      game.play();
  }
}