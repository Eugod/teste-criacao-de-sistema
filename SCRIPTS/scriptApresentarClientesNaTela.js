const ulClientes = document.querySelector('[data-ul-clientes]');

async function buscarClientes() {
    try {
        const response = await fetch('http://localhost:3000/clientes/buscar');
        const dados = await response.json();

        listarProdutos(dados.clientes);
    } catch (error) {
        console.log(error);
    }
}

function listarProdutos(dados) {
    dados.forEach(dado => {
        ulClientes.innerHTML += `
        <li>
        <p class="cliente-id">${dado.id}</p>

        <p class="cliente-nome">${dado.nome}</p>

        <p class="cliente-cpf">${dado.cpf}</p>

        <p class="cliente-telefone">${dado.telefone}</p>

        <p class="cliente-endereco">${dado.endereco}</p>

        <div class="div-botoes-editar-excluir">
            <button class="botao-editar">Editar</button>
            
            <button class="botao-excluir">Excluir</button>
        </div>
    </li>
        `
    })
}

buscarClientes();