//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []; // array para armazenar os nomes

function adicionarAmigo() {
    let input = document.getElementById("amigo")
    let nome = input.value.trim()

    // digite um nome valido
    if (nome === "" || !isNaN(nome)) {
        alert('Por favor, digite um nome valido')
        return;
    }
    if (amigos.includes(nome)) {
        alert('Este nome ja esta na lista');
        return;
    }

    // adiciona o nome no array
    amigos.push(nome)
    // atualiza a lista na tela
    atualizarLista()
    // limpa o campo para o próximo nome
    input.value = ""
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos')

    // limpa a lista 
    lista.innerHTML = ''

    for (let amigo of amigos) {
        let item = document.createElement("li")
        item.textContent = amigo
        lista.appendChild(item)
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Por favor, adicione pelo menos um nome antes de sortear.")
        return 
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length)
    let amigoSorteado = amigos[indiceAleatorio]
    document.getElementById('resultado').innerHTML = `O amigo sorteado é: <strong>${amigoSorteado}</strong>`
} 