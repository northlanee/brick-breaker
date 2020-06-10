export default class InputHandler {
    constructor(paddle) {
        document.addEventListener("keydown", (e) => {
            //alert(e.code);
            switch (e.code) {
                case "KeyA":
                    paddle.moveLeft();
                    break;
                case "KeyD":
                    paddle.moveRight();
                    break;
            }
        });

        document.addEventListener("keyup", (e) => {
            //alert(e.code);
            switch (e.code) {
                case "KeyA":
                    if (paddle.speed < 0) paddle.stop();
                    break;
                case "KeyD":
                    if (paddle.speed > 0) paddle.stop();
                    break;
            }
        });
    }
}
