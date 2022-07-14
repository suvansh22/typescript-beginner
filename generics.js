"use strict";
//generics
function genericFunction(arg) {
    return arg;
}
//ways of using generic function
let output1 = genericFunction("string");
let output2 = genericFunction(24);
//generic type variable
// function loggingIdentity<Type>(arg: Type[]): Type[]{
//     return arg;
// }
const loggingIdentity = (arg) => {
    console.log(arg.length);
    return arg;
};
let output3 = loggingIdentity([1, 2, 3, 4]);
//generic types
function identity(arg) {
    return arg;
}
//let identityFatArrowFunc: <Type>(arg: Type) => Type = identity;
//or
let identityFatArrowFunc = identity;
function genericContraints(arg) {
    console.log(arg.length);
    return arg;
}
class Animal {
    constructor() {
        this.numLegs = 4;
    }
}
class Lion extends Animal {
    constructor() {
        super(...arguments);
        this.type = "Carnivorous";
    }
}
function createInstance(c) {
    return new c();
}
//advanced typescript
const arr = [1, 2, 3, 4, 5]; //readonly
arr.map((_, idx) => {
    const c = arr[idx];
});
