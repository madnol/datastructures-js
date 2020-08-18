import HashTable from "./HashTable/HashTable";

const hashTable = new HashTable(2);

 hashTable.insert("admin",{name:"ubeyt",lastName:"demir"});
 hashTable.insert("user",{name:"müslüm",lastName:"demir"});
 hashTable.insert("user",{name:"nurefşan",lastName:"demir"});
 console.log(hashTable.retrieve("admin"))
