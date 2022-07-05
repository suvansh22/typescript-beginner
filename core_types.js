"use strict";
//number type String type boolean type
function add(n1, n2, showResult, resultPhrase) {
    return n1 + n2;
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is ';
//Object type
const obj = {
    name: 'suvansh',
    age: 22,
    hobbies: ['s']
};
const obj1 = {
    name: 'suvansh',
    age: 22,
    hobbies: ['s']
};
//array type
let arr1;
let arr2;
//tuple type
let tuple = ['suvansh', 2];
//enum type
var Role1;
(function (Role1) {
    Role1[Role1["PRINCIPAL"] = 0] = "PRINCIPAL";
    Role1[Role1["TEACHER"] = 1] = "TEACHER";
    Role1[Role1["STUDENT"] = 2] = "STUDENT";
})(Role1 || (Role1 = {}));
;
var Role2;
(function (Role2) {
    Role2[Role2["PRINCIPAL"] = 2] = "PRINCIPAL";
    Role2[Role2["TEACHER"] = 3] = "TEACHER";
    Role2[Role2["STUDENT"] = 4] = "STUDENT";
})(Role2 || (Role2 = {}));
;
var Role3;
(function (Role3) {
    Role3[Role3["PRINCIPAL"] = 2] = "PRINCIPAL";
    Role3[Role3["TEACHER"] = 10] = "TEACHER";
    Role3[Role3["STUDENT"] = 12] = "STUDENT";
})(Role3 || (Role3 = {}));
;
var Role4;
(function (Role4) {
    Role4["PRINCIPAL"] = "principal";
    Role4[Role4["TEACHER"] = 2] = "TEACHER";
    Role4["STUDENT"] = "student";
})(Role4 || (Role4 = {}));
;
