import BST from "./Trees/BST/BST";

const bst = new BST(8)
const values = [3, 1, 6, 4, 7, 10, 14, 13];
values.forEach(value=>bst.insert(value))
console.log(bst.bfs())

