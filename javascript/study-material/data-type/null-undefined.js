// Null = nulo (Você insere de propósito)
// Undefined = indefinido (Geralmente causado por um erro pois não encontrou o dado selecionado)

const User = {
  nome: "Rodolfo",
  idade: 30,
  id: null,
};

console.log(User.id); // null

console.log(User.abacate); // undefined
