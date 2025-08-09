// Referências aos elementos do DOM para evitar repetições
const openShopping = document.getElementById("open-shopping-cart");
const closeShopping = document.getElementById("close-shopping-cart");
const list = document.getElementById("product-list");
const listCard = document.getElementById("cart-items-list");
const body = document.querySelector("body");
const total = document.getElementById("total-price");
const quantity = document.getElementById("cart-quantity");

// Lógica para abrir e fechar o carrinho
openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

// Inventário dos produtos da loja
const products = [
  {
    id: 1,
    name: "PRODUCT NAME 1",
    imagens: "img/briefcase-161032_1280.png",
    price: 2000,
  },
  {
    id: 2,
    name: "PRODUCT NAME 2",
    imagens: "img/briefcase-161032_1280.png",
    price: 2200,
  },
  {
    id: 3,
    name: "PRODUCT NAME 3",
    imagens: "img/briefcase-161032_1280.png",
    price: 2400,
  },
  {
    id: 4,
    name: "PRODUCT NAME 4",
    imagens: "img/briefcase-161032_1280.png",
    price: 2600,
  },
  {
    id: 5,
    name: "PRODUCT NAME 5",
    imagens: "img/briefcase-161032_1280.png",
    price: 2800,
  },
  {
    id: 6,
    name: "PRODUCT NAME 6",
    imagens: "img/briefcase-161032_1280.png",
    price: 3000,
  },
];
let listCards = [];

// Função para inicializar a página com os produtos
const initApp = () => {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="${value.imagens}" alt="${value.name}">
            <div class="title">${value.name}</div>
            <div class="price">R$ ${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Adicionar ao Carrinho</button>`;
    list.appendChild(newDiv);
  });
};

// Função para adicionar itens ao carrinho
const addToCard = (key) => {
  if (listCards[key] == null) {
    // Copia o produto da lista principal
    listCards[key] = { ...products[key], quantity: 1 };
  } else {
    // Apenas aumenta a quantidade se o item já existir
    listCards[key].quantity += 1;
  }
  reloadCard();
};

// Função para atualizar a exibição do carrinho
const reloadCard = () => {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value, key) => {
    if (value != null) {
      totalPrice += value.price * value.quantity;
      count += value.quantity;

      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="${value.imagens}" alt="${value.name}"></div>
                <div class="cardTitle">${value.name}</div>
                <div class="cardPrice">R$ ${(
                  value.price * value.quantity
                ).toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });

  total.textContent = `R$ ${totalPrice.toLocaleString()}`;
  quantity.textContent = count;
};

// Função para alterar a quantidade de itens
const changeQuantity = (key, newQuantity) => {
  if (newQuantity === 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = newQuantity;
  }
  reloadCard();
};

// Inicializar a aplicação quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

// Melhorias:

// Constantes e IDs: Usei const para as referências do DOM e IDs para uma seleção mais limpa.

// Função de Inicialização: A função initApp foi criada para carregar os produtos, separando a lógica de exibição da lógica do carrinho.

// Delegation de Eventos: Embora os onclick ainda sejam usados no HTML dinâmico, o código está mais preparado para ser refatorado com a delegação de eventos, que é uma prática mais profissional.

// Legibilidade: O código está mais bem comentado, com nomes de funções e variáveis mais claros.
