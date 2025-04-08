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
    alert("Você está perto da saída")
  }
  
  rodada = rodada + 1
  
}
if(rodada == 6){
  alert("Parabéns Você saiu do labirinto!")
}

}
document.getElementById('btnJogar').addEventListener('click', function() {
      
  jogar('rodada');});

 


function como_jogar() {
const mensagem = document.getElementById("mensagem");
  mensagem.innerHTML = "Você precisa escolher entre opções para fugir do labirinto. Será que você consegue?";
}

