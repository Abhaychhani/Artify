class UI {
    constructor() {
        this.fillColorBtn=document.getElementById('bucketBtn');
        this.downloadBtn=document.getElementById('downloadBtn');        
        this.undoBtn=document.getElementById('undoBtn');        
        this.strokeSizeInput=document.getElementById('strokeSize');
        this.strokeColorInput=document.querySelector('#strokeColor');
        // this.strokePara=document.querySelector('.stroke-size-num');
        // this.strokePara.innerText=this.strokeSizeInput.value;
        // this.strokeColorInput.blur()
    }
}

export default UI;