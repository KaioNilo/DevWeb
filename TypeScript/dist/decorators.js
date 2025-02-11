"use strict";
/*
//Class Decorator
//factory
function setAPIVersion(apiVersion: string) {
    return (constructor) => {
        return class extends constructor {
            version = apiVersion
        }
    }
}

@setAPIVersion('2.0.0')
class API {}

console.log(new API());

*/
//Property Decorator
function minLength(length) {
    return (target, key) => {
        let val = target[key];
        const getter = () => val;
    };
}
class Movie {
    constructor(t) {
        this.title = t;
    }
}
const movie = new Movie('Interstellar');
console.log(movie);
