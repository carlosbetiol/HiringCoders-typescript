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
    Aprovado = "001",
    Pendente = "002",
    Rejeitado = "003"
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


//never
function loopInfinito(): never {
    while(true){

    }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

// abaixo a funcao vai acabar sendo never pq o return é do resultado de uma never
function falha() {
    return erro('algo falhou');
}

// Union Types (pode ter mais de um tipo)
function exibirNota(nota: number | string | boolean) {
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);
exibirNota(true);

// Alias
type Funcionario = {
    nome: string,
    sobrenome: string,
    dataNascimento: Date
}
// Date é só uma interface, nao é tipo

// type Funcionarios = Array<Funcionario>;
// pode usar type dentro de type
const funcionarios: Funcionario[] = [{
    nome: 'Victor',
    sobrenome: 'Farias',
    dataNascimento: new Date()
},
{
    nome: 'Fulano',
    sobrenome: 'Farias',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionariosP: Funcionario[]) {
    for(let funcionario of funcionariosP) {
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}

tratarFuncionarios(funcionarios);

// campo Opcional
let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}

const contato: Contato = {
    nome: 'Victor',
    telefone1: '46654445'
}
// opcional colocar telefone2 que vai ficar undefined

// Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString;
// ou
<number> minhaIdade.toString;

// abaixo se nao fizer a assertion as HTMLInputElement, o typescript nao vai reconhecer q 
// existe a prop value pq infere que vai retornar um HTMLElement
const input = document.getElementById("numero1") as HTMLInputElement;
// usa acima, ou abaixo
const input2 = <HTMLInputElement> document.getElementById("numero1");
console.log(input2.value);

