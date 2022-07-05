//number type String type boolean type
function add(n1: number, n2: number, showResult: boolean, resultPhrase: String){
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is ';
//Object type
const obj:{} = {
    name: 'suvansh',
    age: 22,
    hobbies: ['s']
}

const obj1:{
    name: string;
    age: number;
    hobbies: string[];
} = {
    name: 'suvansh',
    age: 22,
    hobbies: ['s']
}

//array type
let arr1: (string|number|boolean)[];
let arr2: string[];
 
//tuple type
let tuple: [string, number] = ['suvansh', 2];

//enum type
enum Role1 {PRINCIPAL, TEACHER, STUDENT};
enum Role2 {PRINCIPAL=2, TEACHER, STUDENT};
enum Role3 {PRINCIPAL=2, TEACHER=10, STUDENT=12};
enum Role4 {PRINCIPAL='principal', TEACHER=2, STUDENT='student'};