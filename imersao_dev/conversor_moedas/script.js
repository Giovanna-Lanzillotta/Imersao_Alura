function converter(moeda) {

    let valor = document.getElementById('valor').value;
    let cotacaoDolar = 0.1712;
    let cotacaoEuro = 0.1562;
    let cotacaoWon = 0.0040;
    
    let resultadoInput = document.getElementById('resultado');
    
    if (moeda === 'euro') {
        let resultado = cotacaoEuro * valor;
        // alert("O valor em Euro é: R$ " + resultado);
        resultadoInput.value = resultado.toFixed(2);
    } else if (moeda === 'dolar') {
        resultado = cotacaoDolar * valor;
        // alert("O valor em Dólares é: $ " + resultado);
        resultadoInput.value = resultado.toFixed(2);
      } else if (moeda === 'won') {
        resultado = cotacaoWon * valor;
        // alert("O valor em Won é: $ " + resultado);
        resultadoInput.value = resultado.toFixed(2);
    } else {
        alert("Moeda não reconhecida.");
    }
     
    }
    
    document.getElementById('btnDolar').addEventListener('click', function() {
      
        converter('dolar');
    });
    
    document.getElementById('btnEuro').addEventListener('click', function() {
      
        converter('euro');
    });
    
    document.getElementById('btnWon').addEventListener('click', function() {
      
        converter('won');
    });
    

