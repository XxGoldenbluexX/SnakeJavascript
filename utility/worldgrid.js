import { getRandomInt } from "./utility.js";

export class WorldGrid{
    constructor(){
        this.entities = [];
        this.caseWidth = 0;
        this.caseHeight = 0;
        this.worldWidth = 0;
        this.worldHeight = 0;
        this.viewWidth = 0;
        this.viewHeight = 0;
        this.stepDelay = 0;
        this.snake=null;
    }

    renderGrid(context){
        context.strokeStyle = "#444";
        for (let i = 0; i<this.worldWidth ;i++){
            context.strokeRect(i*this.caseWidth,0,this.caseWidth,this.viewHeight)
        }
        for (let j = 0; j<this.worldHeight ;j++){
            context.strokeRect(0,j*this.caseHeight,this.viewWidth,this.caseHeight)
        }
    }

    step(inputHandler){
        for (let e of this.entities){
            e.step(this,inputHandler);
        }
    }

    render(context){
        this.renderGrid(context);
        for (let i in this.entities){
            this.entities[i].render(this,context);
        }
    }

    /**
     * seek a random place <strong>BE SURE THAT ONE EXISTS</strong>
     * this functino migh be long if there is few place free
     */
    randomPlaceFree(){
        let place = [getRandomInt(0,this.worldWidth),getRandomInt(0,this.worldHeight)];
        while (!this.placeFree(place)){
            place = [getRandomInt(0,this.worldWidth),getRandomInt(0,this.worldHeight)];
        }
        return place;
    }

    placeFree(place){
        for (let e of this.entities){
            for (let c of e.cases){
                if (c[0]==place[0] && c[1]==place[1]){
                    return false;
                }
            }
        }
        return true;
    }

    placeInsideBounds(place){
        return (place[0]<this.worldWidth && place[0]>=0 && place[1]<this.worldHeight && place[1]>=0)
    }

    getEntitiesAt(place){
        let list = []
        for (let e of this.entities){
            for (let c of e.cases){
                if (c[0]==place[0] && c[1]==place[1]){
                    list.push(e);
                }
            }
        }
        return list;
    }
}