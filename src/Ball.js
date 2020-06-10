export default class Ball {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;

        this.image = document.getElementById("ball");
        this.size = 16;

        this.position = { x: 10, y: 10 };
        this.speed = { x: 80, y: 60 };
    }

    draw(ctx) {
        ctx.drawImage(
            this.image,
            this.position.x - this.size / 2,
            this.position.y - this.size / 2,
            this.size,
            this.size
        );
    }

    update(dt) {
        if (!dt) return;
        const paddleLeftEdge = this.game.paddle.postition.x;
        const paddleRightEdge =
            this.game.paddle.postition.x + this.game.paddle.width;

        this.position.x += this.speed.x / dt;
        this.position.y += this.speed.y / dt;

        if (
            this.position.y >= this.game.paddle.postition.y &&
            this.position.x >= paddleLeftEdge &&
            this.position.x <= paddleRightEdge
        ) {
            this.speed.y *= -1;
        }

        if (
            this.position.x > this.gameWidth - this.size / 2 ||
            this.position.x < this.size / 2
        ) {
            this.speed.x *= -1;
        }

        if (
            this.position.y > this.gameHeight - this.size / 2 ||
            this.position.y < this.size / 2
        ) {
            this.speed.y *= -1;
        }
    }
}
