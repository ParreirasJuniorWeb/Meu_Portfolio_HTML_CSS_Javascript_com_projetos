document.addEventListener("DOMContentLoaded", () => {
  // Referências para os elementos do DOM
  const productsContainer = document.getElementById("products-container");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalPrice = document.getElementById("cart-total-price");
  const cartIcon = document.getElementById("cart-icon");
  const closeCartBtn = document.getElementById("close-cart");
  const shoppingCartContainer = document.getElementById(
    "shopping-cart-container"
  );
  const cartQuantitySpan = document.getElementById("cart-quantity");

  let cart = [];

  // Dados fictícios para os produtos
  const products = [
    {
      id: 1,
      name: "Hamburger",
      price: 29.99,
      image: "img/hamburger-494706_1280.jpg",
    },
    {
      id: 2,
      name: "Sobremesas",
      price: 89.5,
      image: "img/dessert-352475_1280.jpg",
    },
    {
      id: 3,
      name: "Carnes",
      price: 150.0,
      image: "img/meat-1155132_1280.jpg",
    },
    {
      id: 4,
      name: "Panquecas",
      price: 200.0,
      image: "img/pancakes-2291908_1280.jpg",
    },
    {
      id: 5,
      name: "Saladas",
      price: 200.0,
      image: "img/salad-1672505_1280.jpg",
    },
    {
      id: 6,
      name: "Peixes",
      price: 200.0,
      image: "img/salmon-518032_1280.jpg",
    },
  ];

  // Função para renderizar os produtos na página
  const renderProducts = () => {
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
      productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>R$ ${product.price.toFixed(2)}</p>
                    <button class="btn btn-add-to-cart" data-id="${
                      product.id
                    }">Adicionar ao Carrinho</button>
                </div>
            `;
      productsContainer.appendChild(productCard);
    });
  };

  // Função para adicionar um item ao carrinho
  const addToCart = (productId) => {
    const product = products.find((p) => p.id === productId);
    const cartItem = cart.find((item) => item.id === productId);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    updateCart();
  };

  // Função para remover um item do carrinho
  const removeFromCart = (productId) => {
    cart = cart.filter((item) => item.id !== productId);
    updateCart();
  };

  // Função para atualizar a quantidade de um item no carrinho
  const updateQuantity = (productId, change) => {
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem) {
      cartItem.quantity += change;
      if (cartItem.quantity <= 0) {
        removeFromCart(productId);
      }
    }
    updateCart();
  };

  // Função principal para renderizar o carrinho e calcular o total
  const updateCart = () => {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML =
        "<p style='text-align:center;'>O carrinho está vazio.</p>";
      cartQuantitySpan.textContent = "0";
      cartTotalPrice.textContent = "R$ 0.00";
      return;
    }

    cart.forEach((item) => {
      total += item.price * item.quantity;
      const cartItemElement = document.createElement("div");
      cartItemElement.classList.add("cart-item");
      cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${
        item.name
      }" class="cart-item-img">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p class="item-price">R$ ${item.price.toFixed(2)}</p>
                    <div class="quantity-control">
                        <button data-id="${
                          item.id
                        }" data-action="decrease">-</button>
                        <span>${item.quantity}</span>
                        <button data-id="${
                          item.id
                        }" data-action="increase">+</button>
                    </div>
                </div>
                <button class="item-remove" data-id="${item.id}">
                    <i class='bx bx-trash'></i>
                </button>
            `;
      cartItemsContainer.appendChild(cartItemElement);
    });

    cartQuantitySpan.textContent = cart.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    cartTotalPrice.textContent = `R$ ${total.toFixed(2)}`;
  };

  // Event Listeners
  productsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-add-to-cart")) {
      const productId = parseInt(e.target.dataset.id);
      addToCart(productId);
    }
  });

  cartItemsContainer.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains("item-remove") ||
      target.closest(".item-remove")
    ) {
      const productId = parseInt(target.closest(".item-remove").dataset.id);
      removeFromCart(productId);
    }
    if (target.dataset.action) {
      const productId = parseInt(target.dataset.id);
      const action = target.dataset.action;
      const change = action === "increase" ? 1 : -1;
      updateQuantity(productId, change);
    }
  });

  cartIcon.addEventListener("click", () => {
    shoppingCartContainer.classList.add("active");
  });

  closeCartBtn.addEventListener("click", () => {
    shoppingCartContainer.classList.remove("active");
  });

  // Inicializar o programa
  renderProducts();
});
