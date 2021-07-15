class Data {
    public dia: number;
    mes: number;
    ano: number;

    constructor(dia: number, mes: number, ano: number = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);
console.log(data.mes);

const data2 = new Data(1, 1);

// outra forma de criar a mesma classe
class Data2 {

    constructor(public dia: number, public mes: number, public ano: number = 1970) {
    }
}

// ferramenta www.typescriptlang.org
// escrever um codigo typescript e ver ele convertido para javascript

class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) {

    }

    private alterarVelocidade(delta: number){
        const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }

    }
    acelerar() {
        this.alterarVelocidade(5);
    }

    frear() {
        this.alterarVelocidade(-5);
    }

    getVelocidadeMaxima() {
        return this.velocidadeMaxima;
    }
}


const carro = new Carro('Chevrolet', 'Prisma', 250);
carro.acelerar;
carro.acelerar;
carro.acelerar;
carro.frear;
carro.frear;
carro.frear;

console.log(carro.getVelocidadeMaxima);


//heranca
class Camaro extends Carro {
    private turbo = false;

    constructor() {
        super('Chevrolet','Modelo', 500);
    }

    ligarTurbo() {
        this.turbo = true;
    }

    desligarTurbo() {
        this.turbo = false;
    }

}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
