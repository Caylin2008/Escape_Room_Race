class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      boy=createSprite(100,350,20,20);
      girl=createSprite(100,350,20,20);
      players=[boy,girl];


    }
    play(){
      form.hide();
      Player.getPlayerInfo();
    //player.getCarsAtEnd();
w1=createSprite(100,400,200,20);
w2=createSprite(100,300,200,20);
w3=createSprite(200,260,20,100);
w4=createSprite(160,200,100,20);
w5=createSprite(100,160,20,100);
w6=createSprite(190,100,200,20);
w7=createSprite(390,100,20,200);
w8=createSprite(350,200,100,20);
w9=createSprite(310,240,20,100);
w10=createSprite(200,445,20,110);
w11=createSprite(160,490,100,20);
w12=createSprite(310,550,20,100);
w13=createSprite(350,290,100,20);
w14=createSprite(490,150,20,300);
w15=createSprite(350,500,100,20);
w16=createSprite(490,500,20,200);
w17=createSprite(500,400,250,20);
w18=createSprite(630,440,20,100);
w19=createSprite(670,490,100,20);
w19=createSprite(910,490,200,20);
w20=createSprite(910,590,20,200);
w21=createSprite(1020,400,20,200);
w22=createSprite(1100,200,200,20);
w23=createSprite(1000,150,20,120);
w24=createSprite(910,90,200,20);
w25=createSprite(810,230,20,300);
w26=createSprite(850,380,100,20);
w27=createSprite(530,300,100,20)
w28=createSprite(590,210,20,200);
w29=createSprite(630,100,100,20);
w30=createSprite(690,190,20,200);

if(allPlayers !== undefined){
  background("black");

  var index = 0;

  var x = 100 ;
  var y = 350;

 
  if(keyIsDown(UP_ARROW) && player.index !== null){
    player.distance +=10
    player.update();
  }

}

      drawSprites();
    }
}  