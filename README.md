<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Jogo de Adivinhação</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <h1>🎯 Jogo de Adivinhação</h1>

    <p>Tente adivinhar o número secreto entre 1 e 100. Você tem 10 tentativas!</p>

    <input type="number" id="palpite" placeholder="Digite um número" />

    <button onclick="chutar()">Chutar</button>

    <p id="mensagem"></p>
    <p id="tentativas"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>
body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  width: 300px;
}

input {
  padding: 10px;
  width: 80%;
  margin: 10px 0;
  border-radius: 8px;
  border: none;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  background-color: #00c9a7;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #00a38c;
}
let numeroSecreto;
let tentativasRestantes;
const maxTentativas = 10;

// Inicialização do jogo
function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 100) + 1;
  tentativasRestantes = maxTentativas;

  document.getElementById("mensagem").textContent = "";
  document.getElementById("tentativas").textContent = 
    "Tentativas restantes: " + tentativasRestantes;
}

function chutar() {
  const input = document.getElementById("palpite");
  const valor = parseInt(input.value);

  // Validação
  if (isNaN(valor) || valor < 1 || valor > 100) {
    document.getElementById("mensagem").textContent = 
      "⚠️ Digite um número válido entre 1 e 100!";
    return;
  }

  tentativasRestantes--;

  if (valor === numeroSecreto) {
    document.getElementById("mensagem").textContent = "🎉 Você acertou!";
    finalizarJogo();
  } else if (tentativasRestantes === 0) {
    document.getElementById("mensagem").textContent = 
      `💀 Você perdeu! O número era ${numeroSecreto}`;
    finalizarJogo();
  } else if (valor < numeroSecreto) {
    document.getElementById("mensagem").textContent = 
      "🔼 O número secreto é maior!";
  } else {
    document.getElementById("mensagem").textContent = 
      "🔽 O número secreto é menor!";
  }

  document.getElementById("tentativas").textContent = 
    "Tentativas restantes: " + tentativasRestantes;

  input.value = "";
}

function finalizarJogo() {
  document.getElementById("palpite").disabled = true;
}

// Inicia o jogo ao carregar
iniciarJogo();
