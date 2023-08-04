const pesquisarCliente = document.getElementById('pesquisar-cliente');
const sugestoesDeCliente = document.getElementById('sugestoes-de-cliente');

const clientes = [
    'João da Silva', 'Renato Fonseca', 'Sara Rivas', 'Leando Amburgo', 'Rodrigo Fabiano Araujo',
    'Maria Eduarda Souza e Silva', 'Lucas Santanda Petry', 'Nicole Luz', 'Andressa Rubia dos Santos', 'Natan Alcantara'
];

pesquisarCliente.addEventListener('input', () => {
    const searchTerm = pesquisarCliente.value.toLowerCase();

    const filteredItems = clientes.filter(item =>
        item.toLowerCase().includes(searchTerm)
    );

    sugestoesDeCliente.innerHTML = '';

    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const suggestionElement = document.createElement('div');
            suggestionElement.classList.add('sugestao-de-cliente');
            suggestionElement.textContent = item;

            suggestionElement.addEventListener('click', () => {
                pesquisarCliente.value = item;
                sugestoesDeCliente.innerHTML = '';
            });

            sugestoesDeCliente.appendChild(suggestionElement);
        });

        sugestoesDeCliente.style.display = 'block';
    } else {
        sugestoesDeCliente.style.display = 'none';
    }
});

document.addEventListener('click', (event) => {
    if (!pesquisarCliente.contains(event.target)) {
        sugestoesDeCliente.style.display = 'none';
    }
});