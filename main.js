// alert("js running");
//? ----------------- variables -------------//
var queue = [];
var input = 0;
var screen = document.getElementById("screen");
var clear =document.getElementById("clear");
clear.addEventListener('click',clearScreen); 
var suprimer = document.getElementById("clear");
suprimer.addEventListener('click',suprimer) ;

//----------------- functions -------------//
//  console.log(typeof screen);//Object

//! on affiche  les chiffres dans un screen . 5 + 6
function display(num) {
 
  if (num != ".") {
    input += num;
    screen.value += num;
    console.log(`input lors de l'affichage : ${input}`);// 5
  }
}

// ! on va supprimer les donnés dans le screen
function clearScreen() {
  screen.value = ""; // Empty value on screen
  queue = []; // queue Array Empty .
  input = 0; 
  console.log(`input lors de display : ${input}`);
}

// !! add input on the queue comme un array
function AddToQueue(input) {
  queue.push(input); // The argument gets push to the queue array
}

// ! une fois cliquer sur les + , - , / , * .

function operation(arg) {

  if (input !== 0) { // "5" => 5
    input = parseFloat(input); 
    AddToQueue(input);
    AddToQueue(arg); // [(5,+)]
    console.log(`queue lors de l'opération :   ${queue}`);
    screen.value += arg; // Adding the operator to the array .
    input = 0;
    console.log(`input lors de l'operation : ${input}`);
  }
}

// ! une fois cliquer sur = va calculer le résultat
function caculerScreen(resultat) {
  // * pour add input sur la queue
  if (input !== 0) {
    input = parseFloat(input); // 
    AddToQueue(input); //[5,+,6]
    console.log(`input dans fonction calculer :   ${input}`);
    console.log(`queue dans fonction calculer :   ${queue}`);
  }
  var answer = resultat[0];
  var Diviser_zero = true;

  for (var i = 2; i < resultat.length; i++) {

    switch (queue[i - 1]) {

    case "+":

        answer += resultat[i]; // answer = answer + resulat[2] .
        console.log(`queue[i-1] boucle:   ${queue[i - 1]}`);
        console.log(`resultat[i] :   ${resultat[i]}`);
        break;

    case "-":
    
        answer -= resultat[i];
        console.log(`queue[i-1] boucle:   ${queue[i - 1]}`);
        console.log(`resultat[i] :   ${resultat[i]}`);
        
        break;

    case "*":

        answer *= resultat[i];
        console.log(`queue[i-1] boucle:   ${queue[i - 1]}`);
        console.log(`resultat[i] :   ${resultat[i]}`);
        break;

    case "/":
        //  .
        if (resultat[i] === 0) {
          Diviser_zero = false;
        } else {
          answer /= resultat[i];
          console.log(`queue[i-1] boucle:   ${queue[i - 1]}`);
          console.log(`resultat[i] :   ${resultat[i]}`);
        }
        break;
    default:
        console.log(`the condition is not avalaible`);
        break;
    }
    console.log(`the answer is :   ${answer}`);
  }
  if (Diviser_zero === false) {
    clearScreen();
    screen.value = "ERROR";
    console.log(`the resultat is ${queue}`);
  } else {
    screen.value = answer;
    input = answer;
    queue = [];
    console.log(`the resultat is ${answer}`);
  }
}

// ! suprimer le dernier chiffre
function suprimer() {
  screen.value = screen.value.substring(0, screen.value.length - 1);
  input = input.substring(0, input.length - 1);
}

// ! pour tester le code sur le console
function consovarest() {
  console.log(`######## console en general ########`);
  console.log(`input en général : ${input}`);
  console.log(`queue de facon générale :   ${queue}`);
  // console.log(`add to queue input parsefloat :   ${AddToQueue(input)}`);
  console.log(`####################################`);
}