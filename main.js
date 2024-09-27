// Canvas Set Up
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.height = 400;
cnv.width = 600;

// Global Variable
let directionX = 0;
let directionY = 0;
let playerImg = document.getElementById("player-img");
let playerX = 0;
let playerY = 0;
let playerW = 40;
let playerH = 60;

// Animation
function draw() {
  // Clear Frame
  ctx.fillstyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  // Move Player
  playerX += directionX;
  playerY += directionY;

  //Check Collision
  if (
    playerX + directionX <= 0 ||
    playerX + directionX + playerW >= cnv.width
  ) {
    directionX = 0;
  } else if (
    playerY + directionY <= 0 ||
    playerY + directionY + playerH >= cnv.height
  ) {
    directionY = 0;
  }

  // Draw Player
  ctx.drawImage(playerImg, playerX, playerY, playerW, playerH);
}
draw();

// Key Handlers
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft") {
    directionX = -2;
  } else if (event.code === "ArrowRight") {
    directionX = 2;
  } else if (event.code === "ArrowUp") {
    directionY = -2;
  } else if (event.code === "ArrowDown") {
    directionY = 2;
  }
});
document.addEventListener("keyup", (event) => {
  if (event.code === "ArrowLeft") {
    directionX = 0;
  } else if (event.code === "ArrowRight") {
    directionX = 0;
  } else if (event.code === "ArrowUp") {
    directionY = 0;
  } else if (event.code === "ArrowDown") {
    directionY = 0;
  }
});
