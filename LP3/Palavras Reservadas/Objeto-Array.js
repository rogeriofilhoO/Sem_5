const pessoas = 
[
    {nome: "Ana", idade : 19},
    {nome: "João", idade : 17},
    {nome: "Maria", idade : 23}
];

let maioresDeIdade = [];
for(let i = 0; i < pessoas.length; i++)
{
    if(pessoas[i].idade >= 18)
    {
        maioresDeIdade.push(pessoas[i]);
    }
}

const saudacoes = maioresDeIdade.map(pessoas => `Olá, ${pessoa.nome}, você é maior de idade!`);

console.log(saudacoes);