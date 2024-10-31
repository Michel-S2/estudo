let seuVotoPara = document.querySelector('.divisao1-text1 span');
let cargo = document.querySelector('.divisao1-text2 span');
let descricao = document.querySelector('.divisao1-text4');
let aviso = document.querySelector('.divisao2');
let numeros = document.querySelector('.divisao1-text3');
let lateral = document.querySelector('.divisao1-right');

//---------------------------------------------------------------------------------------------------------------------------

// Estas variáveis controlam o estado da votação:

// qualEtapa: indica a etapa atual da votação
// numero: armazena o número digitado pelo eleitor
// brancoVoto: indica se o voto é em branco
// votos: array para armazenar os votos realizados

let qualEtapa = 0;

let numero = '';

let brancoVoto = true;

let votos = [];


//---------------------------------------------------------------------------------------------------------------------------

// 1-Obtém a etapa atual do array etapas
// 2-Reseta as variáveis numero e brancoVoto
// 3-Cria os campos para digitação do número do candidato
// 4-Atualiza a interface com as informações da nova etapa

function comecarEtapa() {
    let etapa = etapas[qualEtapa];
    let numeroHTML = '';
    numero = '';
    brancoVoto = false;

    for(let i = 1; i < etapa.numeros; i++) {
        if(i === 1 ) {
            numeroHTML += `<div class="numero pisca"></div>`
        }
        numeroHTML += `<div class="numero"></div>`;
    }

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHTML;
}

//---------------------------------------------------------------------------------------------------------------------------

// 1-Busca o candidato com o número digitado
// 2-Se encontrar, exibe as informações do candidato (nome, partido, fotos)
// 3-Se não encontrar, exibe mensagem de voto nulo

function atualizarTela() {
    let etapa = etapas[qualEtapa];
    let candidato = etapa.candidatos.filter((item) => {
        if(item.numero == numero) {
            return true;
        } else {
            return false
        }
    })

    if(candidato.length > 0) {
        candidato = candidato[0];
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`;
        let fotosHTML = '';
        for(let i in candidato.fotos) {
            if(candidato.fotos[i].small) {
                fotosHTML += `<div class="divisao1-right-img small"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            } else {
                fotosHTML += `<div class="divisao1-right-img"><img src="images/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>`;
            }
            
        }

        lateral.innerHTML = fotosHTML;
    } else {
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `<div class="aviso-grande pisca">SEU VOTO NULO</div>`
    }
}


//---------------------------------------------------------------------------------------------------------------------------

// 1-Encontra o campo numérico que está piscando
// 2-Preenche o campo com o número clicado e atualiza a variável número com os números clicados
// 3-Move o efeito de piscar para o próximo campo
// 4-Se todos os campos foram preenchidos, atualiza a tela

function clicou(n) {
    let numeroElemento = document.querySelector('.numero.pisca');

    if(numeroElemento) {
        numeroElemento.innerHTML = n;
        numero = `${numero}${n}`;
        

        numeroElemento.classList.remove('pisca');

        if(numeroElemento.nextElementSibling !== null) {
            numeroElemento.nextElementSibling.classList.add('pisca');
        } else {
            atualizarTela();
        }
    }


}

//---------------------------------------------------------------------------------------------------------------------------

// 1-Marca o voto como branco
// 2-Limpa os campos de número
// 3-Atualiza a interface para mostrar "VOTO BRANCO"

function branco() {
        brancoVoto = true;
        numero = '';
        lateral.innerHTML = ''
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block';
        numeros.innerHTML = '';
        descricao.innerHTML = `<div class="aviso-grande pisca">SEU VOTO BRANCO</div>`;
}

//---------------------------------------------------------------------------------------------------------------------------

// 1-Esta função simplesmente reinicia a etapa atual, permitindo ao eleitor corrigir seu voto.

function corrige() {
    comecarEtapa()
}

//---------------------------------------------------------------------------------------------------------------------------

// 1-Verifica o tipo de voto (branco, válido ou nulo)
// 2-Registra o voto no array votos
// 3-Avança para a próxima etapa ou finaliza a votação se todas as etapas foram concluídas

function confirma() {
    let etapa = etapas[qualEtapa];
    let votoConfirmado = true;
    let candidato = etapa.candidatos.filter((item) => {
        if(item.numero == numero) {
            return true;
        } else {
            return false
        }
    })

    if(brancoVoto === true) {
        votoConfirmado = true;
        votos.push({
            etapa: etapas[qualEtapa].titulo,
            voto: 'Branco'
        })
    } else if (candidato.length > 0) {
        votoConfirmado = true;
        votos.push({
            etapa: etapas[qualEtapa].titulo,
            voto: numero
        });
    } else if(numero.length === etapa.numeros) {
        votoConfirmado = true;
        votos.push({
            etapa: etapas[qualEtapa].titulo,
            voto: 'Nulo'
        });
    }

    if(votoConfirmado) {
        qualEtapa++;
        if(etapas[qualEtapa] !== undefined) {
            comecarEtapa();
        } else {
            document.querySelector('.tela').innerHTML = '<div class="aviso-gigante pisca">FIM</div>'
            console.log(votos)
        }
    }
}

//---------------------------------------------------------------------------------------------------------------------------


comecarEtapa();