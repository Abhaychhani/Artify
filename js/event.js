class Event {
  constructor(main) {
    this.main = main;
    this.canvas = this.main.canvas;
    this.ui=this.main.ui;
    this.drawing=this.main.drawing;
    // event listeners
    this.canvas.onmousedown = (e) => {
      this.drawing.start(e);
    };
    this.canvas.onmousemove = (e) => {
      this.drawing.update(e);
      this.drawing.draw();
    };
    this.canvas.onmouseup = (e) => {
      this.drawing.stop(e);
    };
    this.canvas.ontouchstart = (e) =>{
      const loc = e.touches[0];
      this.canvas.onmousedown(loc);
    }
    this.canvas.ontouchmove = (e) =>{
      const loc = e.touches[0];
      this.canvas.onmousemove(loc);
    }
    this.canvas.ontouchend = (e) =>{
      this.canvas.onmouseup();
    }
    this.ui.undoBtn.onclick = ()=>{
      this.drawing.strokes.pop();
      this.main.ctx.clearRect(0,0,this.main.width,this.main.height);
      this.drawing.draw();
    }
    this.ui.strokeInput.onchange=(e)=>{
      this.drawing.strokeSize=e.target.value;
      this.ui.strokePara.innerText=e.target.value;
    }
  }
}

export default Event;
