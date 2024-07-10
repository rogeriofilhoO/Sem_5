async function fetchData() {
    try{
        const response = await fetch('https://localhost:3000/api/veiculos');
        const data = await response.json();

        const dataList = document.getElementById('data-list');
        data.forEach(item => {
            const listaItem = document.createElement('li');
            listaItem.textContent = Json.stringify(item);
            dataList.appendChild(listaItem);
        });
    } catch (err) {
        console.error('Erro ao buscar dados', err);
    }
}

fetchData(); //Chama a função para buscar os dados