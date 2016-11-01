var bubble = {
  x: 300,
  y: 200,
  display: function() {
    stroke(255);
    strokeWeight(4);
    fill(random(200,255));
    ellipse(this.x, this.y, 24, 24);
  },
  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}

var bubble2 = {
  x: 200,
  y: 200,
  display: function() {
    stroke(255);
    strokeWeight(4);
    fill(random(100,150));
    ellipse(this.x, this.y, 24, 24);
  },
  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
var bubble3 = {
  x: 250,
  y: 250,
  display: function() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 200, 200);
  },
  move: function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
}
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  bubble.move();
  bubble.display();
  bubble2.move();
  bubble2.display();
  bubble3.move();
  bubble3.display();
  arc(250, 250, 80, 80, 0, PI);
}