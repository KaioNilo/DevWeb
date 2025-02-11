//TYPE ALIAS
type uid = number | string;


//UNION
function logDetails(uid: number | string, item: string) {
    console.log(`A product with the id ${uid} has a title as ${item}`);
};

logDetails(142, 'Laptop');


//exemplo1 alias

function logDetail(uid: uid, item: string) {
    console.log(`A product with the id ${uid} has a title as ${item}`);
};


function logInfo(uid: uid, user: string) {
    console.log(`An user with the id ${uid} has a name as ${user}`);
};



//exemplo2 alias
type Platform = 'Windows' | 'Linux' | 'MacOS';

function renderPlatform(platform: Platform) {
    return platform;    
};
