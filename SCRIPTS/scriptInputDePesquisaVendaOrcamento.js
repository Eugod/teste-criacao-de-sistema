const searchBox = document.getElementById('pesquisar-produto');
const suggestionsContainer = document.getElementById('sugestoes-de-produto');

const items = [
    '5 X 10 Angelim - 3mts', 'Frontal de Pinus Tratado', 'Tapajunta de Pinus Comum', '5 X 10 Eucalipto', 'Item 5',
    'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'
];

searchBox.addEventListener('input', () => {
    const searchTerm = searchBox.value.toLowerCase();

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchTerm)
    );

    suggestionsContainer.innerHTML = '';

    if (filteredItems.length > 0) {
        filteredItems.forEach(item => {
            const suggestionElement = document.createElement('div');
            suggestionElement.classList.add('sugestao-de-produto');
            suggestionElement.textContent = item;

            suggestionElement.addEventListener('click', () => {
                searchBox.value = item;
                suggestionsContainer.innerHTML = '';
            });

            suggestionsContainer.appendChild(suggestionElement);
        });

        suggestionsContainer.style.display = 'block';
    } else {
        suggestionsContainer.style.display = 'none';
    }
});

document.addEventListener('click', (event) => {
    if (!searchBox.contains(event.target)) {
        suggestionsContainer.style.display = 'none';
    }
});