function jogar() {

corredores = ["","",""]
computador = ["","",""]

velocidade_corredores = 0
velocidade_computador = 0

//parte do usuário
for(let i = 0;i < 3;i++){
  escolha_corredores = prompt("Digite o nome do seu corredor " +( i+1))
  corredores[i] = escolha_corredores
  velocidade_corredores += Math.floor(Math.random() * 100) + 1
}
alert("Seus corredores são: "+corredores)



//parte do computador
for(let i = 0;i < 3;i++){
  lista_computador = Math.floor(Math.random() * 5)
  possiveis_computador = ["Coiote","Abobrinha","SuperZ","Lunna","DarthVoz"]
  
  //splice(): Após adicionar o personagem ao array computador, o método splice(lista_computador, 1) é usado para remover o personagem escolhido do array possiveis_computador
  computador[i] =  possiveis_computador.splice(lista_computador, 1);
}

velocidade_computador +=  Math.floor(Math.random() * 100) + 1
alert("Outro Time: " + computador.join(", "));


if (velocidade_corredores > velocidade_computador){
  alert("Você ganhou com "+velocidade_corredores+" contra "+velocidade_computador)
  
}else if(velocidade_computador > velocidade_corredores){
  alert("Você perdeu com "+velocidade_corredores+" contra "+velocidade_computador)
}else{
  alert("Opa deu empate!")

}
}

document.getElementById('btnJogar').addEventListener('click', function() {

      
  jogar('rodada');});

  
function como_jogar() {
  const mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "Escolha seus corredores e veja que é o mais veloz!🏃‍♂️🏃‍♂️🏃‍♂️";
  }