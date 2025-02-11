"use strict";
//Boolean (True or False)
let isOpen;
isOpen = true;
//String ('ex', "ex", `ex`)
let message;
message = 'Hello World';
//Number (int, float, hex, octal, binary)
let total;
total = 5;
//Array (Type[])
let items;
items = [1, 2, 3];
//ou
let items2;
items2 = [1, 2, 3];
//Tuple
let title;
title = [1, 'ex'];
//Enum
var Colors;
(function (Colors) {
    Colors["White"] = "#fff";
    Colors["Black"] = "#000";
})(Colors || (Colors = {}));
let myColor;
myColor = Colors.Black;
//Any (qualquer coisa)
let anything;
anything = 'ex';
anything = 5;
//Void (vazio)
function logger() {
    console.log('ex');
}
//Null e Undefined
let myVariable;
let myVariable2;
//Never
function error() {
    throw new Error('ex');
}
//Object
let card;
card = {
    key: 'ex'
};
// TYPE INFERENCE
let mensagem = "String";
mensagem = "Nova String";
