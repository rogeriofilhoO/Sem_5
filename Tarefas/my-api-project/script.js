async function fetchData() {
    try {
        const response = await fetch('http://localhost:3000/api/veiculos');
        const data = await response.json();

        const dataList = document.getElementById('data-list');
        if (dataList) {
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
        }
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const inserirForm = document.getElementById('inserir-form');
    const atualizarForm = document.getElementById('atualizar-form');
    const removerForm = document.getElementById('remover-form');

    if (inserirForm) {
        inserirForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(inserirForm);
            const data = Object.fromEntries(formData);

            try {
                const response = await fetch('http://localhost:3000/api/veiculos', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    alert('Veículo inserido com sucesso');
                    inserirForm.reset();
                } else {
                    alert('Erro ao inserir veículo');
                }
            } catch (error) {
                console.error('Erro ao inserir veículo:', error);
            }
        });
    }

    if (atualizarForm) {
        atualizarForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(atualizarForm);
            const data = Object.fromEntries(formData);
            const id = data.id;
            delete data.id;

            try {
                const response = await fetch(`http://localhost:3000/api/veiculos/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    alert('Veículo atualizado com sucesso');
                    atualizarForm.reset();
                } else {
                    alert('Erro ao atualizar veículo');
                }
            } catch (error) {
                console.error('Erro ao atualizar veículo:', error);
            }
        });
    }

    if (removerForm) {
        removerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(removerForm);
            const data = Object.fromEntries(formData);
            const id = data.id;

            try {
                const response = await fetch(`http://localhost:3000/api/veiculos/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (response.ok) {
                    alert('Veículo removido com sucesso');
                    removerForm.reset();
                } else {
                    alert('Erro ao remover veículo');
                }
            } catch (error) {
                console.error('Erro ao remover veículo:', error);
            }
        });
    }

    fetchData();
});