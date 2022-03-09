//----------- Variables -----------------//

var screen = document.getElementById("screen") ;
var numChar ; // total number of typed Characters .
var currentChar , previousChar ; //Store Previous and current typed character
var operations = ['+' , '-' , '*' , '/'] ;
//-----------Functions -----------------//

function clearScreen() {
// It clears Calculatrice Screen .
  screen.value = "" ; 

}

function display(x) {
  // it adds one to the existing value .
  screen.value += x ; 
  // Assigning The length of the input value (num of Character)
  numChar = screen.value.length ;
  
  currentChar = x ;

  // console.log("Current " + currentChar) ;

  getPreviousChar() ;

}

function calculate() {
  // The eval function evaluates our string code and can do with it mathematical operations
  screen.value = eval(screen.value) ; 

}

function getPreviousChar() {
  //The substring() method extracts characters, between two indices (positions), from a string, and returns the substring.
 
  previousChar =  screen.value.substring(numChar-2,numChar-1);
  checkSyntax() ;

}

function checkSyntax() {

  if(operations.includes(currentChar) && numChar == 1) {
      removerChar();

  }
  if(operations.includes(previousChar) && operations.includes(currentChar)) {

    if(previousChar == currentChar){
      removerChar() ; 
    }else {
      // it tkes the penultimate sign 
      overWrite();
    }
    
  }
}
// Overwriting function .
function overWrite() {

  screen.value = screen.value.slice(0,numChar - 2) + screen.value.slice(numChar-1) ;

}

// Remove Function 
function removerChar() {

  screen.value.substring(0,numChar-1);

}






