function converter(moeda) {

    let valor = document.getElementById('valor').value;
    let cotacaoDolar = 0.1712;
    let cotacaoEuro = 0.1562;
    let cotacaoWon = 0.0040;
    
    let resultado;
    
    if (moeda === 'euro') {
        resultado = cotacaoEuro * valor;
        alert("O valor em Euro é: R$ " + resultado);
    } else if (moeda === 'dolar') {
        resultado = cotacaoDolar * valor;
        alert("O valor em Dólares é: $ " + resultado);
      } else if (moeda === 'won') {
        resultado = cotacaoWon * valor;
        alert("O valor em Won é: $ " + resultado);
    } else {
        alert("Moeda não reconhecida. Por favor, digite 'real' ou 'dolar'.");
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
    
