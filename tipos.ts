// Boolean
const contaPaga: boolean = false;

// number
const idade: number = 23;
const avaliacao: number = 4.5;

// string
const nome: string = "Carlos Betiol";

//Array
const idades: number[] = [ 23, 28, 45, 32,45];
const idades2: Array<number> =  [23, 345, 456, 46];

// tuple
let jogadores: [string, string, string, string, boolean];
jogadores = ["Carlos", "Augusto", "Betiol", "Ramos", true];

// enum (pode ficar sem os valores 001, 002, 003 que vai assumir 0, 1, 2)
enum StatusAprovacao {
    Aprovado,
    Pendente,
    Rejeitado
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any (quando nao sabe o que vem, frequentemente resposta de API)
const retornoDaAPI: any[] = [123, 'Carlos', false];
const retornoDaAPI2: any = {

}

// void
function printarNaTela(msg: string): void {
    console.log(msg);
}

// null e undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    //...
}

criar({
    propriedade: 1,
});
//criar('Carlos') // da erro



