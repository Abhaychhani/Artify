class Drawing {
    constructor(main) {
        this.main=main;
        this.canvas=this.main.canvas;
        this.width=this.main.width;
        this.height=this.main.height;
        this.ctx=this.main.ctx;

        this.strokes=[];


        this.stroke=[];

        this.isDrawing=false;

    }
    #getMouse(event){
        const rect = this.canvas.getBoundingClientRect();
        return [
            Math.round(event.clientX-rect.left),
            Math.round(event.clientY-rect.top)
        ]
    }
    start(event){
        this.isDrawing=true;        
        this.stroke.push(this.#getMouse(event));
    }
    draw(event){
        if(this.isDrawing){
            this.stroke.push(this.#getMouse(event))

            // strokes drawing
            this.ctx.clearRect(0,0,this.width,this.height)
            this.ctx.beginPath();
            for (let i = 0; i < this.stroke.length; i++) {
                if(i===0){
                    this.ctx.moveTo(...this.stroke[0]);
                }
                this.ctx.lineTo(...this.stroke[i]);
                this.ctx.stroke();
                // console.log(this.strokes[i]);
                
            }
            // this.ctx.fill();
            // console.log(this.strokes);
            // this.strokes.forEach(stroke=>{
            //     console.log(stroke);
            // })
        }
    }
    stop(e){
        this.isDrawing=false;
        this.strokes.push(this.stroke)
        this.stroke=[];
    }
    update(){

    }
}

export default Drawing;