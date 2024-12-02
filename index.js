/* MONTA PRODUTOS HTML */
const ulSwitches = document.getElementById("switches-lista");
const ulAcessorios = document.getElementById("acessorios-lista");

filtroDeProdutos(listaDeProdutos, "switches").then((switches) =>
  preencheLista(switches, ulSwitches)
);

filtroDeProdutos(listaDeProdutos, "acessorios").then((acessorios) =>
  preencheLista(acessorios, ulAcessorios)
);

function preencheLista(produtos, elementoHTML) {
  produtos.forEach((produto) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <a href="produto.html?id=${produto.id}">
            <img src=${produto.imagem} alt="${produto.nome}">
        </a>
            <p>${produto.nome}</p>
            <span>R$ ${produto.preco}</span>
            <br>
          <!--  <a href="#" class="btn-add-carrinho">Adicionar ao carrinho</a> -->`;
    li.className = "produto-item";
    elementoHTML.appendChild(li);
  });
}
