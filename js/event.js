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
    this.ui.strokeSizeInput.onchange=(e)=>{
      this.drawing.strokeSize=e.target.value;
      this.ui.strokePara.innerText=e.target.value;
    }
    this.ui.strokeColorInput.onchange=(e)=>{
      this.drawing.strokeColor=e.target.value;
    }
// download the image;
    this.ui.downloadBtn.onclick=()=>{
      const imageDataUrl = this.canvas.toDataURL("image/png");
      const link = document.createElement('a');
      link.href=imageDataUrl;
      link.download= new Date().getTime() +".png";
      link.click();
    }

    this.ui.fillColorBtn.onclick=()=>{
      this.ui.fillColorBtn.classList.toggle("active");
      this.drawing.isFillColor ? this.drawing.isFillColor=false : this.drawing.isFillColor=true;
      this.main.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
      this.drawing.draw();
    }



  }

}

export default Event;
