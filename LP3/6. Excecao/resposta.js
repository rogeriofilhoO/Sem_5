function processarDadosFormulario(nome, idade, senha, confirmarSenha){
    if (senha != confirmarSenha) {
        throw new Error("As senhas não conhecidem")
    }

    if (idade < 18) {
        throw new Error("Voce deve ter pelo menos 18 anos")
    }

    console.log(`Nome: ${nome}, Idade: ${idade}, Email: ${email}`);
}


document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", function (e) {
        e.preventDefault(); // Se tiver um erro no formulario não permitiddo o envio
      })

      try {
        const nome = document.getElementById("nome").value;
        const idade = parseInt(document.getElementById("idade").value)
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const confirmarsenha = document.getElementById("confirmarsenha").value;

        processarDadosFormulario(nome, idade, senha, confirmarsenha)

        alert("Formulario enivado")

      } catch (error) {
        alert(`Erro ao enviar formulário: ${error.message}`);
        
      }
})