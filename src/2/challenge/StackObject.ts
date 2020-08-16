import IStackObject from "./StackObject";
class StackObject  implements IStackObject{
    storage:object
    size:number
    capacity:number
    min:number
    constructor(capacity=Infinity){
        this.storage ={};
        this.size=0;
        this.capacity=capacity;
        this.min=Infinity;
    }
    push(data:number):object{
        if(this.size<this.capacity){
            if(typeof data==="number"){
                if(data<this.min){
                    this.min=data;
                }
                this.storage[this.size] = data;
                this.size++
            }
            else{
                throw new Error(`Data type must be a number`)
        
            }
        }
        else{
            throw new Error(`Maximum capacity ${this.capacity} has been reached. Remove one from stack to add new one.`)
        
        }
        return this.storage;
    }
    peek():number{
        return this.storage[this.size]
    }
    pop():number{
        let deleted= this.storage[this.size-1]
        delete this.storage[this.size-1];
        this.size--;
        return deleted;
    }
    peekMin():number{
        return this.min
    }
}
export default StackObject;