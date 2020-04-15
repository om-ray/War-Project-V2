var canvas = document.getElementById("GameCanvas");
var ctx = canvas.getContext("2d");
//Resizes canvas
function resizeCanvas() {
  var width = document.documentElement.clientWidth - 25;
  var height = document.documentElement.clientHeight - 22;

  canvas.width = width;
  canvas.height = height;
}

//Player object
var Player = function (x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;

  this.draw = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
};


//Instantiated Player object
var Player1 = new Player(10, 10, 10, 10, "black");

//Drawing loop !!IMPORTANT: ALL DRAWING WILL OCCUR HERE!!
var Drawing_loop = function () {
  Player1.draw();
};

//Game loop !!ALL NECESSARY FUNCTIONS WILL BE CALLED HERE!!
var Game_loop = function () {
  resizeCanvas();
  Drawing_loop();
};

//Set interval !!LOOPS EVERYTHING IN GAME LOOP!!
setInterval(function () {
  Game_loop();
}, 60);
