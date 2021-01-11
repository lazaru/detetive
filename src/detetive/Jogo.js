const tipo = {
    PERSONAGEM: 'Personagem',
    ARMA: 'Arma',
    LOCAL: 'Local'
}

const acao = {
    CULPADO: 'Culpado',
    SUSPEITO: 'Suspeito',
    ELIMINADO: 'Eliminado',
    MINHACARTA: 'MinhaCarta',
    NAOINICIADO: 'NaoIniciado'
}

class Carta {
    constructor(nome, tipo, acao, imagem) {
        this.nome = nome;
        this.tipo = tipo;
        this.acao = acao;
        this.imagem = imagem;
    }
}

class Detetive {
    constructor() {
        this.cartas = [];
        //personagens
        this.cartas.push(new Carta('Sargento - Bigode', tipo.PERSONAGEM, acao.NAOINICIADO, 'Sagento_Bigode.png'));
        this.cartas.push(new Carta('Coveiro - Sérgio Soturno', tipo.PERSONAGEM, acao.NAOINICIADO, 'Coveiro_Sérgio_Soturno.png'));
        this.cartas.push(new Carta('Mordomo - James', tipo.PERSONAGEM, acao.NAOINICIADO, 'Mordomo_James.png'));
        this.cartas.push(new Carta('Chef de cozinha - Tony Gourmet', tipo.PERSONAGEM, acao.NAOINICIADO, 'Chef_de_cozinha_Tony_Gourmet.png'));
        this.cartas.push(new Carta('Dançarina - Srta. Rosa', tipo.PERSONAGEM, acao.NAOINICIADO, 'Dançarina_Srta.Rosa.png'));
        this.cartas.push(new Carta('Advogado - Sr. Marinho', tipo.PERSONAGEM, acao.NAOINICIADO, 'Advogado_Sr.Marinho.png'));
        this.cartas.push(new Carta('Médica - Dona Violeta', tipo.PERSONAGEM, acao.NAOINICIADO0, 'Médica_Dona_Violeta.png'));
        this.cartas.push(new Carta('Florista - Dona Branca', tipo.PERSONAGEM, acao.NAOINICIADO0, 'Florista_Dona_Branca.png'));

        //armas

        //lugares

    }
}

CarregarJogo();

function CarregarJogo() {
    this.detetive = localStorage.getItem("detetive");
    if (typeof this.detetive !== 'undefined') {
        this.detetive = new Detetive();
    }

}

function SalvarJogo() {
    localStorage.setItem("detetive", this.detetive);
}

function Value1() {
    var d = localStorage.getItem("detetive");
    console.log(d)
    alert("detetive " + d);
}

function ClearStorage() {
    localStorage.clear();
}