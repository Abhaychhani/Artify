
class Drawing {
  constructor(main) {
    this.main = main;
    this.canvas = this.main.canvas;
    this.width = this.main.width;
    this.height = this.main.height;
    this.ctx = this.main.ctx;
    this.ui=this.main.ui;
    this.strokeSize=this.ui.strokeSizeInput.value;
    this.strokeColor=this.ui.strokeColorInput.value;
    this.strokes = [];
    this.isDrawing = false;
    this.isFillColor=false;
    
  }
  #getMouse(event) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x:Math.round(event.clientX - rect.left),
      y:Math.round(event.clientY - rect.top),
  };
  }
  start(event) {
    this.isDrawing = true;
    const stroke = {
      points:[this.#getMouse(event)],
      size:this.strokeSize,
      color:this.strokeColor,
    };
    this.strokes.push(stroke);
  }
  draw() {
    this.ctx.save()
    for (const stroke of this.strokes) {
      const {points,size,color} = stroke;
      this.ctx.beginPath();
      this.ctx.lineCap="round";
      this.ctx.lineJoin="round";
      this.ctx.lineWidth=size;
      this.ctx.strokeStyle=color;
      for (let i = 0; i < points.length; i++) {
        if (i === 0) {
          this.ctx.moveTo(points[0].x,points[0].y);
        }
        this.ctx.lineTo(points[i].x,points[i].y);
        this.ctx.stroke();
        if(this.isFillColor){
          this.ctx.fill()          
        }
      }
    }
    this.ctx.restore()
    if(this.strokes.length>0){
        this.main.ui.undoBtn.disabled=false;
      }else{
        this.main.ui.undoBtn.disabled=true;
    }
  }
  stop() {
    this.isDrawing = false;
  }
  update(event) {
    if (this.isDrawing) {
      const lastStroke = this.strokes[this.strokes.length - 1];
      lastStroke.points.push(this.#getMouse(event));
    }
  }
}

export default Drawing;
