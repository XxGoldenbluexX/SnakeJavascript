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
        //SETUP CANVAS
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.worldGrid.viewWidth;
        this.canvas.height = this.worldGrid.viewHeight;
        this.context = this.canvas.getContext("2d",{alpha:false});
        if (this.context==null) return;
        this.game.root.appendChild(this.canvas);
        this.context.clearRect(0,0,0,1);
        this.worldGrid.renderGrid(this.context);
        this.inputHandler = new InputHandler();
    }

    /**
     * Methode détruisant le mode de jeu.
     */
    unload(){
        this.game.root.removeChild(this.canvas);
    }

}