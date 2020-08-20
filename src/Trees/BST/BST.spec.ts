import BST from "./BST"
describe("Testing binary search tree...", function () {
    const bst = new BST(5);
    const numbers = [3, 2, 1, 0, 4, 8,6, 9, 10, 7]
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        bst.insert(number)
    }
    it("should insert/find with correct order", function () {
        const found = bst.find(1)
        expect(found.depth).toBe(4);
    });
    it("should find min correctly", function () {
        const min = bst.min()
        expect(min).toBe(Math.min(...numbers));
    });
    it("should find max correctly", function () {
        const max = bst.max()
        expect(max).toBe(Math.max(...numbers));
    });
    it("depth first traversal should return sorted list", function () {
        const sorted = bst.depthFirstTraversal()
        expect(sorted).toEqual([
            0, 1, 2, 3, 4,
            5, 6, 7, 8, 9,
           10
         ]);
    });
});

 

