"use strict";
// Boolean
var contaPaga = false;
// number
var idade = 23;
var avaliacao = 4.5;
// string
var nome = "Carlos Betiol";
//Array
var idades = [23, 28, 45, 32, 45];
var idades2 = [23, 345, 456, 46];
// tuple
var jogadores;
jogadores = ["Carlos", "Augusto", "Betiol", "Ramos", true];
// enum (pode ficar sem os valores 001, 002, 003 que vai assumir 0, 1, 2)
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any (quando nao sabe o que vem, frequentemente resposta de API)
var retornoDaAPI = [123, 'Carlos', false];
var retornoDaAPI2 = {};
// void
function printarNaTela(msg) {
    console.log(msg);
}
// null e undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    //...
}
criar({
    propriedade: 1,
});
//criar('Carlos') // da erro
//never
function loopInfinito() {
    while (true) {
    }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
// abaixo a funcao vai acabar sendo never pq o return é do resultado de uma never
function falha() {
    return erro('algo falhou');
}
// Union Types (pode ter mais de um tipo)
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
exibirNota(true);
// Date é só uma interface, nao é tipo
// type Funcionarios = Array<Funcionario>;
// pode usar type dentro de type
var funcionarios = [{
        nome: 'Victor',
        sobrenome: 'Farias',
        dataNascimento: new Date()
    },
    {
        nome: 'Fulano',
        sobrenome: 'Farias',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionariosP) {
    for (var _i = 0, funcionariosP_1 = funcionariosP; _i < funcionariosP_1.length; _i++) {
        var funcionario = funcionariosP_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
tratarFuncionarios(funcionarios);
