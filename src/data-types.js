const num = 1;
console.log("num",typeof num);

const str = "1";
console.log("str",typeof str);

const bool = true;
console.log("bool",typeof bool);

let x; //undefined because no value is assigned
console.log("x",typeof x);

const y = null; //object, null is considered an object, can be placeholder for value
console.log("y",typeof y);

const obj = {}; //object, key-value pairs
console.log("obj",typeof obj);

const arr = []; //object, array is object that contains set of elements
console.log("arr",typeof arr);

//loop
let defaults = [1, 2, 3]
for (let i = 0; i < defaults.length; i++){
    console.log(defaults[i])
}

//loop keys  of an object
//use for-in loop
let person = {
    name: "joni", 
    age: 3
}

for (let key in person){
    console.log(key)
}