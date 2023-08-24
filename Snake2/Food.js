class Food {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    food() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, block, block);
    }

    clearFood() {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, block, block);
    }

    newFood(){
      let randomFood = Math.floor(Math.random() * game_size);
      randomFood -= randomFood % block;
      return randomFood;
    }
    show() {
        this.clearFood();
        this.x = this.newFood();
        this.y = this.newFood();
        this.food();
    }
}