"use strict";

// Առաջին տարբերակ

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

mySpreadFunction(array1,array2);

// Երկրորդ տարբերակ


const array3 = [];
const array4 = [1,2,3];
const array5 = ["Hello","dear","Anna"];

function mySpreadFunction2 () {
    let len = arguments.length;
    if (len>1) {
        for (let i=1; i<len; i++) {
            arguments[0].push.apply(arguments[0], arguments[i]);
        }
    }
    return console.log(array3);
}

mySpreadFunction2(array3,array4,array5);







