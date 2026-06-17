let pontos = 0;
let atual = 0;

const perguntas = [
  { texto: "Deepfake pode enganar pessoas?", resposta: true },
  { texto: "Fake news são sempre verdadeiras?", resposta: false },
  { texto: "IA pode criar vídeos falsos?", resposta: true },
  { texto: "Tudo na internet é confiável?", resposta: false },
  { texto: "Cidadania digital envolve responsabilidade?", resposta: true }
];

const perguntaEl = document.getElementById("pergunta");
const feedbackEl = document.getElementById("feedback");
const pontosEl = document.getElementById("pontos");
const progressoEl = document.getElementById("progresso");

/* carregar pergunta */
function carregar() {
  perguntaEl.innerText = perguntas[atual].texto;
  feedbackEl.innerText = "";
  progressoEl.style.width = (atual / perguntas.length) * 100 + "%";
}

/* responder quiz */
function responder(valor) {
  if (valor === perguntas[atual].resposta) {
    pontos++;
    feedbackEl.innerText = "✔ Correto!";
  } else {
    feedbackEl.innerText = "❌ Errado!";
  }

  pontosEl.innerText = pontos;
  atual++;

  setTimeout(() => {
    if (atual < perguntas.length) {
      carregar();
    } else {
      perguntaEl.innerText = "Fim do Quiz!";
      feedbackEl.innerText = `Resultado: ${pontos}/${perguntas.length}`;
      progressoEl.style.width = "100%";
    }
  }, 700);
}

/* scroll suave */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* alerta interativo */
function mostrarAlerta() {
  document.getElementById("alertaBox").innerText =
    "⚠️ Atenção: Sempre verifique fontes antes de compartilhar informações!";
}

/* tema */
document.getElementById("temaBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

/* iniciar */
carregar();
