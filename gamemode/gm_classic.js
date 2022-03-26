import { InputHandler } from "../utility/inputhandler.js";
import { MapLoader } from "../utility/maploader.js";
import { WorldGrid } from "../utility/worldgrid.js";

export class GM_Classic{

    constructor(game){
        this.game = game;
    }

    /**
     * Methode mettant en place le mode de jeu.
     */
    load(){
        this.worldGrid = new WorldGrid();
        let mapLoader = new MapLoader();
        mapLoader.load(this.game.selectedMap,this.worldGrid,this.onMapLoaded.bind(this))
    }

    onMapLoaded(){
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.worldGrid.viewWidth;
        this.canvas.height = this.worldGrid.viewHeight;
        this.context = this.canvas.getContext("2d",{alpha:false});
        if (this.context==null) return;
        this.game.root.appendChild(this.canvas);
        this.inputHandler = new InputHandler();
        this.clockID = setInterval(this.gameLoop.bind(this),this.worldGrid.stepDelay)
    }

    gameLoop(){
        this.context.clearRect(0,0,this.worldGrid.viewWidth,this.worldGrid.viewHeight);
        this.worldGrid.step(this.inputHandler);
        this.worldGrid.render(this.context);
        if (!this.worldGrid.snake.alive){
            clearInterval(this.clockID);
        }
    }

    /**
     * Methode détruisant le mode de jeu.
     */
    unload(){
        this.game.root.removeChild(this.canvas);
    }

}