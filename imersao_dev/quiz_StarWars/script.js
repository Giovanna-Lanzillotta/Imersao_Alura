// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
      pergunta: "Qual é o nome do planeta natal de Luke Skywalker?",
      imagem: "https://static.wixstatic.com/media/4ad342_68b43071a899438984b3016e2f882a5b~mv2.jpg/v1/fill/w_1000,h_500,al_c,q_85/4ad342_68b43071a899438984b3016e2f882a5b~mv2.jpg", // Substitua pela URL da imagem
      respostas: [
        { opcao: "Tatooine", correto: true },
        { opcao: "Hoth", correto: false },
        { opcao: "Endor", correto: false },
        { opcao: "Dagobah", correto: false }
      ]
    },
    {
    pergunta: "Quem é o mestre Jedi que treina Luke Skywalker?",
    imagem:"https://static1.srcdn.com/wordpress/wp-content/uploads/2022/12/how-long-luke-skywalker-on-dagobah.jpg",
      respostas: [
        { opcao: "Obi-Wan Kenobi", correto: false },
        { opcao: "Yoda", correto: true },
        { opcao: "Anakin Skywalker", correto: false },
        { opcao: "Mace Windu", correto: false }
      ]
    },
    {
    pergunta: "Qual é o nome do vilão principal da trilogia original?",
    imagem:"https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=0%2C67%2C1280%2C720",
      respostas: [
        { opcao: " Darth Maul", correto: false },
        { opcao: "Darth Vader", correto: true },
        { opcao: "Palpatine", correto: false },
        { opcao: "Kylo Ren", correto: false }
      ]
    },
     {
    pergunta: "Qual é o nome da nave de Han Solo?",
    imagem:"https://tm.ibxk.com.br/2017/11/09/09173934824118.jpg?ims=750x",
      respostas: [
        { opcao: "X-Wing", correto: false },
        { opcao: "TIE Fighter", correto: false },
        { opcao: "Millennium Falcon", correto: true },
        { opcao: "Star Destroyer", correto: false }
      ]
    },
     {
    pergunta: "Quem é a princesa que se torna uma líder da Aliança Rebelde?",
    imagem:"https://cloudfront-us-east-1.images.arcpublishing.com/gray/K2PL7V7INZOMHHUYL7LKXW2RZQ.jpg",
      respostas: [
        { opcao: "Leia Organa", correto: true },
        { opcao: "Padmé Amidala", correto: false },
        { opcao: "Rey", correto: false },
        { opcao: "Ahsoka Tano", correto: false }
      ]
    }
  ];
  
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const imagemElemento = document.querySelector(".imagem-pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta

     // Define a imagem da pergunta
    imagemElemento.src = perguntaAtual.imagem;

    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
    
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos++; // Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }


  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }

  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();
  