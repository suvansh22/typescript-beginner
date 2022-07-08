//generics

function genericFunction<Type>(arg: Type):Type{
    return arg
}

//ways of using generic function
let output1 = genericFunction<string>("string");
let output2 = genericFunction(24);

//generic type variable

// function loggingIdentity<Type>(arg: Type[]): Type[]{
//     return arg;
// }
const loggingIdentity: <Type>(arg: Type[])=>Type[] = (arg) => {
    console.log(arg.length)
    return arg;
}
let output3 = loggingIdentity<number>([1,2,3,4]);

//generic types

function identity<Type>(arg: Type): Type{
    return arg;
}

//let identityFatArrowFunc: <Type>(arg: Type) => Type = identity;
//or
let identityFatArrowFunc: {<Type>(arg: Type): Type} = identity;

//generic interface
interface GenericIdentityFn{
    <Type>(arg: Type): Type
}

interface GenericIdentityFnWithGenericParameter<Type>{
    (arg: Type): Type
}

//generic classes
// class GenericNumber<NumType> {
//     zeroValue: NumType;
//     add: (x: NumType, y: NumType) => NumType;
//   }

//generic Constraints

interface GenericContraints{
    length: number
}

function genericContraints<Type extends GenericContraints>(arg: Type):Type{
    console.log(arg.length);
    return arg;
}

class Animal{
    numLegs: number = 4;
}

class Lion extends Animal{
    type: string = "Carnivorous";
}

function createInstance<A>(c: new ()=>A): A{
    return new c();
}

//advanced typescript
const arr = [1,2,3,4,5] as const; //readonly

arr.map((_, idx) => {
    const c = arr[idx];
})