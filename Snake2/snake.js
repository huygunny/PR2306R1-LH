class Snake {
    constructor() {
      this.body = [new Toado(120, 80), new Toado(100, 80), new Toado(80, 80)];
      this.speed = new Toado(1, 0);
      this.head = this.body[0];
    }
  
    snake() {
      ctx.fillStyle = "gray";
      ctx.fillRect(this.body[0].x, this.body[0].y, block, block);
  
      ctx.fillStyle = "white";
      for (let i = 1; i < this.body.length; i++) {
        ctx.fillRect(this.body[i].x, this.body[i].y, block, block);
      }
    }
  
    clear() {
      ctx.fillStyle = "black";
      ctx.fillRect(this.body[0].x, this.body[0].y, block, block);
  
      ctx.fillStyle = "black";
      for (let i = 1; i < this.body.length; i++) {
        ctx.fillRect(this.body[i].x, this.body[i].y, block, block);
      }
    }
  
    checkBound() {
      if (this.head.x < 0) {
        this.head.x = game_size - block;
      }
  
      if (this.head.x > game_size - block) {
        this.head.x = 0;
      }
  
      if (this.head.y < 0) {
        this.head.y = game_size - block;
      }
  
      if (this.head.y > game_size - block) {
        this.head.y = 0;
      }
    }
  
    displayGameOver() {
      ctx.font = "50px MV Boli";
      ctx.fillStyle = "white";
      ctx.textAlign = "center";
      ctx.fillText("GAME OVER!", game_size / 2, game_size / 2);
      this.speed = 0;
    }
  
    checkCollide() {
      let isCollision = false;
      let head = this.body[0];
      for (let i = 1; i < game.body.length; i++) {
        if (head.x === game.body[i].x && head.y === game.body[i].y) {
          isCollision = true;
          break;
        }
      }
      if (isCollision) {
        this.displayGameOver();
      } else {
        return isCollision;
      }
    }
  
    move() {
      this.clear();
  
      for (let i = this.body.length - 1; i >= 1; i--) {
        this.body[i].x = this.body[i - 1].x;
        this.body[i].y = this.body[i - 1].y;
      }
  
      this.body[0].x += this.speed.x * block;
      this.body[0].y += this.speed.y * block;
  
      this.checkBound();
      this.checkCollide();
      this.snake();
    }
  
    checkEat(Food) {
      let head = this.body[0];
      return tao.x === head.x && tao.y === head.y;
    }
  
    grow() {
      this.clear();
  
      let snakeLength = this.body.length;
      let mountX = this.body[snakeLength - 1].x - this.body[snakeLength - 2].x;
      let mountY = this.body[snakeLength - 1].y - this.body[snakeLength - 2].y;
  
      let newPart = new Toado(
        this.body[snakeLength - 1].x + mountX,
        this.body[snakeLength - 1].y + mountY
      );
  
      this.body.push(newPart);
      this.snake();
    }
  }
  
  var direction = new Toado(1, 0);
  
  document.onkeydown = function (press) {
    switch (press.keyCode) {
      case 39:
        if (direction.x === -1) break;
        game.speed = new Toado(1, 0);
        direction = new Toado(1, 0);
        break;
  
      case 38:
        if (direction.y === 1) break;
        game.speed = new Toado(0, -1);
        direction = new Toado(0, -1);
        break;
  
      case 40:
        if (direction.y === -1) break;
        game.speed = new Toado(0, 1);
        direction = new Toado(0, 1);
        break;
  
      case 37:
        if (direction.x === 1) break;
        game.speed = new Toado(-1, 0);
        direction = new Toado(-1, 0);
        break;
  
      default:
        break;
    }
  }