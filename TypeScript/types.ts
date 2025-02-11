//Boolean (True or False)
let isOpen: boolean;
isOpen = true;

//String ('ex', "ex", `ex`)
let message: string;
message = 'Hello World';

//Number (int, float, hex, octal, binary)
let total: number;
total = 5;

//Array (Type[])
let items: number[];
items = [1, 2, 3];

//ou
let items2: Array<number>;
items2 = [1, 2, 3];

//Tuple
let title: [number, string];
title = [1, 'ex'];

//Enum
enum Colors {
    White = "#fff",
    Black = "#000"
}
let myColor: Colors;
myColor = Colors.Black;

//Any (qualquer coisa)
let anything: any;
anything = 'ex';
anything = 5;

//Void (vazio)
function logger(): void {
    console.log('ex');
}

//Null e Undefined
let myVariable: undefined;
let myVariable2: null; 

//Never
function error(): never {
    throw new Error('ex');
}

//Object
let card: object;
card = {
    key: 'ex'
}; 


// TYPE INFERENCE

let mensagem = "String";
mensagem = "Nova String";