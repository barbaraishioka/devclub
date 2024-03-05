const element = document.querySelector(".class");

element.value = 1234; // Captura e muda conteúdo do elemento
element.value = "String"; // Captura e muda conteúdo do elemento
element.placeholder = "Digite algo"; // Captura e muda o texto do placeholder

const image = document.querySelector("img");
image.src; // mostra o src da imagem

const texto = document.querySelector(".class");

texto.textContent; // Só HTML
texto.innerText; // Leva em conta o CSS
texto.innerHTML; // Trás tudo, inclusive se tiver uma outra tag dentro do elemento e conseguimos inserir HTML dentro do texto.

const button = document.querySelector("button");
button.style.color = "#000000";
button.style.backgroundColor = "#000000";
