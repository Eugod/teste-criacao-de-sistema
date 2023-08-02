const inputs = document.querySelectorAll('[data-input]');
const btnLogin = document.querySelector('[data-btn-login]');

btnLogin.addEventListener('click', fazerLogin);

document.addEventListener('keydown', async (e) => {
    if (e.keyCode == 13) {
        fazerLogin();
    }
});

async function validarLogin(obj) {
    const response = await fetch('../arquivosJsonParaTestes/usuarios.json');
    const dados = await response.json();

    let conectadoComSucesso = false;
    const usuario = obj.usuario;
    const senha = obj.senha;

    dados.forEach(dado => {
        if (dado.usuario === usuario && dado.senha === senha) {
            conectadoComSucesso = true;
        }
    });

    return conectadoComSucesso;
}

function pegarData() {
    const data = new Date();

    const dia = data.getDate();
    const diaFormatado = dia <= 9 ? `0${dia}` : dia;

    const mes = data.getMonth() + 1;
    const mesFormatado = mes <= 9 ? `0${mes}` : mes;

    const ano = data.getFullYear();

    const hora = data.getHours();
    const horaFormatada = hora <= 9 ? `0${hora}` : hora;

    const minuto = data.getMinutes();
    const minutoFormatado = minuto <= 9 ? `0${minuto}` : minuto;

    return `${diaFormatado}/${mesFormatado}/${ano} - ${horaFormatada}:${minutoFormatado}`;
}

function limparInputs(inputs) {
    inputs.forEach(input => input.value = '');
}

async function fazerLogin() {
    const infoLogin = {};
    let data = pegarData();

    inputs.forEach(input => {
        const chave = input.getAttribute('data-input');
        const valor = input.value;

        infoLogin[chave] = valor;
    });

    const conectado = await validarLogin(infoLogin);

    if (conectado) {
        const loginRealizado = { usuario: infoLogin.usuario, data: data };

        localStorage.setItem('loginRealizado', JSON.stringify(loginRealizado));

        window.location.replace('./vendas/vendas.html');

        limparInputs(inputs);
    } else {
        alert('Usuário e/ou senha inválidos!');
    }
}