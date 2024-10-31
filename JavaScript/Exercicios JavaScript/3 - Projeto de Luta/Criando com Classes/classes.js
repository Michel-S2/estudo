
// CRIANDO A CLASSE DE UM PERSONAGEM PARA USAR DE PADRÃO
class PersonagemPadrao {
    _vida = 1;
    vidaMaxima = 1;
    ataque = 0;
    defesa = 0;

    constructor (nome){
        this.nome = nome;
    }

    get vida() {
        return this._vida;
    }

    set vida(novaVida) {
        this._vida = novaVida < 0 ? 0 : novaVida;
    }
}

// PERSONAGENS
class Pikachu extends PersonagemPadrao {
    constructor(){
        super('Pikachu');
        this.vida = 80;
        this.vidaMaxima = 80;
        this.ataque = 15;
        this.defesa = 5;
    }
}

class Eevee extends PersonagemPadrao {
    constructor(){
        super('Eevee');
        this.vida = 105;
        this.vidaMaxima = 105;
        this.ataque =  15;
        this.defesa = 10;
    }
}

// CLASSE RESPONSAVEL POR TODOS ACONTECIMENTOS NO CENÁRIO DO JOGO
class Cenario {
    constructor(personagem1, personagem2, personagem1Elemento, personagem2Elemento, logObjeto){
        this.personagem1 = personagem1;
        this.personagem2 = personagem2;
        this.personagem1Elemento = personagem1Elemento;
        this.personagem2Elemento = personagem2Elemento;
        this.log = logObjeto;
    }


    // FUNÇÃO NECESSÁRIA PARA INICIAR O JOGO
    start(){
        this.update();

        // QUANDO CLICAMOS NO BOTÃO EXECUTAMOS A FUNÇÃO ATACAR COM OS PARAMETROS ATACANDO E ATACADO
        this.personagem1Elemento.querySelector('.area-button button').addEventListener('click', () => this.atacar(this.personagem1, this.personagem2));
        this.personagem2Elemento.querySelector('.area-button button').addEventListener('click', () => this.atacar(this.personagem2, this.personagem1));
    }

    // FUNÇÃO RESPONSÁVEL POR ATUALIZAR TODAS INFORMAÇÕES DO JOGO
    update(){
        // PERSONAGEM 1

        // COLOCAR O NOME NA TELA
        this.personagem1Elemento.querySelector('.name').innerHTML = `${this.personagem1.nome} - HP ${this.personagem1.vida.toFixed(0)}`;
        // VARIAVEL PARA CALCULAR A PORCENTAGEM DA VIDA 100%
        let pctPersonagem1 = (this.personagem1.vida / this.personagem1.vidaMaxima) * 100;
        // COLOCANDO A VIDA 100% NA TELA
        this.personagem1Elemento.querySelector('.lifebar .bar').style.width = `${pctPersonagem1}%`;

        // PERSONAGEM 2
        this.personagem2Elemento.querySelector('.name').innerHTML= `${this.personagem2.nome} - HP ${this.personagem2.vida.toFixed(0)}`;
        let pctPersonagem2 = (this.personagem2.vida / this.personagem2.vidaMaxima) * 100;
        this.personagem2Elemento.querySelector('.lifebar .bar').style.width = `${pctPersonagem2}%`;
    }

    atacar(atacando, atacado){
        if(atacando.vida <= 0 || atacado.vida <= 0) {
            this.log.addMensagem(`FIM DE JOGO`);
            return;
        }
        // FAZ UM NUMERO ALEATORIO ENTRE 0 E 2 E MULTIPLICAMOS PELO ATAQUE DO PERSONAGEM QUE ATACARÁ
        let fatorDeAtaque = (Math.random() * 2).toFixed(2);
        let ataqueAtual = atacando.ataque * fatorDeAtaque;

        // FAZ UM NUMERO ALEATORIO ENTRE 0 E 2 E MULTIPLICAMOS PELA DEFESA DO PERSONAGEM QUE SOFRERÁ O ATAQUE
        let fatorDeDefesa = (Math.random() * 2).toFixed(2);
        let defesaAtual = atacado.defesa * fatorDeDefesa;

        if(ataqueAtual > defesaAtual){
            atacado.vida -= ataqueAtual;
            this.log.addMensagem(`${atacando.nome} causou ${ataqueAtual.toFixed(0)} de dano em ${atacado.nome}`);
        } else{
            this.log.addMensagem(`${atacado.nome} conseguiu bloquear o dano!`)
        }

    

        this.update()
    }
}

class Log {
    lista = [];

    constructor(listaElemento) {
        this.listaElemento = listaElemento;
    }

    addMensagem(msg) {
        this.lista.unshift(msg);
        this.render();
    }

    render() {
        this.listaElemento.innerHTML = '';

        for (let i in this.lista) {
            this.listaElemento.innerHTML += `<li>${this.lista[i]}</li>`
        }
    }
}