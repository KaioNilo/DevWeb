//accountInfo variavel tipo objeto
type AccountInfo = {
    id: number,
    name: string,
    email?: string
}

const account: AccountInfo = {
    id: 42,
    name: "Kaio"
};

//charInfo
type CharInfo = {
    nickname: string,
    level: number
};

const char: CharInfo = {
    nickname: "Nilo",
    level: 42
};

//Interseção entre os dados
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id: 42,
    name: "Kaio",  
    nickname: "Nilo",
    level: 42   
};