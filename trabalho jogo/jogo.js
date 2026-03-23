let botao = document.getElementById('botao');
let img1 = document.querySelector('img1');
let img2 = document.querySelector('img2');
let img3 = document.querySelector('img3');
let img4 = document.querySelector('img4');
let img5 = document.querySelector('img5');
let img6 = document.querySelector('img6');

botao.addEventListener('click', ()=>{

});
const input = document.querySelector("#input-letra");

input.addEventListener("input", function() {
  this.value = this.value.replace(/[^a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ\s]/g, '');
});


let palavras = ["tecnologia", "inovação", "desenvolvimento", "código", "javascript",
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
  'cachorro', 'gato', 'elefante', 'girafa', 'leao', 'tigre', 'zebra', 'macaco', 'coelho', 'rato',
  'cavalo', 'vaca', 'porco', 'ovelha', 'pato', 'galinha', 'passaro', 'peixe', 'tubarao', 'baleia',
  'casa', 'predio', 'apartamento', 'escola', 'hospital', 'igreja', 'parque', 'praça', 'rua', 'avenida',
  'carro', 'moto', 'bicicleta', 'onibus', 'trem', 'aviao', 'navio', 'foguete', 'trator', 'caminhao',
  'computador', 'teclado', 'mouse', 'monitor', 'celular', 'tablet', 'fone', 'camera', 'relogio', 'lampada',
  'mesa', 'cadeira', 'sofa', 'cama', 'armario', 'estante', 'geladeira', 'fogao', 'microondas', 'pia',
  'prato', 'copo', 'garfo', 'faca', 'colher', 'panela', 'frigideira', 'xicara', 'garrafa', 'balde',
  'livro', 'caderno', 'caneta', 'lapis', 'borracha', 'regua', 'tesoura', 'papel', 'pasta', 'mochila',
  'sol', 'lua', 'estrela', 'nuvem', 'chuva', 'neve', 'vento', 'fogo', 'agua', 'terra',
  'arvore', 'flor', 'folha', 'fruta', 'semente', 'raiz', 'grama', 'jardim', 'floresta', 'montanha',
  'mar', 'rio', 'lago', 'cachoeira', 'praia', 'ilha', 'deserto', 'caverna', 'vulcão', 'abismo',
  'alegria', 'tristeza', 'medo', 'raiva', 'amor', 'odio', 'paz', 'guerra', 'esperança', 'coragem',
  'tempo', 'espaco', 'vida', 'morte', 'saude', 'doença', 'familia', 'amigo', 'trabalho', 'estudo',
  'musica', 'filme', 'livro', 'teatro', 'dança', 'pintura', 'escultura', 'foto', 'poesia', 'historia',
  'futebol', 'basquete', 'volei', 'tenis', 'nataçao', 'corrida', 'luta', 'yoga', 'xadrez', 'baralho',
  'vermelho', 'azul', 'verde', 'amarelo', 'branco', 'preto', 'cinza', 'rosa', 'roxo', 'laranja',
  'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro',
  'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado', 'domingo', 'manhã', 'tarde', 'noite',
  'brasil', 'portugal', 'angola', 'moçambique', 'mundo', 'universo', 'galaxia', 'planeta', 'satelite', 'cometa',
  'cafe', 'cha', 'suco', 'leite', 'pao', 'queijo', 'bolo', 'doce', 'salgado', 'fruta'
];

palavraOculta = palavras[Math.floor(Math.random() * palavras.length)];
console.log(palavraOculta)

botao.addEventListener('click', () => {
   if (palavraOculta.includes(input)) {
    console.log("a");
   } else {
    console.log("b");  
   }
});