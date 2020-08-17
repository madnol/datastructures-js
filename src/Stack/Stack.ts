import IStack from './Stack';
import LinkedList from "../LinkedList/LinkedList"
class Stack implements IStack  {
    storage:LinkedList
    max:number;
    minData:number;
    constructor(max:number=Infinity){
        this.storage = new LinkedList()
        this.max=max;
        this.minData = Infinity;
    }
    push(value:any):LinkedList{
        if(this.storage.size<this.max){
            this.storage.addToHead(value)
            if(value<this.minData){
                this.minData=value
            }
            return this.storage;
        }
        else{
            throw new Error("Stack overflow")
        }
    }
    peek():any{
        return this.storage.head.data;
    }
    pop():any{
         let popped= this.storage.head;
         this.storage.removeHead();
         return popped.data;
    }
    size():number{
        return this.storage.size;
    }
}
export default Stack;