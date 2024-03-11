function saveData() {
  let b = document.getElementById("forma").value;

  if (b == 1) {
    var result = "Cartão";
  } else if (b == 2) {
    var result = "Dinheiro";
  }

  const formData = {
    Prato: document.getElementById("prato").value,
    quantidade: document.getElementById("qnt").value,
    Nome: document.getElementById("name").value,
    Endereço: document.getElementById("end").value,
    Forma: result,
  };

  //Criar um arquivo Json para Download
  const a = document.createElement("a"); // "a" é o link do download
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(formData, null, 2)], { type: "aplication.json" })
  );
  a.setAttribute("download", "formData.json");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  //Tirar os elementos dos campos
  document.getElementById("Pedido").reset();
}

function deletarData() {
  //Tirar os elementos dos campos
  document.getElementById("Pedido").reset();
}
