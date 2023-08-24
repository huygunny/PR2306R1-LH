class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.game_size = canvas.width;
        this.block = 20;
        this.snake = new Snake(this.game_size, this.block);
        this.food = new Food(this.game_size, this.block);
    }

    init() {
        this.food.show();

        document.addEventListener("keydown", this.handleKeyPress.bind(this));

        setInterval(this.gameLoop.bind(this), 200);
    }

    handleKeyPress(event) {
        const key = event.key;
        switch (key) {
            case "ArrowUp":
                this.snake.changeDirection(0, -1);
                break;
            case "ArrowDown":
                this.snake.changeDirection(0, 1);
                break;
            case "ArrowLeft":
                this.snake.changeDirection(-1, 0);
                break;
            case "ArrowRight":
                this.snake.changeDirection(1, 0);
                break;
            default:
                break;
        }
    }

    gameLoop() {
        this.snake.move();
        if (this.snake.checkEat(this.food)) {
            this.snake.grow();
            this.food.show();
        }
        if (this.snake.checkCollision()) {
            this.displayGameOver();
        }
        this.snake.snake();
    }

    displayGameOver() {
        this.ctx.font = "50px MV Boli";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.fillText("GAME OVER!", this.game_size / 2, this.game_size / 2);
    }
}