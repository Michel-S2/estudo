async function readPosts() {
    // PEGAMOS A DIV RESERVADA PARA OS POSTS
    let postArea = document.querySelector('#posts');
    // COLOCAMOS A MENSAGEM CARRGANDO NESSA DIV QUE PEGAMOS DO HTML
    postArea.innerHTML = 'Carregando...'

    // FAZEMOS A REQUISIÇÃO COM O ASYNC AWAIT
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    // FAZEMOS UMA VERIFICAÇÃO SE A RESPOSTA FOR MAIOR QUE 0 SIGNIFICA QUE TEM ALGUMA COISA NA RESPOSTA
    if(json.length > 0) {
        postArea.innerHTML = ''; //LIMPAMOS O CONTEUDO DA DIV DO HTML

        //FAZEMOS UM LOOP NO JSON
        for(let i in json) {

            // CRIAMOS UMA VARIÁVEL PARA ADICIONARMOS OS ELEMENTOS HTML JUNTO COM O JSON COM O INDICE E A PROPRIEDADE
            let postHTML = `<div><h1>${json[i].title}</h1>${json[i].body}<hr></div>`;
            postArea.innerHTML += postHTML; //ADICIONAMOS NA DIV DO HTML NOSSA VARIÁVEL COM OS ELEMENTOS
        }

        // SE NÃO FOR MAIOR QUE 0 SIGNIFICA QUE ESTÁ VAZIO O OBJETO RETORNADO
    } else {
        postArea.innerHTML = 'Nenhum Post para mostrar'
    }
}

async function addNewPost(title, body) {
    await fetch (
        'https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                body,
                userId: 4
            })
        }
    );

    document.querySelector('#title-field').value = '';
    document.querySelector('#body-field').value = '';

    readPosts();
}

document.querySelector('#inserirButton').addEventListener('click', () => {
    let title = document.querySelector('#title-field').value;
    let body = document.querySelector('#body-field').value;

    if(title && body) {
        addNewPost(title, body)
    } else {
        alert('Preencha todos os campos.')
    }
})

readPosts();