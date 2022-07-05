"use strict";
// union type
function ages(input1, input2) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
function print(num) {
    console.log(num);
}
function print1(num) {
    console.log(num);
    return;
}
function print3(num) {
    console.log(num);
    return;
}
function add1(n1, n2) {
    return n1 + n2;
}
//function type
var func;
func = add1;
