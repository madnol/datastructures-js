import IHashTable from "./HashTable";
import LinkedList from "../LinkedList/LinkedList";

class HashTable implements IHashTable {
    _storage:object;
    _size:number;
    constructor(size:number=Infinity) {
        this._storage = {};
        this._size=size;
    }
    insert(key:string, value:any):void{
        let index:number = this.hash(key);
        if(this._storage[index]){
            const linkedList = this._storage[index];
            linkedList.addToTail(value)
        }
        else{
         
            this._storage[index] = new LinkedList()
            this._storage[index].addToTail(value)
        }
    }
    retrieve(key:string):any{
        // O(1)
        const index = this.hash(key);
        // O(1)
        const linkedList = this._storage[index];
        if(linkedList){
            // if there is collision o(collision) if no O(1)
            return linkedList.size===1 ? [linkedList.head.data] : linkedList.nodesAsArray()
        }
        else{
            return []
        }
        
    }
    delete(key:string):void{
        const index = this.hash(key);
        const linkedList = this._storage[index];
        if(linkedList){
            delete this._storage[index]
            return 
        }
        else{
            return 
        }
    }
    hash(key:string){
        let chars = 0;
        for(let i = 0; i<key.length;i++){
            chars+=key.charCodeAt(i)
        }
        return chars % this._size;
    }
}
export default  HashTable