//these are primitive types and are stored indipendently
//primitives are copied by value and have different memory locations
let x = 10;
let y = x;
x = 20;

console.log("x:", x);
console.log("y: ", y);

//objects are copied by refrence and share same memory location
let a = { value: 10};
let b = a;

a.value = 100;

console.warn("a: ", a);
console.warn("b: ", b);


let val = 10;
function increment(val){
    //this val has a scope in this function block only
    //the incremented value will be visible in this scope only
    val++;
}

increment(val);
console.log("val: ", val);

let value = {value: 10};
function increase(value){
    //now the const value is an object so the same memory will be shared
    //and the incremented value can be accessed outside of this scope also
    value.value++;
}
increase(value);
console.log(value);