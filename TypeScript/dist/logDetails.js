"use strict";
//UNION
function logDetails(uid, item) {
    console.log(`A product with the id ${uid} has a title as ${item}`);
}
;
logDetails(142, 'Laptop');
//exemplo1 alias
function logDetail(uid, item) {
    console.log(`A product with the id ${uid} has a title as ${item}`);
}
;
function logInfo(uid, user) {
    console.log(`An user with the id ${uid} has a name as ${user}`);
}
;
function renderPlatform(platform) {
    return platform;
}
;
