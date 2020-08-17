import INode from "./Node";

class Node implements INode {
    prev:null;
    data:any;
    next:null;
    constructor(data:any){
        this.prev=null;
        this.data=data;
        this.next=null;
    }
    setNextNode(data:any):void{
        this.next=data;
    }
    setPrevNode(data:any):void{
        this.prev=data;
    }

}
export default Node;