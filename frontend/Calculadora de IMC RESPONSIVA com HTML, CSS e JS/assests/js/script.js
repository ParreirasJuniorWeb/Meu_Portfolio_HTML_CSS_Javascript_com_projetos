const form = document.getElementById('form');

form.addEventListener('submit', function(event){

    event.preventDefault(); //Impede o carregamento da página web ao submitar bo botão

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    const bmi = (weight / (height * height)).toFixed(2); //toFixed -> Serve para arredondar o valor de números com muitas casas decimais.

    const value =  document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if(bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal.";

        value.classList.remove('attention');
        value.classList.add('normal');

    }else if (bmi > 25 && bmi <= 30) {
        description = "Cuidade, você está com sobrepeso!";
    }else if (bmi > 30 && bmi <= 35){
        description = "Cuidade, você está com obesidade moderada!";
    }else if (bmi > 35 && bmi <= 40){
        description = "Cuidade, você está com obesidade severa!";
    }else{
        description = "Cuidade, você está com obesidade morbida!";
    }

    if (Number.isInteger(bmi)){
        value.textContent = parseInt(bmi);
    }else {
        value.textContent = bmi.replace('.',',');
    }

    document.getElementById('description').textContent = description;
});