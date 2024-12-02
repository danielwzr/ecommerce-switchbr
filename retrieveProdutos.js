const listaDeProdutos = [
  {
    nome: "Switch Purple",
    preco: 29.9,
    precoPix: function(){ return Number(this.preco * 0.9) },
    categoria: "switches",
    imagem: "img/purple.jpg",
    id: 1,
  },
  {
    nome: "Switch Red",
    preco: 29.9,
    precoPix: function(){ return Number(this.preco * 0.9) },
    categoria: "switches",
    imagem: "img/red.jpg",
    id: 2,
  },
  {
    nome: "Switch Green",
    preco: 29.9,
    precoPix: function(){ return Number(this.preco * 0.9) },
    categoria: "switches",
    imagem: "img/green.jpg",
    id: 3,
  },
  {
    nome: "Switch Brown",
    preco: 29.9,
    precoPix: function(){ return Number(this.preco * 0.9) },
    categoria: "switches",
    imagem: "img/brown.jpg",
    id: 4,
  },
  {
    nome: "Switch Panda",
    preco: 36.9,
    precoPix: function(){ return Number(this.preco * 0.9) },
    categoria: "switches",
    imagem: "img/panda.jpg",
    id: 5,
  },
  {
    nome: "Switch Ocean Blue",
    preco: 36.9,
    precoPix: function(){ return Number(this.preco * 0.9) },
    categoria: "switches",
    imagem: "img/ocean.jpg",
    id: 6,
  },
  {
    nome: "Escova de Limpeza para teclado e acessórios",
    preco: 25.9,
    precoPix: function(){ return Number(this.preco * 0.9) },
    categoria: "acessorios",
    imagem: "img/escova.jpg",
    id: 7,
  },
  {
    nome: "Keycaps Rosa para teclado mecânico",
    preco: 89.9,
    precoPix: function(){ return Number(this.preco * 0.9) },
    categoria: "acessorios",
    imagem: "img/keycaps-rosa.jpg",
    id: 8,
  },
  {
    nome: "Keycaps Rosa para teclado mecânico",
    preco: 89.9,
    precoPix: function(){ return Number(this.preco * 0.9) },
    categoria: "acessorios",
    imagem: "img/keycaps-roxo.jpg",
    id: 9,
  },
  {
    nome: "Keycaps Rosa para teclado mecânico",
    preco: 89.9,
    precoPix: function(){ return Number(this.preco * 0.9) },
    categoria: "acessorios",
    imagem: "img/keycaps-vermelho.jpg",
    id: 10,
  },
];

// BUSCA QTD DE ITENS NO CARRINHO
const qtdCarrinho = document.getElementById("qtd-carrinho");
qtdCarrinho.innerText = window.localStorage.getItem("qtdCarrinho");

// starta o carrinho, se nao tiver nada no local, starta um array
var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// FILTRA e retorna elementos com esse NOME (array, nome)
async function filtroDeProdutos(array, categoria) {
  return await array.filter((produto) =>
    produto.categoria == categoria);
}
