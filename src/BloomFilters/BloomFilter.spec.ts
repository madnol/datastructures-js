import BloomFilter from "./BloomFilters"

describe("Testing bloom filter...", () => {
    const google = "http://www.google.com"
    const twitter = "http://www.twitter.com"
    const bloomFilter = new BloomFilter(100)
    it(`should return true if ${google} exists in bloom filter`, () => {
        bloomFilter.add(google)
        expect(bloomFilter.exists(google)).toBe(true)
    })
    it(`should return false if ${twitter} not exists in bloom filter`, () => {
        expect(bloomFilter.exists(twitter)).toBe(false)
    })
    it('handles many items', () => {
        const names = ["Brian", "Simona", "Sarah", "Asim", "John", "Sean", "Jessie", "Paige", "Ashley"];
        names.forEach((item) => bloomFilter.add(item));
        names.forEach((item) => expect(bloomFilter.exists(item)).toBe(true));
        ["Sam", "Chris", "Taylor", "Florence"].forEach((item) => expect(bloomFilter.exists(item)).toBe(false));
    });
})