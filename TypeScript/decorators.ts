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
function minLength(length: number) {
    return (target: any, key: string ) => {
        let val = target[key];

        const getter = () => val;
    }
}


class Movie {
    title: string;

    constructor (t: string) {
        this.title = t;
    }
}

const movie = new Movie('Interstellar');
console.log(movie);