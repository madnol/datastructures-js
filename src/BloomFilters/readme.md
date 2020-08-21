# Bloom Filters

Bloom filters are fast and memory-efficient probabilistic  data structures when you want to know if something is not already in a collection.


## How it works ?

Bloom filters are hashing an input and creating multiple indices with multiple hashing functions. And it is marking each indices to true.

**Example** 

This is initial  state of BF

| 0 |  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|----|---|---|---|---|---|---|---|---|
| 0 |  0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

Lets assume index of elephant is 3 , 1 , 6 


| 0 |  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|----|---|---|---|---|---|---|---|---|
| 0 |  1 | 0 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |


Lets assume index of cat  is 4 , 7 , 6 



| 0 |  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
|---|----|---|---|---|---|---|---|---|---|
|   |  1 |   | 1 | 1 |   | 1 | 1 |   |   |


So when we ask :  do you have cat ? 


It will run same hashing functions and get same indices for checking storage, if storage returns false for values at that indices , it means we dont have it. if returns true  it means maybe.


## False Positives


Different combinations of multiple datas indices can create a correct identifier for a value which is not in our list. So when you ask for a value it can say true (maybe) but , it cannot be in the list in reality

This is the **maybe** situtation.


To reduce uncertainty , we have to do trade-off between memory & and certainty.

If we increase memory allocation for bloom filters we can make this data structures more certain.







## When to use ? 

If its ok 


1- You cant add data but cant remove.

2- When answer is maybe in set or not in set ( So you are looking for falsy response.)

## Approximating the number of items in a Bloom filter 


Swamidass & Baldi (2007) showed that the number of items in a Bloom filter can be approximated with the following formula,


$n=-m/k*ln[1-x/m]$


 
where $n$ is an estimate of the number of items in the filter, $m$ is the length (size) of the filter, $k$ is the number of hash functions, and $x$ is the number of bits set to one.

## Positive False Rate Approximation

$(1-e^[kn/m]^k$

## Complexity 

Insertion and check both   $O(k)$ where k is number of hashing functions

 




## Real World Examples

- Medium uses Bloom filters to avoid recommending articles a user has previously read.


- Microsoft Bing (search engine) uses multi-level hierarchical Bloom filters for its search index, BitFunnel. Bloom filters provided lower cost than the previous Bing index, which was based on inverted files.

- The Google Chrome web browser used to use a Bloom filter to identify malicious URLs. Any URL was first checked against a local Bloom filter, and only if the Bloom filter returned a positive result was a full check of the URL performed (and the user warned, if that too returned a positive result).

- Google Bigtable, Apache HBase and Apache Cassandra and PostgreSQL use Bloom filters to reduce the disk lookups for non-existent rows or columns. Avoiding costly disk lookups considerably increases the performance of a database query operation.


[Source: Wikipedia](https://en.wikipedia.org/wiki/Bloom_filter#Examples)