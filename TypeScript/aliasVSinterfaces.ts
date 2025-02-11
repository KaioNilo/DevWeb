//Alias usa sinal de = e interface não
type Jogo = {
    title: string;
}

interface Jogo2 {
    description: string;
}

//Interseção do alias usa sinal de & e interface usa extends
type GameCollectins = Jogo & Jogo2;

interface GameCollectins2 extends Jogo, Jogo2 {}

//Implementação
class CreateGame implements GameCollectins {}


//Declaração de Function
type getSimilars = (title: string) => void;

interface getSimilars2 {    
    (title: string): void;
}

//Alias declara tipos primitivos
type uid = string | number;

//Nao é possivel definir tuplas na interface
type TuplaT = [number, string];

[1, "exemplo"] as TuplaT;

//No Alias só pode ter uma declaração por escopo. Já na interface podem ter muitas
type JQuery = { a: string };

interface JQuery {
    a: string;
}

interface JQuery {
    b: string;
}

const obj: JQuery = { a: "a", b: "b" };