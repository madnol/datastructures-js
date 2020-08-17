import IQueue from './Queue';
import LinkedList from '../LinkedList/LinkedList';
class Queue implements IQueue  {
    storage:LinkedList
    constructor(){
        this.storage = new LinkedList()
    }
    enqueue(value:any):LinkedList{
        this.storage.addToHead(value)
        return this.storage;
    }
    peek():any{
        return this.storage.tail.data;
    }
    dequeue():any{
         let popped= this.storage.removeTail();
         return popped;
    }
    size():number{
        return this.storage.size;
    }
}
export default Queue;