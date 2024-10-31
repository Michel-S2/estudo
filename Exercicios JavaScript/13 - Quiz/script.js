let currentQuestion = 0;
let correctsAnswers = 0;
showQuestion()

document.querySelector('.scoreArea button').addEventListener('click', reset);

function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let porcentagem = Math.floor((currentQuestion / questions.length) * 100);

        document.querySelector('.progress--bar').style.width = `${porcentagem}%`;
        
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';
        document.querySelector('.question').innerHTML = q.question;
        
        let optionsHtml = '';
        for(let i in q.options) {
            optionsHtml += `<div data-op="${i}" class='option'><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`
        }

        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        })
    } else {
        fineshedQuiz();
    }
}

function optionClickEvent(e) {
    let optionClicked = parseInt(e.target.getAttribute('data-op'));

    if(questions[currentQuestion].answer === optionClicked) {
        correctsAnswers++;
    }

    currentQuestion++;
    showQuestion();
}

function fineshedQuiz() {
    let points = Math.floor((correctsAnswers / questions.length) * 100);

    if(points < 30) {
        document.querySelector('.scoreText1').innerHTML = 'Tu é Muito Ruim';
        document.querySelector('.scorePct').style.color = 'red';
    } else if(points >= 30 && points < 70) {
        document.querySelector('.scoreText1').innerHTML = 'Muito Bom!!';
        document.querySelector('.scorePct').style.color = 'yellow';
    } else if(points >= 70) {
        document.querySelector('.scoreText1').innerHTML = 'Parabêns!!';
        document.querySelector('.scorePct').style.color = '#0D630D';
    }


    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.scoreText2').innerHTML = `Voce respondeu ${questions.length} questões e acertou ${correctsAnswers}`;

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = `100%`;
}

function reset() {
    correctsAnswers = 0;
    currentQuestion = 0;
    showQuestion();
}