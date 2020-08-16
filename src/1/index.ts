function Building(floors:number){
    this.what="building";
    this.floors = floors;
}

Building.prototype.countFloors = function():void{
    console.log(`I have ${this.floors} floors`);
}
export default Building;