const inputs = document.querySelectorAll('[data-input]');
const btnLogin = document.querySelector('[data-btn-login]');

btnLogin.addEventListener('click', () => {
    const infoLogin = {};
    const data = new Date();

    inputs.forEach(input => {
        const chave = input.getAttribute('data-input');
        const valor = input.value;

        infoLogin[chave] = valor;

        input.value = '';
    });

    
    console.log(infoLogin, data);
});