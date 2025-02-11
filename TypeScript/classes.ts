class UserAccount {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }   
};

const kaio = new UserAccount("Kaio", 42);
console.log(kaio);
console.log(kaio.name);

class CharAccount extends UserAccount {
    nickname: string;
    level: number;
    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
     }   

    get getLevel() {
        console.log('-----get----');
        return this.level;
    }

    set setLevel(level: number) {
        this.level = level;
    }
};

const john = new CharAccount("John", 12, "John", 25);

john.setLevel = 35;

console.log(john.getLevel);

console.log(john);


//Classe Abstrata

abstract class UserAccount2 {
    public name: string;
    protected age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }   
}; 