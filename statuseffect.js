export class DoubleSpeedEffect{

    constructor(time){
        this.type = "DoubleSpeedEffect";
        this.time = time;
    }

    apply(entity){
        entity.stepSize *= 2;
    }

    remove(entity){
        entity.stepSize *= 0.5;
    }

}