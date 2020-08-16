import IStack from './Stack';
class Stack implements IStack  {
    storage:Array<any>
    constructor(storage:Array<any>=[]){
        this.storage = storage
    }
    push(value:any):Array<any>{
        this.storage.push(value);
        return this.storage;
    }
    peek():any{
        return this.storage[this.storage.length-1]
    }
    pop():any{
         let popped= this.storage.pop();
         return popped;
    }
    size():number{
        return this.storage.length;
    }
}
export default Stack;