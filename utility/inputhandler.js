export class InputHandler{

    constructor(){
        this.keyDict = {}
        window.addEventListener("keydown",this.onKeyPress.bind(this));
        window.addEventListener("keyup",this.onKeyRelease.bind(this));
    }

    onKeyPress(e){
        this.keyDict[e.key] = true;
    }

    onKeyRelease(e){
        this.keyDict[e.key] = false;
    }

    getKey(key){
        r = this.keyDict[key];
        return r==undefined?false:r;
    }
}