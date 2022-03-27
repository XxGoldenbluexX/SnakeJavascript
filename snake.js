import {GM_Menu} from "./gamemode/gm_menu.js";

window.addEventListener("load",function(){
    let root = document.getElementById('root');
    let game = new SnakeGame(root);
    //game._startGame();
})

class SnakeGame{
    constructor(root){
        this.root = root;
        this.gamemode = new GM_Menu(this);
        this.gamemode.load();
        this.selectedMap = "default";
    }
}