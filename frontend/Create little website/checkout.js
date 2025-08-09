let listCart = [];
//get data cart from cookie

function checkCart() {
    var cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('listCart='));
    if(cookieValue){
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}
checkCart();
addCartToHTML();

function addCartToHTML() {
    //clear data from html
    let listCartHTML = document.querySelector(".returnCart .list");
    listCartHTML.innerHTML = "";
    
    let totalQuantityHTML = document.querySelector(".totalQuantity");
    let totalPriceHTML = document.querySelector(".totalPrice");

    let totalQuantity = 0;
    let totalPrice = 0;

    //if has product in cart
    if(listCart){
        listCart.forEach(product => {
            if(product){
                let newP = document.createElement("div");
                newP.classList.add("item");
                newP.innerHTML = `
                <img src="${product.img}" alt="${product.description}">
                        <div class="info">
                            <div class="name">${product.name}</div>
                            <div class="price">$${product.price}/1 product</div>
                        </div>
                        <div class="quantity">${product.quantity}</div>
                        <div class="returnPrice">$${product.price * product.quantity}</div>
                        `;
                        listCartHTML.appendChild(newP);
                        
                        totalQuantity += product.quantity;
                        totalPrice = totalPrice + (product.price * product.quantity);
            }
        });
    }
    totalQuantityHTML.innerHTML = totalQuantity;
    totalPriceHTML.innerHTML = '$' + totalPrice;
};

/* Processing Bar Move */
let singupConent1 = document.querySelector(".stage1-content"),
singupConent2 = document.querySelector(".stage2-content"),
singupConent3 = document.querySelector(".stage3-content"),

stagebtn2b = document.querySelector(".stagebtn2b");

singupConent2.style.display = "none";
singupConent3.style.display = "none";

stagebtn2b.style.display = "none";

function stage1to2() {
            
    singupConent1.style.display = "none"
    singupConent3.style.display = "none"
    singupConent2.style.display = "block"

    document.querySelector(".stageno-1").innerHTML = "<i class='bx bx-check'></i>"
    document.querySelector(".stageno-1").style.backgroundColor = "#52ec61"
    document.querySelector(".stageno-1").style.color = "#fff"
};
function stage2to1() {

    singupConent1.style.display = "block"
    singupConent3.style.display = "none"
    singupConent2.style.display = "none"
    //Voltar 2 to 1
};
function stage2to3() {

    singupConent1.style.display = "none"
    singupConent3.style.display = "block"
    singupConent2.style.display = "none"

    document.querySelector(".stageno-2").innerHTML = "<i class='bx bx-check'></i>"
    document.querySelector(".stageno-2").style.backgroundColor = "#52ec61"
    document.querySelector(".stageno-2").style.color = "#fff"
};
function stage3to2() {

    singupConent1.style.display = "none"
    singupConent3.style.display = "none"
    singupConent2.style.display = "block"
    //voltar 3 to 2
};

/* Cálculo da Calculadora de Frete(R$) */ 
document.getElementById('calculate').addEventListener('click', function(){

    // const valueCepCliente = document.getElementById('valueCEP').value; 

    const endereco = document.getElementById('endereço').value; // ---> Exemplo de formato de Endereço que a API aceita: Rua Luiz Furtado Filho, Letícia, Venda Nova, Belo Horizonte, Região Geográfica Imediata de Belo Horizonte, Região Metropolitana de Belo Horizonte, Região Geográfica Intermediária de Belo Horizonte, Minas Gerais, Região Sudeste, 31570-000, Brasil

    // const enderecoEmpresaCEP = '31.570-220'; //exemplo
    
    const enderecoEmpresa = 'BH, Venda Nova, bairro Letícia, Rua Luiz Furtado Filho, 283'; //exemplo --- Urca, Região Geográfica Imediata do Rio de Janeiro, Região Metropolitana do Rio de Janeiro, Região Geográfica Intermediária do Rio de Janeiro, Rio de Janeiro, Região Sudeste, Brasil

    let fee = 0; //taxa do frete incialmente!

    //Consultar a API do Goolge Maps - const service = new google.maps.DistanceMatrixService();
    // initialize services - URL: //maps.googleapis.com/maps/api/distancematrix/json?origins=Seattle&destinations=San+Francisco&key=${YOUR_API_KEY}

    const APIKey = 'YOUR_API_KEY';
    const url = `https://api.tomtom.com/map/1/tile/basic/main/0/0/0.png?view=Unified&key=${APIKey}`;

    fetch(url, origin2, destinationA, APIKey)
    .then(response => response.JSON(), data);

    if(data.rows.elements.distance.text === '31km'){ //10KM - por exemplo.
        fee = 0.98;
    }else if(data === '2.530 km'){ //20KM
        fee = 1.98;
    }else if(data === '1.896 km'){ //30KM
        fee = 2.98;
    }else {
        fee = 7.88;
    }

    const totalFrete = valueCepCliente + fee;  //Fórmula do cálculo do frete(R$)- depende de cada regra de negócio!

    document.getElementById('total').innerHTML = ("R$ " + totalFrete.toFixed(2).replace('.',','));
    
    // stagebtn2b.style.display = "block";
});

stagebtn2b.style.display = "block";