const XXHash = require('xxhash');
class BloomFilter {
    storage: Array<number>;
    size: number;
    n :number;
    filled:number;
    constructor(size: number = 100) {
        this.storage = new Array(size).fill(0);
        this.size = size;
        this.n=0;
        this.filled=0;
    }
    add(value): void {
        const {i1, i2,i3} = this.hash(value)
        this.storage[i1]=1;
        this.storage[i2]=1;
        this.storage[i3]=1;
        this.n++
        
    }
    exists(value): boolean {
        const {i1, i2,i3} = this.hash(value) 
        return !!(this.storage[i1] && this.storage[i2] && this.storage[i3])
    }
    hash(value){
        const i1 = this.hash1(value);
        const i2 = this.hash2(value);
        const i3 = this.hash3(value);
        return {i1,i2,i3}
    }
    hash1(value): number {
        return Math.abs(XXHash.hash(Buffer.from(value, 'utf8'), 0xABCD) % this.size)
    }
    hash2(value): number {
        return Math.abs(XXHash.hash(Buffer.from(value, 'utf8'), 0x1234) % this.size)
    }
    hash3(value): number {
        return Math.abs(XXHash.hash(Buffer.from(value, 'utf8'), 0x6789) % this.size)
    }


}
export default BloomFilter