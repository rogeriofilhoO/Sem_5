class Usuario 
{
    constructor(nome, email)
    {
        this.nome = nome;
        this.email = email;
    }
}

document.getElementById('MeuFormulario').addEventListener(
    'submit', function(e)        
    {
        e.preventDefault(); //Previne o Comportamente

        //Captura os valores
        let nome = document.getElementById('full').value;
        let email = document.getElementById('email').value;

        //Cria uma nova instancia da classe Usuario
        let usuario = new Usuario(nome, email);

        console.log(usuario);
    }
)