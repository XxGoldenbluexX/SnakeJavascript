export class WorldGrid{
    constructor(){
        this.entities = [];
        this.caseWidth = 0;
        this.caseHeight = 0;
        this.worldWidth = 0;
        this.worldHeight = 0;
        this.viewWidth = 0;
        this.viewHeight = 0;
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
}