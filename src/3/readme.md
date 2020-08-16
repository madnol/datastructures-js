# Queues 


**F**irst item added

**I**nto the queue

**F**irst one taken

**O**ut of the queue


```ts

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
        return this.storage[this.storage.length-1]
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

```