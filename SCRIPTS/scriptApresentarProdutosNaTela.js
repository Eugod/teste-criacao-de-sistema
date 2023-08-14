const ulEstoque = document.querySelector('[data-ul-estoque]');

async function buscarProdutos() {
    try {
        const response = await fetch('http://localhost:3000/produtos/buscar');
        const dados = await response.json();

        listarProdutos(dados.produtos);
    } catch (error) {
        console.log(error);
    }
}

function listarProdutos(dados) {
    dados.forEach(dado => {
        let preco = dado.preco_venda;

        let precoFormatado = preco.replace('.',',');

        ulEstoque.innerHTML += `
        <li>
        <p class="estoque-id">${dado.id}</p>

        <p class="estoque-descricao">${dado.descricao}</p>

        <p class="estoque-qtd">${dado.estoque_atual}</p>

        <p class="estoque-und">${dado.unidade}</p>

        <p class="estoque-preco">R$ ${precoFormatado}</p>

        <div class="div-botoes-editar-excluir">
            <button class="botao-editar">Editar</button>
            
            <button class="botao-excluir">Excluir</button>
        </div>
    </li>
        `
    })
}

buscarProdutos();