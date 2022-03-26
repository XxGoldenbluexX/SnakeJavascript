import { Snake } from "../entity/snake.js";
export class MapLoader{

    getMapPath(mapName){
        return "./maps/"+mapName+".json";
    }

    async load(mapName,worldGrid,callback){
        let response = await fetch(this.getMapPath(mapName))
        if (response.ok){
            let map = await response.json()
            worldGrid.caseWidth = map.caseWidth;
            worldGrid.caseHeight = map.caseHeight;
            worldGrid.worldWidth = map.worldWidth;
            worldGrid.worldHeight = map.worldHeight;
            worldGrid.viewWidth = worldGrid.caseWidth*worldGrid.worldWidth;
            worldGrid.viewHeight = worldGrid.caseHeight*worldGrid.worldHeight;
            worldGrid.stepDelay = map.delay;
            worldGrid.snake = new Snake();
            worldGrid.entities.push(worldGrid.snake);
            worldGrid.snake.size = map.snakeStartSize;
            worldGrid.snake.cases.push(map.snakeStart);
            worldGrid.snake.dir = map.snakeStartDir;
            callback();
        }else{
            console.log("Unable to fetch the map file: "+fileName);
        }
    }

}