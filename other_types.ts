// union type


type combinable = string | number;

function ages(input1: combinable, input2: combinable): combinable{
    let result: string | number;
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString()
    }
    return result;
}

function print(num: number): void{
    console.log(num);
}


function print1(num: number): void{
    console.log(num);
    return;
}

function print3(num: number): undefined{
    console.log(num);
    return;
}

function add1(n1: number, n2:number): number{
    return n1 + n2;
}

//function type

var func: (a: number, b: number) => number;
func = add1;

type animals = {eat: string};
type dog = animals & {voice: string};

let newDog: dog;
newDog = {
    eat: '',
    voice: ''
}