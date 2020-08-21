 /**
   * . . . 
   * @example
   * ```typescript
   * const bst = new BST(5);
   * const numbers = [3, 2, 1, 0, 4, 8,6, 9, 10, 7]
   * for (let i = 0; i < numbers.length; i++) {
   *    const number = numbers[i]
   *    bst.insert(number)
   * }
   *const found = bst.find(1) ; // returns B 
   * ``` 
   */

import IBST from "./BST";
class BST  implements IBST{
    data:any|undefined 
    depth:number;
    left:BST;
    right:BST;
    constructor(data:any=Math.floor(Math.random()*100),depth:number=1){
        this.data=data;
        this.depth=depth;
    }
    insert(data:any):BST|void{
        if(data>=this.data){
           if(this.right){
               this.right.insert(data)
           }
           else{
            this.right= new BST(data,this.depth+1)
            return this.right;
           }
        }
        else{
            if(this.left){
                this.left.insert(data)
            }
            else{
                this.left = new BST(data,this.depth+1)
                return this.left;
            }
        }
    }
    find(data:any):any{
        if(data===this.data){
            return this
        }
        else if(data>=this.data){
            return this.right.find(data)
        }
        else{
            return this.left.find(data)
        }
    }
    min():any{
        if(this.left){
            return this.left.min();
        }
        else{
            return this.data;
        }
    }
    max():any{
        if(this.right){
            return this.right.max();
        }
        else{
            return this.data;
        }
    }
    dfsInorder(childs=[]):Array<any>{
        if(this.left){
            this.left.dfsInorder(childs);
        }
        childs.push(this.data)
        if(this.right){
            this.right.dfsInorder(childs);
        }
        return childs;
    }
    dfsPreOrder(childs=[]):Array<any>{
        childs.push(this.data)
        if(this.left){
            this.left.dfsPreOrder(childs)
        }
        if(this.right){
            this.right.dfsPreOrder(childs)
        }
        return childs;
    }
    dfsPostOrder(childs=[]):Array<any>{
        if(this.left){
            this.left.dfsPostOrder(childs)
        }
        if(this.right){
            this.right.dfsPostOrder(childs)
        }
        childs.push(this.data)
        return childs;
    }
    bfs(childs=[]){
        let queue : Array<BST>= [ this ];
        while (queue.length > 0) {
          const current = queue.shift();
          if(current){
            childs.push(current.data)
          }
         if(current.left){
            queue =queue.concat(current.left)
         }
         if(current.right){
            queue =queue.concat(current.right)
         }
        }
        return childs
    }
     
}
export default BST;

