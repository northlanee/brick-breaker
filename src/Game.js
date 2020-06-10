import Paddle from "./Paddle";
import Ball from "./Ball";
import InputHandler from "./InputHandler";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);
        this.gameObjects = [this.paddle, this.ball];

        new InputHandler(this.paddle);
    }

    update(dt) {
        this.gameObjects.forEach((o) => o.update(dt));
    }

    draw(ctx) {
        this.gameObjects.forEach((o) => o.draw(ctx));
    }
}
