import { FoodGrowth } from "../entity/food.js";
import { InputHandler } from "../utility/inputhandler.js";
import { MapLoader } from "../utility/maploader.js";
import { WorldGrid } from "../utility/worldgrid.js";
import { GM_Menu } from "./gm_menu.js";

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

    onMapLoaded(loaded){
        if (!loaded){
            alert("La carte n'a pas pu charger")
            this.backToMenu();
            return;
        }
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.worldGrid.viewWidth;
        this.canvas.height = this.worldGrid.viewHeight;
        this.context = this.canvas.getContext("2d",{alpha:false});
        if (this.context==null) return;
        this.context.font = "30px Arial";
        this.game.root.appendChild(this.canvas);
        this.inputHandler = new InputHandler();
        this.clockID = setInterval(this.gameLoop.bind(this),this.worldGrid.stepDelay)
    }

    gameLoop(){
        this.context.clearRect(0,0,this.worldGrid.viewWidth,this.worldGrid.viewHeight);
        this.worldGrid.step(this.inputHandler);
        this.worldGrid.render(this.context);
        this.context.fillStyle = "#ff0"
        this.context.fillText("Score:"+this.worldGrid.snake.size,0,this.worldGrid.viewHeight);
        if (!this.worldGrid.snake.alive){
            alert("Vous avez perdu!")
            clearInterval(this.clockID);
            this.backToMenu()
        }
    }

    /**
     * Methode détruisant le mode de jeu.
     */
    unload(){
        if (this.canvas){
            this.game.root.removeChild(this.canvas);
        }
    }

    backToMenu(){
        this.unload();
        this.game.gamemode = new GM_Menu(this.game);
        this.game.gamemode.load();
    }

}