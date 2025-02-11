"use strict";
const todo = {
    title: 'Assistir Dark de novo',
    description: 'Relembrar detalhes',
    completed: false
};
console.log(todo);
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2 = updateTodo(todo, { completed: true });
const todo3 = {
    title: 'Fechar Ghost of Tsushima',
    completed: false
};
const todo4 = {
    title: 'Fechar Ghost of Tsushima',
    completed: false
};
