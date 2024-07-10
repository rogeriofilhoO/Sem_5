async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/api/veiculos');
        const data = await response.json();

        const dataList = document.getElementById('data-list');
        dataList.innerHTML = ''; // Limpar tabela

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
          <td>${item.id}</td>
          <td>${item.placa}</td>
          <td>${item.marca}</td>
          <td>${item.modelo}</td>
          <td>${item.ano}</td>
        `;
            dataList.appendChild(row);
        });
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

fetchData();