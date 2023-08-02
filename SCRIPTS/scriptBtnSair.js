const btnSair = document.querySelector('[data-btn-sair]');

btnSair.addEventListener('click', () => {
    const confirmacaoSaida = confirm('Deseja mesmo sair do sistema?');

    console.log(confirmacaoSaida);

    if (confirmacaoSaida) {
        window.location.replace('../index.html');
    }
});