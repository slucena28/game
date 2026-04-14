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
