console.log("Olá esses são assincronos");

setTimeout(function () {
  console.log("Executando programação Assincrona");
  for (let i = 0; i < 11; i++) {
    console.log(i);
  }
}, 8000); // 2000 milisegundos é 2 segundos

console.log("Terminou");
