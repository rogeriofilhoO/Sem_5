const atualizaTela = (pokemon) => {
    const imagem = document.getElementById("foto-pokemon");
    const nomePokemon = document.getElementById("nome-pokemon");
    // sprite é a imagem do pokemon
    // other é um objeto que contém outras imagens do pokemon
    // official-artwork é um objeto que contém a imagem oficial do pokemon
    imagem.src = pokemon.sprites.other["official-artwork"].front_default;
    nomePokemon.innerHTML = pokemon.name; // innerHTML é uma propriedade que permite inserir HTML dentro de um elemento
}

const urlPokemonAleatorio = () => {
    const numeroSorteado = Math.round(Math.random() * 150) +1; // Math.random() retorna um número aleatório entre 0 e 1
    const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${numeroSorteado}`; 
    return urlPokemon;
}

const iniciar = async () => { // async é uma palavra chave que indica que a função é assíncrona
    const url = urlPokemonAleatorio()
    const response = await fetch(url); // await é uma palavra chave que só pode ser usada dentro de funções assíncronas
    const result = await response.json(); // await é uma palavra chave que só pode ser usada dentro de funções assíncronas
    atualizaTela(result);
};

// addEventListener é um método que anexa um manipulador de eventos a um elemento
document.addEventListener('DOMContentLoaded', iniciar); // DOMContentLoaded é um evento que ocorre quando o HTML foi completamente carregado e parseado, sem aguardar pelo CSS, imagens, e subframes