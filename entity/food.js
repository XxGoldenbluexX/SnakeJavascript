import { DoubleSpeedEffect } from "../statuseffect.js";

export class FoodGrowth{

    constructor(){
        this.cases = []
    }

    onSnakeInteract(grid,snake){
        snake.size++;
        this.cases = [grid.randomPlaceFree()];
    }

    step(grid,inputh){

    }

    render(grid,context){
        context.fillStyle = "#f00";
        context.strokeStyle = "#f00";
        let c = this.cases[0];
        context.fillRect(c[0]*grid.caseWidth,c[1]*grid.caseHeight,grid.caseWidth,grid.caseHeight);
    }

}

export class FoodStepSize{

    constructor(){
        this.cases = []
    }

    onSnakeInteract(grid,snake){
        snake.addStatusEffect(new DoubleSpeedEffect(20));
        this.cases = [grid.randomPlaceFree()];
    }

    step(grid,inputh){

    }

    render(grid,context){
        context.fillStyle = "#ff0";
        context.strokeStyle = "#ff0";
        let c = this.cases[0];
        context.fillRect(c[0]*grid.caseWidth,c[1]*grid.caseHeight,grid.caseWidth,grid.caseHeight);
    }

}