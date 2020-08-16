import IQueue from './Queue';
class Queue implements IQueue  {
    storage:Array<any>
    constructor(storage:Array<any>=[]){
        this.storage = storage
    }
    queue(value:any):Array<any>{
        this.storage.push(value);
        return this.storage;
    }
    peek():any{
        return this.storage[0]
    }
    dequeue():any{
         let popped= this.storage.shift();
         return popped;
    }
    size():number{
        return this.storage.length;
    }
}
export default Queue;