
function jogar(){
idade = parseInt(prompt("Digite sua idade:"))
if (idade < 18) {
    alert("Você não pode jogar")
} else {
    alert("BEM VINDO AO JOGO")
    escolhaJogador = parseInt(prompt("Escolha:\n 1 - pedra✊ \n 2- papel✋ \n 3- tesoura✌"))

    if (escolhaJogador < 1 || escolhaJogador > 3) {
        alert("Escolha inválida! Por favor, escolha 1, 2 ou 3.");
    } else {
    escolhaComputador =  Math.floor(Math.random() * 3) + 1;
    }


    //empate - pedra e pedra| papel e papel | tesoura e tesoura
    if (escolhaJogador === escolhaComputador) {
        alert("😐EMPATE\n" + "Você escolheu: " + escolhaJogador + "\n Escolha computador: " + escolhaComputador)
    
        //jogador escolhe pedra✊
     }if (escolhaJogador == 1) {
        //computador escolhe papel✋
        if (escolhaComputador == 2) {
            alert("😢Pedeu!\n" + "Você escolheu:✊ " + escolhaJogador + "\n Escolha computador:✋ " + escolhaComputador)
            //computador escolhe tesoura✌
        } else if (escolhaComputador == 3) {
            alert("🥳Ganhou!\n" + "Você escolheu:✊ " + escolhaJogador + "\n Escolha computador:✌ " + escolhaComputador)
        }
    }

     //jogador escolhe papel✋
     if (escolhaJogador == 2) {
        //computador escolhe pedra
        if (escolhaComputador == 1) {
            alert("🥳Ganhou!\n" + "Você escolheu:✋ " + escolhaJogador + "\n Escolha computador:✊ " + escolhaComputador)
            //computador escolhe tesoura
        }else if (escolhaComputador == 3) {
            alert("😢Perdeu!\n" + "Você escolheu:✋ " + escolhaJogador + "\n Escolha computador:✌ " + escolhaComputador)
        }

    }
    //jogador escolhe tesoura ✌
     if (escolhaJogador == 3) {
        //computador escolhe papel
        if (escolhaComputador == 2) {
            alert("🥳 Ganhou!\n" + "Você escolheu: ✌" + escolhaJogador + "\n Escolha computador:✋ " + escolhaComputador)
            //computador escolhe pedra
        } else if (escolhaComputador == 1) {
            alert(" 😢Perdeu!\n" + "Você escolheu:✌ " + escolhaJogador + "\n Escolha computador:✊ " + escolhaComputador)
        }
    }
}


}


function como_jogar() {
    alert("PEDRA✊ GANHA TESOURA✌ \n"+
        "TESOURA✌ GANHA PAPEL✋ \n"+
       " PAPEL✋ GANHA PEDRA✊ \n")
    
}


function jogar_3(){
    idade = parseInt(prompt("Digite sua idade:"))
    if (idade < 18) {
        alert("Você não pode jogar")
    } else {
        alert("BEM VINDO AO JOGO")

        pontos_usuario = 0
        pontos_conputador = 0
        while((pontos_conputador) < 3 && (pontos_usuario <3)){
        escolhaJogador = parseInt(prompt("Escolha:\n 1 - pedra✊ \n 2- papel✋ \n 3- tesoura✌"))
    
        if (escolhaJogador < 1 || escolhaJogador > 3) {
            alert("Escolha inválida! Por favor, escolha 1, 2 ou 3.");
        } else {
        escolhaComputador =  Math.floor(Math.random() * 3) + 1;
        }

       
        //empate - pedra e pedra| papel e papel | tesoura e tesoura
        if (escolhaJogador === escolhaComputador) {
            alert("😐EMPATE\n" + "Você escolheu: " + escolhaJogador + "\n Escolha computador: " + escolhaComputador)
        
            //jogador escolhe pedra✊
         }if (escolhaJogador == 1) {
            //computador escolhe papel✋
            if (escolhaComputador == 2) {
                alert("😢Pedeu!\n" + "Você escolheu:✊ " + escolhaJogador + "\n Escolha computador:✋ " + escolhaComputador)
                pontos_conputador +=1
                //computador escolhe tesoura✌
            } else if (escolhaComputador == 3) {
                alert("🥳Ganhou!\n" + "Você escolheu:✊ " + escolhaJogador + "\n Escolha computador:✌ " + escolhaComputador)
                pontos_usuario +=1

            }
        }
    
         //jogador escolhe papel✋
         if (escolhaJogador == 2) {
            //computador escolhe pedra
            if (escolhaComputador == 1) {
                alert("🥳Ganhou!\n" + "Você escolheu:✋ " + escolhaJogador + "\n Escolha computador:✊ " + escolhaComputador)
                pontos_usuario +=1
                //computador escolhe tesoura
            }else if (escolhaComputador == 3) {
                alert("😢Perdeu!\n" + "Você escolheu:✋ " + escolhaJogador + "\n Escolha computador:✌ " + escolhaComputador)
                pontos_conputador +=1
            }
    
        }
        //jogador escolhe tesoura ✌
         if (escolhaJogador == 3) {
            //computador escolhe papel
            if (escolhaComputador == 2) {
                alert("🥳 Ganhou!\n" + "Você escolheu: ✌" + escolhaJogador + "\n Escolha computador:✋ " + escolhaComputador)
                pontos_usuario +=1
                //computador escolhe pedra
            } else if (escolhaComputador == 1) {
                alert(" 😢Perdeu!\n" + "Você escolheu:✌ " + escolhaJogador + "\n Escolha computador:✊ " + escolhaComputador)
                pontos_conputador +=1
            }
        }
    }
}

if (pontos_conputador == 3){
    alert(" 😭 Você perdeu \n"+
        "computador = "+pontos_conputador+"\n"+
        "você = "+pontos_usuario)
}else{
    alert("🥳 Você Ganhou \n"+
        "computador = "+pontos_conputador+"\n"+
        "você = "+pontos_usuario)
}
    
    
    }