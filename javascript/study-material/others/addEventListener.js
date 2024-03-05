// Como usar o addEventListener

const button = document.querySelector("button");

button.addEventListener("click", () => {
  console.log("Cliquei no botão");
});

// Capturar informações do evento.

function alterarTexto(event) {
  console.log(event);
}

button.addEventListener("click", alterarTexto);

// Capturar informações do evento com função anônima

button.addEventListener("click", (event) => {
  console.log(event);
});
