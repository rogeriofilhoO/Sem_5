function saveData()
{
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    }

    //Criar um arquivo Json para Download
    const a = document.createElement('a') // "a" é o link do download
    a.href = URL.createObjectURL(new Blob([
        JSON.stringify(formData, null, 2)
    ], {type: 'aplication.json'}))
    a.setAttribute('download', 'formData.json');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    //Tirar os elementos dos campos
    document.getElementById('contactForm').reset();
}


function deletarData() {
    //Tirar os elementos dos campos
    document.getElementById('contactForm').reset();
}