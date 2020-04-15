var canvas = document.getElementById("GameCanvas");
var ctx = canvas.getContext("2d");

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

function resizeCanvas() {
  var width = document.documentElement.clientWidth - 25;
  var height = document.documentElement.clientHeight - 22;

  canvas.width = width;
  canvas.height = height;
}

var Player1 = new Player(10, 10, 10, 10, "black");

var Drawing_Loop = function () {
  Player1.draw();
};

var Game_loop = function () {
  resizeCanvas();
  Drawing_Loop();
};

setInterval(Game_loop(), 60);
