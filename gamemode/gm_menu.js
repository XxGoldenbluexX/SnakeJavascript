import {GM_Classic} from "./gm_classic.js";
export class GM_Menu{

    constructor(game){
        this.game = game;
    }

    /**
     * Methode mettant en place le mode de jeu.
     */
    load(){
        //map name input
        this.nameNode = document.createElement("input");
        this.nameNode.type = "text";
        this.nameNode.value = "default";
        //map name label
        this.labelNode = document.createElement("label");
        this.labelNode.innerText = "Nom de la carte: ";
        this.labelNode.for = this.nameNode
        //start game button
        this.startButton = document.createElement("button");
        this.startButton.innerText = "Jouer";
        this.startButton.addEventListener("click",this.startGame.bind(this));
        //insertion to DOM
        this.game.root.appendChild(this.labelNode);
        this.game.root.appendChild(this.nameNode);
        this.game.root.appendChild(this.startButton);
    }

    /**
     * Methode détruisant le mode de jeu.
     */
    unload(){
        while (this.game.root.firstChild){
            this.game.root.removeChild(this.game.root.firstChild);
        }
    }

    startGame(){
        this.unload();
        this.game.selectedMap = this.nameNode.value;
        this.game.gamemode = new GM_Classic(this.game);
        this.game.gamemode.load();
    }

}