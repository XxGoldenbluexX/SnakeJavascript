import { FoodGrowth, FoodStepSize, MegaFruit } from "../entity/food.js";
import { Snake } from "../entity/snake.js";
import { Wall } from "../entity/wall.js";
export class MapLoader{

    getMapPath(mapName){
        return "./maps/"+mapName+".json";
    }

    async load(mapName,worldGrid,callback){
        let response = await fetch(this.getMapPath(mapName))
        if (response.ok){
            let map = await response.json()
            try{
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
                for (let w of map.walls){
                    let wall = new Wall();
                    wall.cases.push(w);
                    worldGrid.entities.push(wall);
                }
                for (let f of map.foodGrowth){
                    let food = new FoodGrowth();
                    food.cases.push(f);
                    worldGrid.entities.push(food);
                }
                for (let f of map.foodStepSize){
                    let food = new FoodStepSize();
                    food.cases.push(f);
                    worldGrid.entities.push(food);
                }
                for (let f of map.foodFat){
                    let food = new MegaFruit();
                    food.cases.push(f);
                    worldGrid.entities.push(food);
                }
                callback(true);
            }catch(err){
                console.log("Unable to load the map file (file syntax invalid?): "+mapName);
                console.log(err);
                callback(false);
            }
        }else{
            console.log("Unable to fetch the map file: "+mapName);
            callback(false);
        }
    }

}