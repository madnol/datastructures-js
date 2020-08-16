import StackObject from "./2/challenge/StackObject";

const stackObject = new StackObject();
stackObject.push(8);
 
stackObject.push(9);
stackObject.push(10);
stackObject.push(1);
stackObject.push(2);
console.log(`Min in stack is ${stackObject.peekMin()}`)

 
 