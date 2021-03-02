var canvas;

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var distance=0;
var w1,w2,w3,w4,w5,w6,w7,w8,w9,w10,w11,w12,w13,w14,w15,w16,w17,w18,w19,w20,w21,w22,w23,w24,w25,w26,w27,w28,w29,w30
var boy,girl,key,monster1,monster2;
var players

var form, player, game;
function preload(){
  boyImg = loadImage("boy.png");
  girlImg = loadImage("girl.png");
  keyImg = loadImage("key.png");
  monster1Img = loadImage("monster1.png");
  Monster2Img = loadImage("monster2.png");
}
function setup() {
  createCanvas(1200,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  
}

function draw() {
  background("white");  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  drawSprites();
}