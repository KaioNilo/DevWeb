"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
;
const kaio = new UserAccount("Kaio", 42);
console.log(kaio);
console.log(kaio.name);
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    get getLevel() {
        console.log('-----get----');
        return this.level;
    }
    set setLevel(level) {
        this.level = level;
    }
}
;
const john = new CharAccount("John", 12, "John", 25);
john.setLevel = 35;
console.log(john.getLevel);
console.log(john);
//Classe Abstrata
class UserAccount2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
;
