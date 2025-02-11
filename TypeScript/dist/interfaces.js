"use strict";
const tlou = {
    title: 'The Last of Us',
    description: 'The best game in the world',
    genre: 'Action',
    platform: ["PS3", "PS4"],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague Tale, Metro`);
    }
};
const leftBehind = {
    title: 'The Last of Us - Left Behind',
    description: 'You play as Ellie before the original game',
    genre: 'Action',
    platform: ["PS4"],
    originalGame: tlou,
    newContents: ['3 hours story', 'new characters']
};
class CreateGame {
    constructor(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}
/*
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}

console.log(leftBehind);

console.log(leftBehind.originalGame);
*/ 
