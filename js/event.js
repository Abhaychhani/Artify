class Event {
  constructor(main) {
    this.main = main;
    this.canvas = this.main.canvas;
    this.ui = this.main.ui;
    this.drawing = this.main.drawing;

    // drawing mouse event listeners
    this.canvas.addEventListener('mousedown',(e)=>(this.drawing.start(e)))
    this.canvas.addEventListener('mousemove', (e) => {
      this.drawing.update(e);
      this.drawing.draw();
    });
    this.canvas.addEventListener('mouseup',()=>(this.drawing.stop()));

    // drawing touch event listeners
    this.canvas.addEventListener('touchstart',(e) => {
      const loc = e.touches[0];
      this.drawing.start(loc)
    });
    this.canvas.addEventListener('touchmove',(e) => {
      const loc = e.touches[0];
      this.drawing.update(loc);
      this.drawing.draw();
    });
    this.canvas.addEventListener('touchend',() => (this.drawing.stop()));

    // undo btn click event
    this.ui.undoBtn.addEventListener('click',()=>this.undo());

    // stroke size onchange input event
    this.ui.strokeSizeInput.addEventListener("blur", (e) =>
      this.setStrokeSize(e)
    );
    this.ui.strokeSizeInput.addEventListener("change", (e) =>
      this.setStrokeSize(e)
    );

    // stroke color onchange input event
    this.ui.strokeColorInput.addEventListener(
      "change",
      (e) => (this.drawing.strokeColor = e.target.value)
    );

    // download the image;
    this.ui.downloadBtn.addEventListener("click", () => this.downloadImage());
    // fill color toggle btn click event
    this.ui.fillColorBtn.onclick = () => {
      this.ui.fillColorBtn.classList.toggle("active");
      this.drawing.isFillColor
        ? (this.drawing.isFillColor = false)
        : (this.drawing.isFillColor = true);
      this.main.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawing.draw();
    };
    // window resize event for canvas
    window.addEventListener("resize", (e) => {
      this.main.resizeCanvas();
      this.drawing.draw();
    });
  }
  setStrokeSize(e) {
    const strokeSize = e.target.value;
    if (strokeSize <= 100 && strokeSize >= 1) {
      this.drawing.strokeSize = strokeSize;
    } else {
      this.ui.strokeSizeInput.value = 2;
      this.drawing.strokeSize = 2;
    }
  }
  undo(){
    this.drawing.strokes.pop();
    this.main.ctx.clearRect(0, 0, this.main.width, this.main.height);
    this.drawing.draw();
  }
  downloadImage() {
    const imageDataUrl = this.canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imageDataUrl;
    link.download = new Date().getTime() + ".png";
    link.click();
  }
}

export default Event;
