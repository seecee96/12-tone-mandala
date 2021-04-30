class Circle {
    constructor(x, y) {
          this.x = x
          this.y = y

          this.targetX = x
          this.targetY = y

          this.speed = 1.0
        }

    draw() {
          circle(this.x, this.y, 20)
        }

    update() {
          if (this.x < this.targetX) {
                  this.x = this.x + this.speed
                }
          if (this.x > this.targetX) {
                  this.x = this.x - this.speed
                }
          if (this.y < this.targetY) {
                  this.y = this.y + this.speed
                }
          if (this.y > this.targetY) {
                  this.y = this.y - this.speed
                }
        }

    distance(x1, y1, x2, y2) {
          let d1 = pow(x2 - x1, 2)
          let d2 = pow(y2 - y1, 2)
          return sqrt(d1 + d2)
        }

    setPoint(x, y) {
          let dist = this.distance(x, y, this.targetX, this.targetY)

          this.speed = dist / 100.0
          this.targetX = x
          this.targetY = y
        }
}

let circle1 = {}
let circle2 = {}

function setup() {
    createCanvas(400, 400);
    circle1 = new Circle(0, 0)
    circle2 = new Circle(0, 0)
    circle1.setPoint(width/2.0, height/2.0)
    circle2.setPoint(width, height)
}

function draw() {
    background(220);
    circle1.update()
    circle1.draw()
    circle2.update()
    circle2.draw()
}
