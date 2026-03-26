let botao = document.getElementById('botao'); // botão adivinhar
let imagem = document.getElementById('imagem'); // imagem no html
let nomePalavra = document.getElementById('nomeJogo'); // a palavra oculta
let input = document.getElementById('input-letra'); // o input
let erradas = document.getElementById('erradas'); // letras erradas
let erros = 0; // erros
let letrasEscritas = [];// letras já escritas
const maxErros = 5;// limite de erros
let palavras = ["tecnologia", "inovação", "desenvolvimento", "código", "javascript", // palavras Ocultas
  "algoritmo", "variável", "função", "objeto", "estrutura",
  "projeto", "sucesso", "aprendizado", "foco", "performance",
  "conexão", "interface", "dinâmico", "flexível", "agilidade",
  "cadeira", "mesa", "janela", "porta", "espelho", "tapete", "quadro", "lampada", "caneta", "livro",
  "chave", "relogio", "mochila", "copo", "prato", "garfo", "faca", "colher", "travesseiro", "cama",
  "arvore", "flor", "grama", "nuvem", "chuva", "sol", "lua", "estrela", "montanha", "oceano",
  "rio", "cachorro", "gato", "passaro", "peixe", "leao", "tigre", "elefante", "girafa", "macaco",
  "computador", "teclado", "mouse", "monitor", "celular", "internet", "servidor", "banco", "dados", "api",
  "frontend", "backend", "fullstack", "nuvem", "pixel", "codigo", "binario", "cripto", "token", "rede",
  "alegria", "coragem", "paz", "tempo", "destino", "sorte", "foco", "meta", "sonho", "vida",
  "amor", "respeito", "uniao", "força", "ideia", "mente", "alma", "luz", "som", "cor",
  "cidade", "estrada", "viagem", "musica", "filme", "esporte", "saude", "escola", "trabalho", "jogo",
  "fruta", "cafe", "almoço", "jantar", "festa", "brasil", "mundo", "universo", "futuro", "agora",
  'cachorro', 'gato', 'elefante', 'girafa', 'leão', 'tigre', 'zebra', 'macaco', 'coelho', 'rato',
  'cavalo', 'vaca', 'porco', 'ovelha', 'pato', 'galinha', 'passaro', 'peixe', 'tubarão', 'baleia',
  'casa', 'predio', 'apartamento', 'escola', 'hospital', 'igreja', 'parque', 'praça', 'rua', 'avenida',
  'carro', 'moto', 'bicicleta', 'onibus', 'trem', 'aviao', 'navio', 'foguete', 'trator', 'caminhao',
  'computador', 'teclado', 'mouse', 'monitor', 'celular', 'tablet', 'fone', 'camera', 'relogio', 'lampada',
  'mesa', 'cadeira', 'sofa', 'cama', 'armario', 'estante', 'geladeira', 'fogao', 'microondas', 'pia',
  'prato', 'copo', 'garfo', 'faca', 'colher', 'panela', 'frigideira', 'xicara', 'garrafa', 'balde',
  'livro', 'caderno', 'caneta', 'lapis', 'borracha', 'regua', 'tesoura', 'papel', 'pasta', 'mochila',
  'sol', 'lua', 'estrela', 'nuvem', 'chuva', 'neve', 'vento', 'fogo', 'água', 'terra',
  'arvore', 'flor', 'folha', 'fruta', 'semente', 'raiz', 'grama', 'jardim', 'floresta', 'montanha',
  'mar', 'rio', 'lago', 'cachoeira', 'praia', 'ilha', 'deserto', 'caverna', 'vulcão', 'abismo',
  'alegria', 'tristeza', 'medo', 'raiva', 'amor', 'odio', 'paz', 'guerra', 'esperança', 'coragem',
  'tempo', 'espaco', 'vida', 'morte', 'saúde', 'doença', 'familia', 'amigo', 'trabalho', 'estudo',
  'musica', 'filme', 'livro', 'teatro', 'dança', 'pintura', 'escultura', 'foto', 'poesia', 'história',
  'futebol', 'basquete', 'vôlei', 'tênis', 'natação', 'corrida', 'luta', 'yoga', 'xadrez', 'baralho',
  'vermelho', 'azul', 'verde', 'amarelo', 'branco', 'preto', 'cinza', 'rosa', 'roxo', 'laranja',
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro',
  'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado', 'domingo', 'manhã', 'tarde', 'noite',
  'brasil', 'portugal', 'angola', 'moçambique', 'mundo', 'universo', 'galaxia', 'planeta', 'satelite', 'cometa',
  'café', 'chá', 'suco', 'leite', 'pão', 'queijo', 'bolo', 'doce', 'salgado', 'fruta'
];
const imagens = [// imagens para cada erro do jogo
    "https://image2url.com/r2/default/images/1774548910976-18886b61-cf05-49db-a54b-39c4a73ba8dd.png", // 100%
    "https://image2url.com/r2/default/images/1774549053393-21c111ab-0adc-48b7-bad7-dbb7d469835f.png", // 80%
    "https://image2url.com/r2/default/images/1774549112433-0146004e-d957-4ba4-af0a-93fc150af1b5.png", // 60%
    "https://image2url.com/r2/default/images/1774549179741-9d206f3d-5af4-4dcf-866f-d9fe07833132.png", // 40%
    "https://image2url.com/r2/default/images/1774549227582-716b9a93-c5ce-4c9e-b5ed-da87a24c5e60.png", // 20%
    "https://image2url.com/r2/default/images/1774548791088-a20dbd17-8da2-4aa3-97ea-e52c4ca2595a.png"  // 0%
];

//https://alfonsogamer360.github.io/Jogo-de-adivinha-o/ 

// função para permitir apenas letras no input
input.addEventListener("input", function () {
    if (input.value.length > 0) {// se o valor do input for maior que 0(existe valor dentro), o botão é habilitado
        botao.disabled = false; // habilita o botão se houver algo no input
    } else {
        botao.disabled = true; // desabilita o botão se o input estiver vazio
    }
   input.value = input.value.replace(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ]/g, ''); // só pode escrever letras com seus acentos respectivos
});

palavraOculta = palavras[Math.floor(Math.random() * palavras.length)]; // a palavra oculta vai receber aleatoriamente uma palavra do array palavras
console.log(palavraOculta);// apenas para teste, usamos para ver a palavra oculta no console do

// função para esconder a palavra oculta e mostrar a quantia de letras(que nem no jogo da forca)
function esconderJogo(palavra) {
    nomePalavra.textContent = "";// começa como nada
    for (let letra of palavra) { // cria uma variável letra para cada letra da palavra
        if (/[a-zA-ZÀ-ÿ]/.test(letra)) {// testa de a-z ou letras acentuadas
            if (letrasEscritas.includes(letra)) {// verifica se a letra já foi escrita
                nomePalavra.textContent += letra + " ";// se a letra escrita existe, ela é mostrada
            } else {
                nomePalavra.textContent += "_ ";// se a letra escrita não existe, é mostrado um traço
            }
        } else {
            nomePalavra.textContent += letra + " "; // se a letra não for uma letra (como espaço ou hífen), ela é mostrada normalmente
        }
    }
}
esconderJogo(palavraOculta); // chama a função para mostrar a palavra oculta com os traços


// função para verificar a letra escrita no input
function verificarLetra() {
    let letra = input.value.toLowerCase();// forçar o input a ser letra minúscula para facilitar a comparação
    if (letra && !letrasEscritas.includes(letra)) { // verifica se o input não está vazio e se a letra ainda não foi escrita
        letrasEscritas.push(letra); // adiciona a letra ao array de letras escritas
        esconderJogo(palavraOculta); // atualiza a exibição da palavra oculta com a nova letra
        erradas.textContent = letrasEscritas.filter(letra => !palavraOculta.includes(letra)).join(', ');// atualiza a exibição das letras erradas

        // se a letra não estiver na palavra oculta, é contado um erro e a imagem é trocada
        if (!palavraOculta.includes(letra)) {
            erros++; // aumenta o número de erros
            trocarImagem(erros); // chama a função para trocar a imagem de acordo com o número de erros
        }
    }
    input.value = "";// limpa o input após verificar a letra

    // verifica se o jogador ganhou (se a palavra oculta não tiver mais traços)
    if (!nomePalavra.textContent.includes("_")) {
      setTimeout(() => {// função vazia para criar um delay
            alert("Você venceu! A palavra oculta era: " + palavraOculta);//alerta o game over e mostra a palavra oculta completa
            location.reload(true);// recarrega a página para começar um novo jogo
            }, 2000);// coloca um delay de 2 segundos para o jogador ver a imagem final antes do alerta
    }
}

// função feita para trocar a imagem de acordo com a quantidade de erros cometidos, e mostrar um alerta de game over caso o jogador atinja o limite de erros
function trocarImagem(erros) {
    imagem.src = imagens[erros];// pega o src da imagem correspondente ao número de erros no array imagens
    if (erros === maxErros) {// se erros for igual ao limite de erros, executa o alerta de game over
            setTimeout(() => {// função vazia para criar delay
            alert("Game Over! A palavra era: " + palavraOculta);//alerta o game over e mostra a palavra oculta completa
            location.reload(true);// recarrega a página para começar um novo jogo
            }, 2000);// coloca um delay de 2 segundos para o jogador ver a imagem final antes do alerta
            }
}
