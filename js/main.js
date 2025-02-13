import Drawing from "./drawing.js";
import Event from "./event.js";

class Main {
    constructor() {
        this.canvas=document.getElementById('canvas');
        this.ctx=this.canvas.getContext('2d');
        this.width=this.canvas.width=600;
        this.height=this.canvas.height=500;

        this.drawing=new Drawing(this);
        this.event=new Event(this);
    }
    render(){
        
    }
    animate(timeStamps){
        
        this.render();
        window.requestAnimationFrame((timeStamps)=>this.animate(timeStamps));
    }
}


const main = new Main();
window.requestAnimationFrame(()=>{main.animate()});