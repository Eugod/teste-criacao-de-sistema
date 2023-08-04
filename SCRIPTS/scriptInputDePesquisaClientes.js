const searchBox = document.getElementById('pesquisar-cliente');
const suggestionsContainer = document.getElementById('sugestoes-de-cliente');

const items = [
    'João da Silva', 'Renato Fonseca', 'Sara Rivas', 'Leando Amburgo', 'Rodrigo Fabiano Araujo',
    'Maria Eduarda Souza e Silva', 'Lucas Santanda Petry', 'Nicole Luz', 'Andressa Rubia dos Santos', 'Natan Alcantara'
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
            suggestionElement.classList.add('sugestao-de-cliente');
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