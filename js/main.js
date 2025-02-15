import UI from "./ui.js";
import Drawing from "./drawing.js";
import Event from "./event.js";
class Main {
    constructor() {
        this.canvas=document.getElementById('canvas');
        this.ctx=this.canvas.getContext('2d');
        this.resizeCanvas();

        this.ui=new UI(this);
        this.drawing=new Drawing(this);
        this.event=new Event(this);
    }
    resizeCanvas(){
        const computedStyle = window.getComputedStyle(this.canvas);
        const height = Number(computedStyle.height.split('px')[0])
        const width = Number(computedStyle.width.split('px')[0])
        this.width=this.canvas.width=width;
        this.height=this.canvas.height=height;
    }
    render(){
        
    }
    animate(timeStamps){
        
        this.render();
        window.requestAnimationFrame((timeStamps)=>this.animate(timeStamps));
    }
}

window.addEventListener('load',()=>{
    const main = new Main();
    window.requestAnimationFrame(()=>{main.animate()});
})
