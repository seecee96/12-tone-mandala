class TonePoint {  

//give ability to concieve of x and y variables (to be given cordniants)
  constructor(x, y, activeMod12) {
    this.activeMod12 = activeMod12
    this.x = x
    this.y = y
    this.active = false
    this.radius = screen.width/1000
    this.activeGrow = 0.0
    this.previousState = false
  }
  
  //draw a circle on the tone-point
  /*draw() {
    fill(255, 255, 255)
    stroke(255, 255, 255)
    circle(this.x, this.y, this.radius)  
    
    if (this.active){
        circle(this.x, this.y, this.radius + (screen.width/ 96)+5 * this.activeGrow)  
    }
  }

  update(drawingArray) {
   // console.log("!!", drawingArray)
    this.active = drawingArray.includes(this.activeMod12)
    
    if (this.active) {
      this.activeGrow += 0.43
      if (this.activeGrow > 1.0) {
        this.activeGrow = 1.0
      }
    }
    if (!this.active) {
      this.activeGrow -= 0.43
      if (this.activeGrow < 0.0) {
        this.activeGrow = 0.0
      }
    }
  }*/
}


