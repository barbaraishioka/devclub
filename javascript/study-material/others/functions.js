function soma() {
  console.log(1 + 1);
}

function soma2(numero1, numero2) {
  console.log(numero1 + numero2);
}

let soma3 = () => {
  console.log(2 + 2);
};

let soma4 = (numero1, numero2) => {
  console.log(numero1 + numero2);
};

soma(); // 2
soma2(6, 6); // 12
soma3(); // 4
soma4(7, 7); // 14
