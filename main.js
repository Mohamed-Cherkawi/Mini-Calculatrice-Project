function Addition(a, b) {
  // it takes Two numbers and Add Them

  return a + b;
}

console.log(Addition(3, 3));

function Soustraire(a, b) {
  // it takes Two numbers and Substract Them

  return a - b;
}

console.log(Soustraire(3, 3));

function Multiplication(a, b) {
  // it takes Two numbers and Substract Them

  return a * b;
}

console.log(Multiplication(3, 3));

function Division(a, b) {
  // it takes Two numbers and Divide Them

  return a / b;
}

console.log(Division(3, 3));

function operate() {
    let operator = prompt("Please Enter an Operator");
    let number1 = prompt("Please Enter First Number");
    let number2 = prompt("Please Enter Second Number Number");

    console.log("${number1} +  ${operator} + ${number2}" );
}

