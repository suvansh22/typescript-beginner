// type P = {x: number; y: number}
// type PKey = keyof P;

// type Arrayish = {[n: number]: string};
// type ArrayishKey = keyof Arrayish;


// type Arrayish1 = {[k: string]: unknown};
// type ArrayishKey1 = keyof Arrayish1;


// const obj2: Arrayish1 = {
//     1: "one",
//     2: "two",
//     3: "three"
// };

// const obj3: Arrayish1 = {
//     "one": 1,
//     "two": 2,
//     "three": 3
// };

// type Predicate = (x:unknown) => boolean;
// type K = ReturnType<Predicate>; 

// const MyArray = [
//     { name: "Alice", age: 15 },
//     { name: "Bob", age: 23 },
//     { name: "Eve", age: 38 },
//   ];

// type Person = typeof MyArray[number];

interface IdLabel {
    id: number /* some fields */;
  }
  interface NameLabel {
    name: string /* other fields */;
  }
  type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

  function createLabel<T extends string | number>(idOrName: T): NameOrId<T> {
   throw "unimplemented"
  }
  let a = createLabel("");
  let b = createLabel(23);

  const last = <T>(arr: T[]): T => {
    return arr[arr.length-1];
  };

  const v = last<string>(['a','b'])
//   const v = last([1,2])
//   const v = last(['a',2,false])

const makeArray = <X, Y=string|null>(x:X, y: Y): [X,Y]=> {
  return [x,y]
}

const v1 = makeArray<number>(2,null);
//   const v1 = makeArray(2,1);
//   const v1 = makeArray('b','a');

console.log(v1);

const makeFullName = <T extends {firstName: string, lastName: string}>(obj: T)=> {
  return {
    ...obj,
    fullname: obj.firstName + " " + obj.lastName
  };
}


const v2 = makeFullName({
  firstName: 'suvansh',
  lastName: 'agrawal',
  age: 12,
});

interface Tabs<T> {
  id: string;
  dateStamp: Date;
  position: number;
  data: T;
}

type numberTabs = Tabs<number>;
type stringTabs = Tabs<string>;

const tab = {
  id: '1',
  dateStamp: new Date(),
  position: 0,
  data: 123
} as numberTabs;


interface Props {
  name: string;
  age: number;
  gender: "Male" | "Female";
}
type React = {
  <T>(arg: T):T
}
const lastV2: React = (x) => {
  return x;
} 

const v3 = lastV2<Props>({name: 'sua', age: 2, gender: "Male"})

interface FormProps<T> {
  values: T;
  children: (valuse: T) => T;
}

const Form = <T>({values, children}: FormProps<T>) => {
  return
}

/*
  return 
    <div>
      <Form<{firstname: string | null}> values={{firsname: "suvansh"}}>
        {values => <div>{values.firsname}</div>}
      </Form>
    </div>
 */

    type MessageOf<T extends {message: unknown}> = T["message"];
    interface Email {
      message: number
    }
    let message:MessageOf<Email> = 2;

    type MessageOfConditional <T> = T extends {message: unknown} ? T["message"] : never 

    let message1:MessageOfConditional<boolean>;

    type GetReturnType<T> = T extends (...args: never[]) => infer Return ? Return : never;

    type Num = GetReturnType<() => boolean[]>;
    type Num1 = GetReturnType<string>;

    type OptionsFlags<T> = {
      [Property in keyof T]: boolean;
    };
    type featureFlags = {
      darkMode: () => void;
      newUserProfile: () => void;
    }
    type FeatureOptions = OptionsFlags<featureFlags>
    const obj2 = {
      name: "suvansh",
      age: 24
    };

    type CreateMutable<T> = {
      -readonly [Property in keyof T]: T[Property];
    }
    type Concrete<T> = {
      [Property in keyof T] -?: T[Property];
    }

    type unMutableAndOptional = {
      readonly name: string;
      age: number;
      gender?: string;
    }

    let v4:Concrete<CreateMutable<unMutableAndOptional>> = {
      name: "suvansh",
      age: 2,
      gender: "male"
    }

    type Getter<T> = {
      [Property in keyof T as `get${Capitalize<string & Property>}`]: T[Property];
    }
    type RemoveField<T> = {
      [Property in keyof T as Exclude<Property, "getPosition">]: any;
    }
    type GetterTabs = Getter<Tabs<number>>;
    type GetterTabsWithout = RemoveField<GetterTabs>;

    type Lang = "en" | "Hi" | "Ru";
    type Typo = "Dishes" | "Calls" | "Messages";
    type TypoLang = `${Lang}_${Typo}`;

    type a1 = {
      [keys: string]: any;
    };
    type a2<T> = {
      [Property in keyof T]: T[Property];
    };
    type exmpObj = a2<Tabs<number>>;

    type a3<T extends {id: string, dateStamp: Date}> = {
      [E in T as E["id"]]: (event: E) => void;
    }

    type exmObj2 = a3<Tabs<number>>;

    type ExtractPII<T> = {
      [prop in keyof T]: T[prop] extends string ? true : false
    }

    type TabsExtaction = ExtractPII<Tabs<number>>

    type PropEventSource<T> = {
      on(eventName: `${string & keyof T}Changed`, callback: (newValue: any)=> void): void;
    }

    declare function makeWatchedObject<T>(obj: T): T & PropEventSource<T>;

    const person = makeWatchedObject({
      firstName: "Saoirse",
      lastName: "Ronan",
      age: 26
    });

    type PropEventSourceWithKeyExtract<T> = {
      on<key extends string & keyof T>(eventName: `${key}Changed`, callback: (newValue: T[key]) => void): void;
    }

    declare function makeWatchedObjectv1<T>(obj: T): T & PropEventSourceWithKeyExtract<T>;

    const person1 = makeWatchedObjectv1({
      firstName: "Saoirse",
      lastName: "Ronan",
      age: 26
    });

    function test<t, key extends keyof t>(arg: t[key]): t{
     throw "";
    }

    const person2 = test<Tabs<number>, keyof Tabs<number>>(2);