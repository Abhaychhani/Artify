class Event {
  constructor(main) {
    this.main = main;
    this.canvas = this.main.canvas;

    // event listeners
    this.canvas.onmousedown = (e) => {
      this.main.drawing.start(e);
    };
    this.canvas.onmousemove = (e) => {
      this.main.drawing.draw(e);
    };
    this.canvas.onmouseup = (e) => {
      this.main.drawing.stop(e);
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
  }
}

export default Event;
