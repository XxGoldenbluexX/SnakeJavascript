import { DoubleSpeedEffect } from "../statuseffect.js";
import {HSLToRGB} from "../utility/utility.js"

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

export class MegaFruit{

    constructor(){
        this.cases = []
        this.hue = 0;
    }

    onSnakeInteract(grid,snake){
        snake.size += 3;
        grid.toRemove.push(this);
    }

    step(grid,inputh){
        this.hue+=10;
        while (this.hue>360) this.hue -= 360
    }

    render(grid,context){
        context.fillStyle = "hsl("+this.hue+",100%,50%)";
        let c = this.cases[0];
        context.fillRect(c[0]*grid.caseWidth,c[1]*grid.caseHeight,grid.caseWidth,grid.caseHeight);
    }

}