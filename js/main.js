class Main {
    constructor() {
        this.canvas=document.getElementById('canvas');
        this.ctx=this.canvas.getContext('2d');
        this.width=this.canvas.width=window.innerWidth*0.5;
        this.height=this.canvas.height=window.innerHeight*0.75;
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