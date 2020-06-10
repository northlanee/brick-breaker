export default class Paddle {
    constructor(game) {
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.width = 150;
        this.height = 20;

        this.speed = 0;
        this.maxSpeed = 80;

        this.postition = {
            x: this.gameWidth / 2 - this.width / 2,
            y: this.gameHeight - this.height - 10,
        };
    }

    moveLeft() {
        this.speed = -this.maxSpeed;
    }

    moveRight() {
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }

    draw(ctx) {
        ctx.fillStyle = "cyan";
        ctx.fillRect(
            this.postition.x,
            this.postition.y,
            this.width,
            this.height
        );
    }

    update(dt) {
        if (!dt) return;
        this.postition.x += this.speed / dt;
        if (this.postition.x < 0) this.postition.x = 0;
        if (this.postition.x + this.width > this.gameWidth)
            this.postition.x = this.gameWidth - this.width;
    }
}
