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
        // if stack size is less than max capacity
        if(this.storage.size<this.max){
            // add new value to linked list
            this.storage.addToHead(value)
            if(value<this.minData){
                // keep track of min value
                this.minData=value
            }
             
            return this.storage;
        }
        else{
            
            throw new Error("Stack overflow")
        }
    }
    peek():any{
        // returns last element added to stack
        return this.storage.head.data;
    }
    pop():any{
        if(this.storage.size>0){
            // returns last element from stack and removes .
            let popped= this.storage.head;
            this.storage.removeHead();
            return popped.data;
        }
        else{
            throw new Error("Stack is empty");
        }
    }
    size():number{
    
        return this.storage.size;
    }
}
export default Stack;