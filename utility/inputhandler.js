export class InputHandler{

    constructor(inputConfig){
        if (inputConfig==undefined){
            inputConfig = {right:"d",left:"q",up:"z",down:"s"};
        }
        this.inputConfig = inputConfig;
        this.xspd = 0;
        this.yspd = 0;
        this.keyDict = {}
        window.addEventListener("keydown",this.onKeyPress.bind(this));
        window.addEventListener("keyup",this.onKeyRelease.bind(this));
    }

    onKeyPress(e){
        this.keyDict[e.key] = true;
        switch (e.key){
            case this.inputConfig.left:
                this.xspd=-1;
                this.yspd=0;
                break;
            case this.inputConfig.right:
                this.xspd=1;
                this.yspd=0;
                break;
            case this.inputConfig.up:
                this.xspd=0;
                this.yspd=-1;
                break;
            case this.inputConfig.down:
                this.xspd=0;
                this.yspd=1;
                break;
        }
    }

    onKeyRelease(e){
        this.keyDict[e.key] = false;
    }

    getKey(key){
        let r = this.keyDict[key];
        return r==undefined?false:r;
    }

    getDirectionalX(){
        return this.xspd;
    }

    getDirectionalY(){
        return this.yspd;
    }
}