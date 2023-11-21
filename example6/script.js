let field = document.getElementById("field");
function isPrime(n) {
    for(let i = 2; i < n; ++i) {
/* Если п делится на какое-либо из чисел
от 2 до п - 1, то оно составное. */
      if(n % i == 0) {
        return false;
      }
    }
/* Если п ни на что не разделилось, то оно простое.*/
    return true;
}
field.addEventListener("keydown", function(event) {
/* Если нажата клавиша Enter. */
    if(event.which == 13) {
/* Точка останова. */ 
      debugger;
      let number = Number(field.value);
      alert(isPrime(number) ? "Простое!":"Составное!");
    }
});
