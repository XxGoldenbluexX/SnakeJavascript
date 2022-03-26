import {GM_Classic} from "./gamemode/gm_classic.js";
import {GM_Menu} from "./gamemode/gm_menu.js";

window.addEventListener("load",function(){
    let root = document.getElementById('root');
    let game = new SnakeGame(root);
    game._startGame();
})

class SnakeGame{
    constructor(root){
        this.root = root;
        this.gamemode = new GM_Menu();
        this.gamemode.load();
        this.selectedMap = "default";
    }

    _startGame(){
        if (this.gamemode){
            this.gamemode.unload();
        }
        this.gamemode = new GM_Classic(this);
        this.gamemode.load();
    }
}