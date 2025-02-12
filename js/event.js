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
  }
}

export default Event;
