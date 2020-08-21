class AVL{
    left:AVL ;
    right:AVL;
    data:any | null;
    depth:number;
    constructor(data:any, depth:number=1){
        this.data=data;
        this.right = null;
        this.left = null;
        this.depth = depth;
    }
    insert(data:any){
        if(this.data>=data){
            this.right.insert(new AVL(data,this.depth+1))
        }
        else{
            this.left.insert(new AVL(data,this.depth+1))
        }
        if(!this.right || this.right.depth < this.left.depth){
            this.depth = this.left.depth +1 ;
        }
    }
}