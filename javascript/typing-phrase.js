const typingPhrase = document.querySelector(".typing-phrase");
const phrases = [
  '"Difícil é apenas algo que eu ainda não sei fazer!"',
  '"A melhor ideia do mundo é a que você põe em prática!"',
];

let currentPhrase = 0;
let i = 0;

function typePhrase() {
  if (i < phrases[currentPhrase].length) {
    typingPhrase.textContent += phrases[currentPhrase][i];
    i++;
    setTimeout(typePhrase, 50);
  } else {
    setTimeout(deletePhrase, 2000); // espera 2 segundos antes de apagar
  }
}

function deletePhrase() {
  if (i > 0) {
    typingPhrase.textContent = phrases[currentPhrase].slice(0, --i);
    setTimeout(deletePhrase, 50);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    i = 0;
    typePhrase(); // começa a escrever a próxima frase automaticamente
  }
}

typePhrase();
