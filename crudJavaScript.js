console.log('Ola Pessoal')
console.log('#criandoCrud!!')

//[CRUD] JavaScripr Basico

const redeSocial = {
    usuarios: [
        {
            username: 'Pedroacacio'
        }
    ],
    posts: [
        {
            id: 1,
            owner: 'Pedroacacio',
            content: 'Meu primeiro post',
        }
    ]
}

//Create

function criarPost(dados) {
    redeSocial.posts.push({
        id: redeSocial.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    })

}
criarPost({ owner: 'PedroAcacio', content: 'Segundo post' })
console.log(redeSocial.posts)

//Read

function pegaPost() {
    return redeSocial.posts
}

console.log(pegaPost())

//Uptade
function atualizaContentdoPost(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegaPost().find((post) => {
        return post.id === id;
    });
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo
}

atualizaContentdoPost(2, 'Novo conteudo do post')
console.log(pegaPost())

//Delete 

function apagaPost(id) {
    const listaDePostAtualizada = pegaPost().filter((postAtual) => {
        return postAtual.id !== id;

    })
    redeSocial.posts = listaDePostAtualizada
}

apagaPost(1)
console.log(pegaPost())