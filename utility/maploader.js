export class MapLoader{

    async load(fileName,worldGrid){
        let response = await fetch(fileName)
        if (response.ok){
            let map = await response.json()
            console.log(map);
        }else{
            console.log("Unable to fetch the map file: "+fileName);
        }
    }

}