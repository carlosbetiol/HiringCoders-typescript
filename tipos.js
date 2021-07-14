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
    StatusAprovacao[StatusAprovacao["Aprovado"] = 0] = "Aprovado";
    StatusAprovacao[StatusAprovacao["Pendente"] = 1] = "Pendente";
    StatusAprovacao[StatusAprovacao["Rejeitado"] = 2] = "Rejeitado";
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
