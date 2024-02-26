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