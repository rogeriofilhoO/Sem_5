class Veículo
{
    constructor(marca, modelo)
    {
        if(new.target === Veículo)
        {
            throw new ("Classe abstrata")
        } 
    }
}

// 26/02/24

class Casa
{
    constructor()
    {
        this.cor = "Branca";
        this.porta = 6;
        this.quarto = 3;
        this.garagem = true;
    }

    //Método

    getCor()
    {
        return this.cor;
    }

    setCor(cor)
    {
        this.cor = cor;
    }
}

//Palavras Reservadas para objetos

const casa = new Casa()
console.log(casa.getCor());
casa.setCor("Azul");

//Retorna um objeto que descreve a propriedade específicada
console.log(Object.getOwnPropertyDescriptor(casa, 'cor'));
//{ value: 'Azul', writable: true, enumerable: true, configurable: true }


//Retorna um objeto que descreve as propriedades do objeto específicado
console.log(Object.getOwnPropertyNames(casa));
//[ 'cor', 'porta', 'quarto', 'garagem' ]


//is Extensible: determina se um objeto é extensível
console.log(Object.isExtensible(casa));
//true


//isFrozen: determina se um objeto foi congelado
console.log(Object.isFrozen(casa));
//false


//isSealed: determina se um obejto foi selado
console.log(Object.isSealed(casa));
//False


//keys: retorna um array contendo os nomes das propriedades enumeráveis de um dado objeto
console.log(Object.keys(casa));
//[ 'cor', 'porta', 'quarto', 'garagem' ]


//Object manipulando propriedades
Object.defineProperty(casa, 'cor', { writable: false });
casa.setCor('Amarelo');
console.log(casa.getCor()); 
// Erro: Cannot assign to read only property 'cor' of object '#<Casa>'

Object.defineProperty(casa, 'cor', { writable: true });