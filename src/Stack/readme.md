# Stacks


**L**ast item added 

**I**nto the stack will be the 

**F**irst one taken 

**O**ut the stack.

```js

interface IStack{
    storage:Array<any>
}
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

```



### Challenge 


* Implement a stack without using an array of string as storage

* Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.



[Solution](./challenge/StackObject.ts)