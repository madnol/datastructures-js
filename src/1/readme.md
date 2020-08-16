## Pseudoclassical OOP
 
The Pseudoclassical style in JavaScript mimics the class-based languages (like Java and C++). JavaScript does not provide a class implementation per se. The class keyword added in ES6 is actually just syntactical sugar. JavaScript is still just a prototype-based language.

## Instantiation
Creating a new instance of an object with a constructor function, using the new keyword
An object 


 

```js

function Building(floors){

    this.what="building";
    this.floors = floors;
}

Building.prototype.countFloors = function(){
    console.log(`I have ${this.floors} floors`);
}
// creating instance

const myHouse = new Building(3);

// {what:"building",floors:3}

```




