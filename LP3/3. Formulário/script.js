class Usuario 
{
    constructor(nome, rg, pai, escolaridade, tel, email, date, cpf, mae, prof, cel)
    {
        this.nome = nome;
        this.rg = rg;
        this.pai = pai;
        this.escolaridade = escolaridade;
        this.tel = tel;
        this.email = email;
        this.date = date;
        this.cpf = cpf;
        this.mae = mae;
        this.prof = prof;
        this.cel = cel;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio do formulário

        let nome = document.getElementById('full').value;
        let rg = document.getElementById('rg').value;
        let pai = document.getElementById('pai').value;
        let escolaridade = document.getElementById('escolaridade').value;
        let tel = document.getElementById('tel').value;
        let email = document.getElementById('email').value;
        let date = document.getElementById('date').value;
        let cpf = document.getElementById('cpf').value;
        let mae = document.getElementById('mae').value;
        let prof = document.getElementById('prof').value;
        let cel = document.getElementById('cel').value;

        //Cria uma nova instancia da classe Usuario
        let usuario = new Usuario(nome, rg, pai, escolaridade, tel, email, date, cpf, mae, prof, cel);

        console.log(usuario);

    });

    const resetButton = form.querySelector('button[type="reset"]');
    resetButton.addEventListener('click', function() {
        form.reset();
    });
});