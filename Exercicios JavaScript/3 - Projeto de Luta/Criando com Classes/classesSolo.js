class PersonagemPadrao {
    _vida = 1;
    vidaMaxima = 1;
    ataque = 0;
    defesa = 0;

    constructor(nome) {
        this.nome = nome;
    }

    get vida() {
        return this._vida;
    }

    set vida(novaVida) {
        this._vida = novaVida < 0 ? 0 : novaVida;
    }
}

class Pikachu extends PersonagemPadrao {
    constructor(nome) {
        super('Pikachu');
        this.vida = 100;
        this.vidaMaxima = this.vida;
        this.ataque = 12;
        this.defesa = 8;
    }
}

class Eevee extends PersonagemPadrao {
    constructor(nome) {
        super('Eevee');
        this.vida = 100;
        this.vidaMaxima = this.vida;
        this.ataque = 10;
        this.defesa = 10;
    }
}


class Cenario {
    constructor(personagem1, personagem2, personagem1Elemento, personagem2Elemento, logObjeto) {
        this.personagem1 = personagem1;
        this.personagem2 = personagem2;
        this.personagem1Elemento = personagem1Elemento;
        this.personagem2Elemento = personagem2Elemento;
        this.log = logObjeto
    }

    start() {
        this.update();

        this.personagem1Elemento.querySelector('.area-button button').addEventListener("click", () => this.atacar(this.personagem1, this.personagem2));

        this.personagem2Elemento.querySelector('.area-button button').addEventListener("click", () => this.atacar(this.personagem2, this.personagem1));
    }

    update() {
        // ATUALIZAÇÕES DE VIDA E NOME DO PIKACHU
        this.personagem1Elemento.querySelector('.name').innerHTML = `${this.personagem1.nome} - HP ${this.personagem1.vida.toFixed(2)}`;
        let porcentagemVidaPikachu = (this.personagem1.vida / this.personagem1.vidaMaxima) * 100;
        this.personagem1Elemento.querySelector('.lifebar .bar').style.width = `${porcentagemVidaPikachu}%`;

        // ATUALIZAÇÕES DE VIDA E NOME DA EEVEE
        this.personagem2Elemento.querySelector('.name').innerHTML = `${this.personagem2.nome} - HP ${this.personagem2.vida.toFixed(2)}`;
        let porcentagemVidaEevee = (this.personagem2.vida / this.personagem2.vidaMaxima) * 100;
        this.personagem2Elemento.querySelector('.lifebar .bar').style.width = `${porcentagemVidaEevee}%`;

    }

    atacar(atacando, defedendo) {
        if(atacando.vida <= 0 || defedendo.vida <= 0) {
            this.log.addMensagem('FIM DE JOGO');
            return;
        }

        let fatorDeAtaque = (Math.random() * 1.8).toFixed(2);
        let novoAtaque = fatorDeAtaque * atacando.ataque;

        let fatorDeDefesa = (Math.random() * 1.8).toFixed(2);
        let novaDefesa = fatorDeDefesa * defedendo.defesa;

        if(novoAtaque > novaDefesa) {
            defedendo.vida -= novoAtaque;
            this.log.addMensagem(`${atacando.nome} causou ${novoAtaque.toFixed(2)} de dano em ${defedendo.nome}!`)
        } else {
            this.log.addMensagem(`${defedendo.nome} conseguiu bloquear o dano de ${atacando.nome}`)
        }

        this.update();

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
            this.listaElemento.innerHTML += `<p>${this.lista[i]}</p>`;
        }
    }
}