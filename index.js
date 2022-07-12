"use strict";

const array = [];
const array1 = [1,2,3];
const array2 = ["Hello","dear","Anna"];

function mySpreadFunction (item1,item2) {
    for (let i=0; i<item1.length; i++) {
        array.push(item1[i]);
    }
    for (let i=0; i<item2.length; i++) {
        array.push(item2[i]);
    }
    
    return console.log(array);
}

// mySpreadFunction(array1,array2);
mySpreadFunction(array1,array2);



