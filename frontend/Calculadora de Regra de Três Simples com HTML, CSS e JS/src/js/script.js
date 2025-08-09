document.getElementById('calculate').addEventListener('click', function (){
    
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    //alert(num1);

    if(isNaN(num1) || isNaN(num2) || isNaN(num3) || num1 === 0) { //Validação da entrada de números, que tem que ser diferente de vazio ou a primeira entrada ser zero (0)
        
        document.getElementById('result').textContent = "Número Inválido";
        return;

    }

    let result = (num3 * num2)/ num1; //Cálcula da Regra de Três

    if(Number.isInteger(result)) {

        document.getElementById('result').textContent = result; //Para números inteiros

    }else {

    document.getElementById('result').textContent = result.toFixed(2).replace('.',','); //Para arredondar números flutuantes em até duas (2) casas decimais 
        //.replace('.',',') -> Serve para substituir o uso de ponto final para números que tenham casas decimais - o ponto se transforma em vírgula - graças ao comando .replace() 
    }
});