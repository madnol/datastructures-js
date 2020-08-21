import BST from "./BST"
describe("Testing binary search tree...", function () {
    const bst = new BST(8);
    const numbers = [8, 3, 1, 6, 4, 7, 10, 14, 13]
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        bst.insert(number)
    }
    it("should insert/find with correct order", function () {
        const found = bst.find(1)
        expect(found.depth).toBe(3);
    });
    it("should find min correctly", function () {
        const min = bst.min()
        expect(min).toBe(Math.min(...numbers));
    });
    it("should find max correctly", function () {
        const max = bst.max()
        expect(max).toBe(Math.max(...numbers));
    });
    it("should return depth first traversal preordered childs", function () {
        const preorder = bst.dfsPreOrder()
        expect(preorder.shift()).toBe(8);
    });
    it("should return depth first traversal inordered childs", function () {
        const inorder = bst.dfsInorder()
        expect(inorder.shift()).toBe(1);
    });
 
    it("should return depth first traversal postordered childs", function () {
        const postorder = bst.dfsPostOrder()
        expect(postorder.pop()).toBe(8);
    });

    it("should return breadth first traversal  childs correctly", function () {
        const postorder = bst.bfs()
        expect(postorder.pop()).toBe(13);
    });
   
});

 

