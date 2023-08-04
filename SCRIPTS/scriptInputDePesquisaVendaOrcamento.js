const pesquisarProduto = document.getElementById('pesquisar-produto');
const sugestoesDeProduto = document.getElementById('sugestoes-de-produto');

const produtos = [
    '5 X 10 Angelim - 3mts', 'Frontal de Pinus Tratado', 'Tapajunta de Pinus Comum', '5 X 10 Eucalipto', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'
];

pesquisarProduto.addEventListener('input', () => {
    const searchTerm = pesquisarProduto.value.toLowerCase();

    const filteredItems = produtos.filter(item =>
        item.toLowerCase().includes(searchTerm)
    );

    sugestoesDeProduto.innerHTML = '';

    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const suggestionElement = document.createElement('div');
            suggestionElement.classList.add('sugestao-de-produto');
            suggestionElement.textContent = item;

            suggestionElement.addEventListener('click', () => {
                pesquisarProduto.value = item;
                sugestoesDeProduto.innerHTML = '';
            });

            sugestoesDeProduto.appendChild(suggestionElement);
        });

        sugestoesDeProduto.style.display = 'block';
    } else {
        sugestoesDeProduto.style.display = 'none';
    }
});

document.addEventListener('click', (event) => {
    if (!pesquisarProduto.contains(event.target)) {
        sugestoesDeProduto.style.display = 'none';
    }
});