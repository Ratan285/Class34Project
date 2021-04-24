class Ground {
  constructor() {
    var options = {
      isStatic: true
    }
    var width = 3100
    var height = 20
    var x = 1500
    var y = 350
    this.topBody = Bodies.rectangle(x, y - 350, width, height, options);
    this.leftBody = Bodies.rectangle(x - 1500, y, height, width, options);
    this.rightBody = Bodies.rectangle(x + 1500, y, height, width, options);
    this.bodyBottom = Bodies.rectangle(1500, 700, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.topBody);
    World.add(world, this.leftBody);
    World.add(world, this.rightBody);
    World.add(world, this.bodyBottom);
  }
  display() {
    var pos = this.bodyBottom.position;
    var posRight = this.rightBody.position;
    var posLeft = this.leftBody.position;
    var posTop = this.topBody.position;
    push();
    rectMode(CENTER);
    strokeWeight(5);
    fill("white");
    rect(pos.x, pos.y, this.width, this.height);
    // rect(posRight.x, posRight.y, this.height, this.width);
    // rect(posLeft.x, posLeft.y, this.height, this.width);
    // rect(posTop.x, posTop.y, this.width, this.height);
    pop();
  }
};