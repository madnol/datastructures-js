# Hash Table


Hash table is using a simple string hash function as example


```ts
hash(key:string){
        let chars = 0;
        for(let i = 0; i<key.length;i++){
            chars+=key.charCodeAt(i)
        }
        return chars % this._size;
    }
```


As storage  it is using an object 

And as bucket it  using LinkedList at specific index.

```ts
const linkedList = this._storage[index];
linkedList.addToTail(value)

```


| Status | Name     | Description                  | Complexity          |
|--------|----------|------------------------------|---------------------|
| ✅      | retrieve | retrieving value with key    | O(1) / O(collision) |
|   ✅     | insert   | inserting new key value pair | O(1)                |
| ✅       | delete   | deletes bucket               | O(1)                |
|   ✅     | hash     | hashing key                  | O(m),m =key.length  |


