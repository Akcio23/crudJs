//CRUD 
const usuarios = {
    sobre: [{
        id: 1,
        nome: 'Pedro',
        idade: 21,
        sexo: 'Maculino',
        descricao: 'Eu sou o Pedro'

    }]
}
console.log(usuarios)

// CREATE 
function criarUsuario(dados) {
    usuarios.sobre.push({
        id: usuarios.sobre.length + 1,
        nome: dados.nome,
        idade: dados.idade,
        sexo: dados.sexo,
        descricao: dados.descricao,

    })
}
criarUsuario({ nome: 'Raquel', idade: 21, sexo: 'Feminino', descricao: 'Eu sou a Raquel' })
criarUsuario({ nome: 'João', idade: 21, sexo: 'Masculino', descricao: 'Eu sou o' })
criarUsuario({ nome: 'Larissa', idade: 30, sexo: 'Feminino', descricao: 'Eu sou a Larissa' })

console.log(usuarios)

// READ 
function lerUsuario(id) {
    const usuarioEncontrado = usuarios.sobre.find(usuarios => usuarios.id === id);
    console.log(usuarioEncontrado);
}
lerUsuario(1)

// UPTADE 
function atualizarDados(id, novoConteudo) {
    const usuarioIndex = usuarios.sobre.findIndex(user => user.id === id);

    if (usuarioIndex !== -1) {
        usuarios.sobre[usuarioIndex].descricao = novoConteudo;
        console.log('Descrição atualizada com sucesso:', usuarios.sobre[usuarioIndex]);
    } else {
        console.log('Usuário não encontrado');
    }
}
atualizarDados(3, 'Eu sou o joão')
console.log(usuarios)

// DELETE
function selecionarUsuarios() {
    console.log(usuarios)
}

function deleteUser(id) {
    const listaAtualizada = usuarios.sobre.filter(usuario => usuario.id !== id);
    usuarios.sobre = listaAtualizada;

}

deleteUser(4)
console.log(usuarios)