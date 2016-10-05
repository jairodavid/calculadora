//Recuperar la informacion de HTML
var calculator = {
result : null,
operator : null,

check_input: function(){
  var self = calculator;
  console.log("check_input");
  var input = document.getElementById("input");
  var input_text = input.value;//Recupera en contenido de html
  var errors = document.querySelector("#error");
  var input_number = Number(input_text);
  if(Number.isNaN(input_number)){//se valida que sea un numero
   input.value = "";
  }
},

set_number: function(button){
  console.log(this);
 return function(){
var input = document.getElementById("input");
input.value = ""+input.value+button.textContent;
  };
},

exec_operator:function(button){
var self = calculator;
return function(){
  self.operator = button.textContent;
  if(self.result===null){

  }
};
},

  clear: function(){
    var self = calculator;
    self.ope1 = null;
    self.ope2 = null;
    self.operator = null;
    var input = document.getElementById("input");
    input.value = "";
  },
};


document.addEventListener("DOMContentLoaded",function(event){
//una vez la pagina ha cargado
var output = document.getElementById("result");
var controlpad = document.getElementById("controlpad");
var button_operators = document.querySelectorAll("#operators button");
var i=0;
for (i=0 ; i<button_operators.length; i++){
  button_operators[i].addEventListener("click", calculator.check_input );
}
var button_numbers = controlpad.querySelectorAll("#numbers button");
for (i=0; i<button_numbers.length;i++){
  button_numbers[i].addEventListener("click", calculator.set_number(button_numbers[i]));
}
var button_clear = controlpad.querySelector("#clear");
button_clear.addEventListener("click", calculator.clear);

});









/*
// Se solicita el operador_a
var operador_a = prompt("Ingrese su primer número:");
// Se solicita el operador_b
var operador_b = prompt("Ingrese su segundo número:");
// Se solicita el operador
var operador = prompt("Ingrese el operador:");
var signo_operacion = null;
// Valida si es un número
function is_number(numero) {
  return !isNaN(numero);
}
// Valida si es un número
function is_operator(operator) {
  if (operator.toLowerCase() === "suma" || operator.toLowerCase() === "resta" || operator.toLowerCase() === "division" || operator.toLowerCase() === "multiplicacion") {
    // Es un operador válido
    switch (operator) {
      case "suma":
          signo_operacion = "+";
          break;
      case "resta":
          signo_operacion = "-";
          break;
      case "multiplicacion":
          signo_operacion = "*";
          break;
      case "division":
          signo_operacion = "/";
          break;
    }
    console.log(signo_operacion);
    return true;
  }
  else {
    // No es un operador válido
    return false;
  }
}

//Funcion suma
var suma = function (a , b){
  console.log("El resultado es  " +  ( a + b ));
};

//Funcion resta
var resta = function (a , b){
  console.log("El resultado es  " +  ( a - b ));
};

//Funcion multiplicar
var multiplicacion = function (a , b){
  console.log("El resultado es  " +  ( a * b ));
};
//Funcion dividir
var division = function (a , b) {
console.log("El resultado es  " +  ( a / b ));
};

// Función que realiza el cálculo de los valores a y b con respecto al operador
function calcular(a, b, operador) {
  if(is_number(a) && is_number(b) && is_operator(operador)){
    //Se puede operar
    x = Number(a);
    y = Number(b);
    switch (signo_operacion) {
      case "+":
        suma(x,y);
        break;

      case "-":
        resta(x,y);
        break;

      case "*":
        multiplicacion(x,y);
        break;

      case "/":
        division(x,y);
        break;
    }
  } else {
    // No se puede operar se envía el mensaje de error
    if(!is_operator(operador)){
      //Error de operador
      console.log("Ingresó un operador no válido");
    }else {
      //Error de parámetro
      console.log(a+" "+signo_operacion+" "+b+" no es una operación válida");
    }
  }
}

calcular(operador_a, operador_b, operador);
*/
