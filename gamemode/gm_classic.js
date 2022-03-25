export class GM_Classic{

    constructor(game){
        this.game = game;
    }

    /**
     * Methode mettant en place le mode de jeu.
     */
    load(){
        this.canvas = document.createElement("canvas");
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("webgl",{alpha:false});
        if (this.context==null) return;
        this.game.root.appendChild(this.canvas);
        this.context.clearColor(0,0,0,1);
    }

    /**
     * Methode détruisant le mode de jeu.
     */
    unload(){
        this.game.root.removeChild(this.canvas);
    }

}