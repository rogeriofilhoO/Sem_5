class Animal 
{
    constructor(nome, especie)
    {
        this.nome = nome;
        this.especie = especie;
    }

    falar()
    {
        return `${this.nome} faz o som`
    }
}

class Cachorro extends Animal 
{
    constructor(nome)
    {
        super(nome, "Cachorro")
    }

    falar()
    {
        return `${this.nome} diz: AU! AU!`
    }
}

class Gato extends Animal
{
    constructor(nome)
    {
        super(nome, "Gato")
    }

    falar()
    {
        return `${this.nome} diz: Miau!`
    }
}

//Criando instancia

let bob = new Cachorro("Bob");
let winter = new Gato('winter');

//Colocando as informações na div do html
let infoAnimais = document.getElementById('infoAnimais');

//Mostrando as informações ao HTML
infoAnimais.innerHTML = `<p> ${bob.especie}: ${bob.nome} - ${bob.falar()} </p> <p> ${winter.especie}: ${winter.nome} - ${winter.falar()} </p>`

