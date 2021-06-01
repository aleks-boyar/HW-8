function mainFunction(callback) {
   let number = +prompt("Введите чило");
   let degree = +prompt("Введите степень");

   callback(number, degree)

}
function exponentiation(num, deg) {
   let result = num ** deg;
   alert(result)
}

// mainFunction(exponentiation)
// mainFunction(sqrt)
// mainFunction(division)
// mainFunction(multiplay)
mainFunction(modulo)

function sqrt(num) {
   const result = Math.sqrt(num)
   alert(result)
}

function division(num, num2) {
   const result = num / num2
   alert(result)
}
function multiplay(num1, num2) {
   const result = num1 * num2
   alert(result)
}
function modulo(num1,num2){
   const result = num1%num2
   alert(result)
}