/*
Svolgimento:
1. Stampa i numeri da 1 a 100 -> ciclo for
2. Per verificare se un numero è divisibile per un altro, uso l'operatore modulo (%).
   - Se n % 3 === 0 → significa che n è divisibile per 3.
   - Se n % 5 === 0 → significa che n è divisibile per 5.
3. Le condizioni vanno controllate in ordine:
   - Prima se è divisibile sia per 3 che per 5 (la meno stringente, cioè n % 3 === 0 && n % 5 === 0) → stampa "FizzBuzz".
   - Poi se è divisibile solo per 3 → stampa "Fizz".
   - Poi se è divisibile solo per 5 → stampa "Buzz".
   - Altrimenti stampa il numero stesso.
*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}