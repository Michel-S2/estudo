//DADOS INICIAS
let questaoAtual = 0;
let questoesCorretas = 0;

mostrarQuestao()

document.querySelector('.scoreArea button').addEventListener('click', resetar)

function mostrarQuestao() {
    if(questions[questaoAtual]) {
        let questao = questions[questaoAtual];

        let porcentagemQuestoes = Math.floor((questaoAtual / questions.length) * 100)

        document.querySelector('.progress--bar').style.width = `${porcentagemQuestoes}%`;

        document.querySelector('.questionArea').style.display = 'block';
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.question').innerHTML = questao.question;

        let questaoHtml = '';
        for(let i in questao.options) {
            questaoHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${questao.options[i]}</div>`;
    }

        document.querySelector('.options').innerHTML = questaoHtml;

        document.querySelectorAll('.options').forEach(item => {
            item.addEventListener('click', elementoClicado)
        })
    } else {
        finalQuiz();
    }
}

function elementoClicado(e) {
    let opcaoClicada = parseInt(e.target.getAttribute('data-op'));
    
    if(questions[questaoAtual].answer === opcaoClicada) {
        questoesCorretas++;
    }
    questaoAtual++;
    mostrarQuestao();
}

function finalQuiz() {
    let pontos = Math.floor((questoesCorretas / questions.length) * 100);

    if(pontos < 40) {
        document.querySelector('.scoreText1').innerHTML = `Tu é Ruim Credo`;
        document.querySelector('.scorePct').style.color = 'red';
    } else if(pontos >= 40 && pontos < 80) {
        document.querySelector('.scoreText1').innerHTML = `Muito Bom!`
        document.querySelector('.scorePct').style.color = 'yellow';
    } else if(pontos >= 80) {
        document.querySelector('.scoreText1').innerHTML = `Parabêns!!!`
        document.querySelector('.scorePct').style.color = '#0D630D';
    }

    document.querySelector('.scorePct').innerHTML = `Acertou ${pontos}%`;

    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${questoesCorretas}`;

    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.progress--bar').style.width = `100%`;
    
}

function resetar() {
    questaoAtual = 0;
    questoesCorretas = 0;
    mostrarQuestao();
}