export class Snake{

    constructor(){
        this.size = 0;
        this.cases = [];
        this.dir = [0,0];
        this.alive = true;
        this.stepSize = 1;
        this.statusEffects = [];
    }

    onSnakeInteract(grid,snake){
        snake.alive = false;
    }

    step(grid,inputh){
        this.stepStatusEffects();
        let xspd = 0;
        let yspd = 0;
        xspd = inputh.getDirectionalX();
        yspd = inputh.getDirectionalY();
        if (Math.abs(xspd)+Math.abs(yspd)==1){
            this.dir = [xspd,yspd];
        }
        xspd = this.cases[this.cases.length-1]//snake's tail (recyclage de variable)
        yspd = [xspd[0]+this.dir[0]*this.stepSize,xspd[1]+this.dir[1]*this.stepSize]//snake's next case (recyclage de variable)
        for (let e of grid.getEntitiesAt(yspd)){
            e.onSnakeInteract(grid,this)
        }
        this.alive = this.alive && grid.placeInsideBounds(yspd);
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

    stepStatusEffects(){
        for (let e of this.statusEffects){
            e.time--;
            if (e.time<=0){
                e.remove(this);
            }
        }
        this.statusEffects = this.statusEffects.filter(function(e){return e.time>0});
    }
    addStatusEffect(eff){
        this.statusEffects.push(eff);//amélioration possible, le systeme actuel aura des problèmes si les effets données ne sont pas accumulable.
        eff.apply(this)
    }
}