
class Drawing {
  constructor(main) {
    this.main = main;
    this.canvas = this.main.canvas;
    this.width = this.main.width;
    this.height = this.main.height;
    this.ctx = this.main.ctx;
    this.ui=this.main.ui;
    this.strokeSize=this.ui.strokeInput.value;

    this.strokes = [];
    this.isDrawing = false;
    
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
    const {x,y} = this.#getMouse(event)
    this.strokes.push([{
      x:x,
      y:y,
      size:this.strokeSize,
    }]);
  }
  draw() {
    this.ctx.save()
    for (const stroke of this.strokes) {
      this.ctx.beginPath();
      this.ctx.lineCap="round";
      this.ctx.lineJoin="round";
      for (let i = 0; i < stroke.length; i++) {
        this.ctx.lineWidth=stroke[i].size;
        if (i === 0) {
          this.ctx.moveTo(stroke[0].x,stroke[0].y);
        }
        this.ctx.lineTo(stroke[i].x,stroke[i].y);
        this.ctx.stroke();
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
      const {x,y} = this.#getMouse(event);
      lastStroke.push({x:x,y:y,size:this.strokeSize});
    }
  }
}

export default Drawing;
