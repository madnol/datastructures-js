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
            if (head.next) {
                this.head = head.next;
                this.head.setPrevNode(null)
                this.size--
                return head.data;
            }
            else {
                this.head = null;
                this.removeTail()
                return head.data;
            }
        }
        else {
            return;
        }

    };
    addToTail(data: any): void {
        const nodeToAdd = new Node(data);
        const currentTail = this.tail;
        if (currentTail) {
            currentTail.setNextNode(nodeToAdd);
            nodeToAdd.setPrevNode(currentTail);
            this.tail = nodeToAdd;
            this.size++
            
        }
        else {
            this.addToHead(data)
            
        }
        
    };
    removeTail(): any {
        const tail = this.tail;
        if (tail) {
            if (this.tail.prev) {
                const prevNode = tail.prev;
                this.tail = prevNode;
                this.tail.setNextNode(null);
                this.size--;
                return tail.data;

            }
            else {
                this.head = null;
                this.tail = null;
                this.size--;
                return tail.data;
            }
        }
        else {
            throw new Error("Linked list is empty")
        }

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
                if (callback(current, i)) {
                    index = i;
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
    toString(): void {
        let current = this.head;
        if (this.size > 0 && current) {
            let str: string = "<head>"
            while (current.next) {
                str += `<${current.data}>`
                current = current.next;
            }
            str += `<${current.data}><tail>`
            console.log(str)
        }
        else {
            console.log("Empty")
        }
    };
    reverse() {
        let reversed = new LinkedList();
        let i = 0;
        let current = this.tail;
        while (i < this.size && current) {
            reversed.addToTail(current.data)
            current = current.prev;
            i++
        }
        return reversed;
    }
    concat(list: LinkedList): LinkedList {
        
        if (list instanceof LinkedList) {
           
             if(list.head){
                this.tail.setNextNode(list.head);
                list.head.setPrevNode(this.tail)
             }
             
            return this;
        }
        else {
            throw new Error(`list argument expected to be an instance of LinkedList , found ${typeof list}`)
        }
    }
    nodesAsArray(): Array<any> {
        let nodes: Array<any> = [];
        let current = this.head;
        while (current.next) {
            nodes.push(current.data);
            current = current.next;
        }
        nodes.push(this.tail.data)
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
            let m = 0;
            while (i < this.size&& current) {
                if (callback(current, i)) {
                    matches.addToTail(current.data)
                   m++
                }
                current = current.next
                i++
            }
            matches.size=m;
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
    sort(list: LinkedList = this, callback: Function = (a, b) => a - b): LinkedList {
        // not completed + buggy
        if (list.size === 1) {
            
            return list;
        }
         else{
            let mid = Math.floor(list.size / 2);
            let leftList = list.slice(0, mid);
            let rightList = list.slice(mid, list.size);
             
            function merge(left, right) {
                
                let sortedList = new LinkedList();
                while (left.head && right.head) {
                    if (left.head.data < right.head.data) {
                        sortedList.addToHead(left.head.data);
                        left.removeHead();
                    }
                    else {
                        sortedList.addToHead(right.head.data);
                        right.removeHead();
                    }
                }
    
                return sortedList.concat(right).concat(left)
            }
            return merge(this.sort(leftList, callback), this.sort(rightList, callback));
         } 
         
    }
    slice(startIndex: number, endIndex: number): LinkedList {
        return this.filter((node, i) => i >= startIndex && i < endIndex ? node : false)
    }

}
export default LinkedList;