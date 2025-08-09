const keyWebPageTemp = '6a98d033df7226983b3920af0398cfdd';

async function clickButton() {

    const cidade = document.querySelector(".input-cidade").value
    //alert(cidade)  
    
    //API fetch 

    const dados = await //Server para aguardar o resultado da consulta ao servidor - API request.
    
    fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${keyWebPageTemp}&lang=pt_br&units=metric`
    ).then(response => response.json())

    //Resposta na tela do usuário via nossa aplicação

    console.log(dados)
    //alert(dados.name, dados.main.temp+ "°C", dados.weather[0].description, dados.main.humidity+ "%") Não deu certo com o Alert!
        
    //Resposta na aplicação em seus respectivos campos

    document.querySelector('.cidade').textContent = "Tempo em "+dados.name

    document.querySelector('.temp').textContent = Math.floor(dados.main.temp) + "°C" //Arredonda o número

    document.querySelector('.texto-previsao').textContent = dados.weather[0].description

    document.querySelector('.umidade').textContent = "Umidade: ".dados.main.humidity + "%"

    document.querySelector('.img-previsao').scr=`https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`


    // const btn_buscar = document.querySelector(".btn-buscar")  --- Busca via Teclado, pressionando a tecla "Enter"

    // btn_buscar.addEventListener("Keydown", function(event){
    //     if (event.key === "Enter"){

    //         clickButton();

    //     }
    //   })
}