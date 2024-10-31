//CRIAMOS O OBJETO DE PERSONAGEM PADRÃO

const personagemPadrao = {
    nome: '',
    vida: 1,
    vidaMaxima: 1,
    ataque: 0,
    defesa: 0,
};

//FUÇÃO PARA CRIAR O PERSONAGEM 1

const createPikachu = () => {
    return {
        ...personagemPadrao,
        nome: 'Pikachu',
        vida: 100,
        vidaMaxima: 100,
        ataque: 11,
        defesa: 5
    }
};

//FUNÇÃO PARA CRIAR O PERSONAGEM 2

const createEevee = () => {
    return {
        ...personagemPadrao,
        nome:'Eevee',
        vida: 80,
        vidaMaxima: 80,
        ataque: 12,
        defesa: 6
    }
};

//OBJETO PARA INICIAR O JOGO

const cenario = {
//FUNÇÃO START PARA COMEÇAR O JOGO, PEGANDO OS PERSONAGEM E O ELEMENTO DELES NO HTML
    start(personagem1, personagem2, personagem1Elemento, personagem2Elemento, logObjeto) {
        this.personagem1 = personagem1;
        this.personagem2 = personagem2;
        this.personagem1Elemento = personagem1Elemento;
        this.personagem2Elemento = personagem2Elemento;
        this.log = logObjeto;

//EVENTO DE CLIQUE NO BOTÃO ATACAR PARA EXECUTAR A FUNÇÃO ATACAR COM OS PARAMETROS DE ATACANDO E DEFENDENDO
        this.personagem1Elemento.querySelector('.area-button button').addEventListener('click', () => this.atacar(this.personagem1, this.personagem2));
        this.personagem2Elemento.querySelector('.area-button button').addEventListener('click', () => this.atacar(this.personagem2, this.personagem1));

        this.update();
    },


//ATUALIZAÇÃO DE VIDA E NOME DOS PERSONAGENS
    update() {
//ATUALIZAÇÃO DE NOME E VIDA DO PERSONAGEM 1
        this.personagem1Elemento.querySelector('.name').innerHTML = `${this.personagem1.nome} - ${this.personagem1.vida.toFixed(1)} HP`;
        let personagem1PorcentagemVida = (this.personagem1.vida / this.personagem1.vidaMaxima) * 100;
        this.personagem1Elemento.querySelector('.bar').style.width = `${personagem1PorcentagemVida}%`;

//ATUALIZAÇÃO DE NOME E VIDA DO PERSONAGEM 2
        this.personagem2Elemento.querySelector('.name').innerHTML = `${this.personagem2.nome} - ${this.personagem2.vida.toFixed(1)} HP`;
        let personagem2PorcentagemVida = (this.personagem2.vida / this.personagem2.vidaMaxima) * 100;
        this.personagem2Elemento.querySelector('.bar').style.width = `${personagem2PorcentagemVida}%`;

    },


//FUNÇÃO PARA REALIZAR ATAQUE COM GERADOR DE DANO BASEADO NO ATAQUE
    atacar(atacando, defedendo) {
        if(atacando.vida <= 0 || defedendo.vida <= 0) {
            this.log.addMensagem(`FIM DE JOGO!!!`);
            return
        };

        let fatorAtaque = (Math.random() * 2);
        let novoAtaque = atacando.ataque * fatorAtaque.toFixed(1);
        let fatorDefesa = (Math.random() * 2);
        let novaDefesa = defedendo.defesa * fatorDefesa.toFixed(1);


        if(novoAtaque > novaDefesa) {
            defedendo.vida -= novoAtaque;
            this.log.addMensagem(`${atacando.nome} causou ${novoAtaque.toFixed(1)} de dano em ${defedendo.nome}`);
            defedendo.vida = defedendo.vida <= 0 ? 0 : defedendo.vida
        } else {
            this.log.addMensagem(`${defedendo.nome} conseguiu bloquear o dano`)
        }

        this.update();
    }
};

const log = {
    lista: [],

    addMensagem(msg) {
        this.lista.unshift(msg);
        this.render();
    },

    render() {
        let logElementoHtml = document.querySelector('.log');
        logElementoHtml.innerHTML = '';

        for(let i in this.lista) {
            logElementoHtml.innerHTML += `<li>${this.lista[i]}</li>`;
        }
    }

};