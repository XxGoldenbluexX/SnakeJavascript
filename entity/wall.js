export class Wall{

    constructor(){
        this.cases = []
    }

    onSnakeInteract(grid,snake){
        snake.alive=false;
    }

    step(grid,inputh){

    }

    render(grid,context){
        context.fillStyle = "#444";
        context.strokeStyle = "#444";
        let c = this.cases[0];
        context.fillRect(c[0]*grid.caseWidth,c[1]*grid.caseHeight,grid.caseWidth,grid.caseHeight);
    }

}