import Game from "./Game";

const canvas = document.getElementById("gameScreen");
const ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start();

let lastTime = 0;
const gameLoop = (timestamp) => {
    const dt = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(dt);
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
