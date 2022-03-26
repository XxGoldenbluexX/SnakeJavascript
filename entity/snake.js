export class Snake{

    constructor(){
        this.size = 0;
        this.cases = [];
        this.dir = [0,0];
        this.alive = true;
    }

    step(grid,inputh){
        let xspd = 0;
        let yspd = 0;
        xspd = inputh.getDirectionalX();
        yspd = inputh.getDirectionalY();
        if (Math.abs(xspd)+Math.abs(yspd)==1){
            this.dir = [xspd,yspd];
        }
        xspd = this.cases[this.cases.length-1]//snake's tail (recyclage de variable)
        yspd = [xspd[0]+this.dir[0],xspd[1]+this.dir[1]]//snake's next case (recyclage de variable)
        this.alive = this.alive && this.cases.every(function(c){return (c[0]!=yspd[0])||(c[1]!=yspd[1]);})//le serpent se marche sur la queue
        //out of map test
        this.alive = this.alive && (yspd[0]<grid.worldWidth && yspd[0]>=0 && yspd[1]<grid.worldHeight && yspd[1]>=0)
        this.cases.push(yspd);
        while (this.cases.length>this.size){
            this.cases.shift();
        }
    }

    render(grid,context){
        context.fillStyle = "#0f0";
        context.strokeStyle = "#0f0";
        for (let c of this.cases){
            context.fillRect(c[0]*grid.caseWidth,c[1]*grid.caseHeight,grid.caseWidth,grid.caseHeight);
        }
    }
}