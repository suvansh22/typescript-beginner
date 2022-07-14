"use strict";
// type P = {x: number; y: number}
// type PKey = keyof P;
function createLabel(idOrName) {
    throw "unimplemented";
}
let a = createLabel("");
let b = createLabel(23);
const last = (arr) => {
    return arr[arr.length - 1];
};
const v = last(['a', 'b']);
//   const v = last([1,2])
//   const v = last(['a',2,false])
const makeArray = (x, y) => {
    return [x, y];
};
const v1 = makeArray(2, null);
//   const v1 = makeArray(2,1);
//   const v1 = makeArray('b','a');
console.log(v1);
const makeFullName = (obj) => {
    return Object.assign(Object.assign({}, obj), { fullname: obj.firstName + " " + obj.lastName });
};
const v2 = makeFullName({
    firstName: 'suvansh',
    lastName: 'agrawal',
    age: 12,
});
const tab = {
    id: '1',
    dateStamp: new Date(),
    position: 0,
    data: 123
};
const lastV2 = (x) => {
    return x;
};
const v3 = lastV2({ name: 'sua', age: 2, gender: "Male" });
const Form = ({ values, children }) => {
    return;
};
let message = 2;
let message1;
const obj2 = {
    name: "suvansh",
    age: 24
};
let v4 = {
    name: "suvansh",
    age: 2,
    gender: "male"
};
const person = makeWatchedObject({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
});
const person1 = makeWatchedObjectv1({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
});
function test(arg) {
    throw "";
}
const person2 = test(2);
