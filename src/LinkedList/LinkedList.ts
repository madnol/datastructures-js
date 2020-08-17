import ILinkedList from "./LinkedList";
import Node from "../Node/Node"
class LinkedList implements ILinkedList {
    head: Node | null;
    tail: Node | null;
    size: number;
    constructor(size: number = 0) {
        this.head = null;
        this.tail = null;
        this.size = size;
    };
    addToHead(data: any): void {
        const nodeToAdd = new Node(data);
        const currentHead = this.head;
        if (currentHead) {
            this.head = nodeToAdd;
            currentHead.setPrevNode(this.head);
            this.head.setNextNode(currentHead);
        }
        else {
            this.head = nodeToAdd;
            this.tail = nodeToAdd;
        }
        this.size++;
    };
    removeHead(): any {
        const head = this.head;
        if (head) {
           if(head.next){
                this.head = head.next;
                this.head.setPrevNode(null)
                return head.data;
           }
           else{
               this.head=null;
               return  head.data;
           }
        }
        else {
            return;
        }
        this.size--
    };
    addToTail(data: any): void {
        const nodeToAdd = new Node(data);
        const currentTail = this.tail;
        if (currentTail) {
            currentTail.setNextNode(nodeToAdd);
            nodeToAdd.setPrevNode(currentTail);
            this.tail = nodeToAdd;
        }
        else {
            this.head = new Node(data)
            this.tail = new Node(data);
        }

    };
    removeTail(): any {
        const prevNode = this.tail.prev;
        this.tail = prevNode;
        this.tail.setNextNode(null)
    };
    find(callback: Function): any {
        if (callback && callback instanceof Function) {
            let current = this.head;
            let found = false;
            while (current.next) {
                if (callback(current)) {
                    found = true
                    break;
                }
                current = current.next
            }
            return found ? current : undefined;
        }
        else {
            throw new Error("Callback is not valid")
        }
    };
    findIndex(callback: Function): any {
        let index = -1;
        if (callback && callback instanceof Function) {
            let current = this.head;
            let i = 0
            while (i < this.size) {
                if (callback(current,i)) {
                    index=i;
                    break;
                }

                current = current.next
                i++
            }
            return index;
        }
        else {
            throw new Error("Callback is not valid")
        }
    };
    toString(reverse: boolean = false): void {
        let current = this.head;
        if (this.size > 0 && current) {
            if (!reverse) {
                let str: string = "<head>"
                while (current.next) {
                    str += `<${current.data}>`
                    current = current.next;
                }
                str += `<${current.data}><tail>`
                console.log(str)
            }
            else {
                let str: string = "<tail>"
                while (current.prev) {
                    str += `<${current.data}>`
                    current = current.prev;
                }
                str += `<${current.data}><head>`
                console.log(str)
            }
        }
        else {
            console.log("Empty")
        }
    };
    reverse() {
        // NOT COMPLETED
    }
    concat(list: LinkedList): LinkedList {
        if (list instanceof LinkedList) {
            let current = list.head
            if(current){
                this.tail=current;
                current.setPrevNode(this.tail)
            }
           
            return this;
        }
        else {
            throw new Error(`list argument expected to be an instance of LinkedList , found ${typeof list}`)
        }
    }
    nodesAsArray(): Array<Node> {
        let nodes: Array<Node> = [];
        let current = this.head;
        while (current.next) {
            nodes.push(current);
            current = current.next;
        }
        nodes.push(this.tail)
        return nodes;
    }
    every(callback: Function): boolean {
        let applies = true;
        if (callback && callback instanceof Function) {
            let current = this.head;
            while (current.next) {
                if (!callback(current)) {
                    applies = false
                    break;
                }
                current = current.next
            }
            return applies;
        }
        else {
            throw new Error("Callback is not valid")
        }
    }
    fill(data: any): LinkedList {
        this.head = null;
        this.tail = null;
        let size = this.size;
        this.size = 0;
        while (size > 0) {
            this.addToHead(data)
            size--;

        }
        return this;
    }
    filter(callback: Function): LinkedList {
        let matches = new LinkedList();
        if (callback && callback instanceof Function) {
            let current = this.head;
            let i = 0
            while (i < this.size) {
                if (callback(current,i)) {
                    if (matches.size===1) {
                        matches.addToTail(current.data)
                    }
                    else {
                        matches.addToHead(current.data)
                    }

                }

                current = current.next
                i++
            }
            
         
            return matches;
        }
        else {
            throw new Error("Callback is not valid")
        }
    }
    includes(data: any): boolean {
        let includes = false;
        let current = this.head;
        while (current.next) {
            if (current.data === data) {
                includes = true
                break;
            }
            current = current.next
        }
        return includes;
    }
    forEach(callback: Function): void {
        if (callback && callback instanceof Function) {
            let current = this.head;
            let size = this.size;
            while (size > 0) {
                callback(current)
                current = current.next
                size--
            }
        }
        else {
            throw new Error("Callback is not valid")
        }

    }
    map(callback: Function): LinkedList {
        if (callback && callback instanceof Function) {
            let current = this.head;
            let i = 0
            while (i < this.size) {
                current.data = callback(current.data, i)
                current = current.next
                i++
            }
        }
        else {
            throw new Error("Callback is not valid")
        }
        return this;
    }
    reduce(callback: Function, defaultValue: any): any {
        let value = defaultValue;
        if (callback && callback instanceof Function) {
            let current = this.head;
            let i = 0
            while (i < this.size) {
                value = callback(value, current.data, i)
                current = current.next
                i++
            }
        }
        else {
            throw new Error("Callback is not valid")
        }
        return value;
    }
    some(callback: Function): boolean {
        let applies = false;
        if (callback && callback instanceof Function) {
            let current = this.head;
            while (current.next) {
                if (callback(current)) {
                    applies = true
                    break;
                }
                current = current.next
            }
            return applies;
        }
        else {
            throw new Error("Callback is not valid")
        }
    }
    sort(list:LinkedList=this,callback:Function=(a,b)=>a-b):LinkedList{
        // not completed + buggy
        if(list.size===1){
            return list;
        }
         
        let mid = Math.floor(list.size/2);
        let leftList = list.slice(0,mid);
        let rightList = list.slice(mid,list.size);
       
        function merge(left,right){
            let sortedList = new LinkedList();
            while(left.head && right.head){
                
                if(left.head.data<right.head.data){
                    sortedList.addToHead(left.head.data);
                    left.removeHead();
                }
                else{
                    sortedList.addToHead(right.head.data);
                    right.removeHead();
                }
            }
            
           
            return  sortedList.concat(left).concat(right)
        }
         
        return merge(this.sort(leftList,callback),this.sort(rightList,callback));
    }
    slice(startIndex:number,endIndex:number):LinkedList{
        return this.filter((node,i)=>i>=startIndex && i<=endIndex?node:false)
    }

}
export default LinkedList;