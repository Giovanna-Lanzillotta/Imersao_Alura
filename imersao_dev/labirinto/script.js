function jogar(rodada) {
 
rodada = 1
while(rodada <= 5){
  console.log("Rodada: "+rodada)
  
 escolhaJogador = prompt("Nível "+rodada+
" \n Escolha um lado para ir:\n 1- Direito 2 -Esquerdo")
 ladoErrado = Math.floor(Math.random()*2) + 1;
  
  if(escolhaJogador == ladoErrado){
    alert("Você escolheu o lado errado e está perdido")
    rodada = 1000/*força o fim do laço*/
  }else{
    alert("Você passou de fase")
  }
  
  rodada = rodada + 1
  
}
if(rodada == 6){
  alert("Parabéns Você saiu do labirinto!")
}



}
document.getElementById('btnJogar').addEventListener('click', function() {
      
  jogar('rodada');});


