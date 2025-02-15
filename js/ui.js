class UI {
    constructor() {
        this.undoBtn=document.getElementById('undoBtn');        
        this.strokeInput=document.getElementById('strokeInput');
        this.strokePara=document.querySelector('.stroke-size-num');
        this.strokePara.innerText=this.strokeInput.value;
    }
}

export default UI;