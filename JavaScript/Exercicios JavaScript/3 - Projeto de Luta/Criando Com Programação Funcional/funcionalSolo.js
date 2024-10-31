const pokemomPadrao = {
    nome: '',
    vida: 1,
    vidaMaxima: 1,
    ataque: 0,
    defesa: 0,
};

const createPikachu = () => {
    return {
        ...pokemomPadrao,
        nome: 'Pikachu',
        vida: 100,
        vidaMaxima: 100,
        ataque: 13,
        defesa: 8,
    };
};

const createEevee = () => {
    return {
        ...pokemomPadrao,
        nome: 'Eevee',
        vida: 100,
        vidaMaxima: 100,
        ataque: 15,
        defesa: 5,
    };
};

const cenario = {
    start(personagem1, personagem2, personagem1Elemento, personagem2Elemento, logObjeto) {
        this.personagem1 = personagem1;
        this.personagem2 = personagem2;
        this.personagem1Elemento = personagem1Elemento;
        this.personagem2Elemento = personagem2Elemento;
        this.log = logObjeto;

        this.personagem1Elemento.querySelector('button').addEventListener('click', () => this.atacar(this.personagem1, this.personagem2));
        this.personagem2Elemento.querySelector('button').addEventListener('click', () => this.atacar(this.personagem2, this.personagem1));

        this.update();
    },

    update() {
        //ATUALIZAR AS INFORMAÇÕES DO PERSONAGEM1
        this.personagem1Elemento.querySelector('.name').innerHTML = `${this.personagem1.nome} - ${this.personagem1.vida.toFixed(1)}HP`;
        let p1PorcentagemVida = (this.personagem1.vida / this.personagem1.vidaMaxima) * 100;
        this.personagem1Elemento.querySelector('.bar').style.width = `${p1PorcentagemVida}%`;

        //ATUALIZAR AS INFORMAÇÕES DO PERSONAGEM2
        this.personagem2Elemento.querySelector('.name').innerHTML = `${this.personagem2.nome} - ${this.personagem2.vida.toFixed(1)} HP`;
        let p2PorcentagemVida = (this.personagem2.vida / this.personagem2.vidaMaxima) * 100;
        this.personagem2Elemento.querySelector('.bar').style.width = `${p2PorcentagemVida}%`;

    },

    atacar(atacando, defendendo) {
        if(atacando.vida <= 0 || defendendo.vida <= 0) {
            this.log.addMensagem(`FIM DE JOGO!!!`);
            return;
        }

        //ATAQUE DO PERSONAGEM QUE ESTÁ ATACANDO
        let fatorDeAtaque = Math.random() * 2;
        let novoAtaque = atacando.ataque * fatorDeAtaque.toFixed(1);

        //DEFESA DO PERSONAGEM QUE ESTÁ DEFENDENDO
        let fatorDeDefesa = Math.random() * 2;
        let novaDefesa = defendendo.defesa * fatorDeDefesa.toFixed(1);

        if(novoAtaque > novaDefesa) {
            defendendo.vida -= novoAtaque;
            atacando.vida = atacando.vida <= 0 ? 0 : atacando.vida;
            defendendo.vida = defendendo.vida <= 0 ? 0 : defendendo.vida;
            this.log.addMensagem(`${atacando.nome} causou ${novoAtaque.toFixed(1)} de dano em ${defendendo.nome}`);
        } else {
            this.log.addMensagem(`${defendendo.nome} conseguiu bloquear o dano de ${atacando.nome}`);
        }
        this.update();
    }
};

const log = {
    //ARRAY PARA AS MENSAGENS
    lista: [],
    addMensagem(msg) {
        this.lista.unshift(msg);//COLOCARÁ AS MENSAGENS NO ARRAY
        this.render();//COLOCARÁ NA TELA AS INFORMAÇÕES
    },
    render() {
        const logElemento = document.querySelector('.log');//ADICIONAMOS ELEMENTO UL DO HTML NESSA VARIAVEL
        logElemento.innerHTML = '';//LIMPAMOS A LISTA

        //LOOP PARA ADICIONAR OS ELEMENTO NO ARRAY E COLOCAR NA TELA
        for(let i in this.lista) {
            logElemento.innerHTML += `<li>${this.lista[i]}</li>`;
        }

    }

}

