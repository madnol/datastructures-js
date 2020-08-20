import IBST from "./BST";
class BST  implements IBST{
    data:any|undefined 
    depth:number;
    left:BST;
    right:BST;
    constructor(data:any,depth:number=1){
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
    depthFirstTraversal(childs=[]):Array<any>{
        if(this.left){
            this.left.depthFirstTraversal(childs);
        }
        childs.push(this.data)
        if(this.right){
            this.right.depthFirstTraversal(childs);
        }
        return childs;
    }
     
}
export default BST;