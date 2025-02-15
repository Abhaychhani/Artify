class UI {
    constructor() {
        this.fillColorBtn=document.getElementById('bucketBtn');
        this.downloadBtn=document.getElementById('downloadBtn');        
        this.undoBtn=document.getElementById('undoBtn');        
        this.strokeSizeInput=document.getElementById('strokeInput');
        this.strokePara=document.querySelector('.stroke-size-num');
        this.strokeColorInput=document.querySelector('#strokeColor');
        this.strokePara.innerText=this.strokeSizeInput.value;
        // this.strokeColorInput.blur()
    }
}

export default UI;