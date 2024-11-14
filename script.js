let chilometri = parseInt(prompt('Quanti KM devi percorrere?'));
console.log('Chilometri =', chilometri);

let età = parseInt(prompt('Qual\'è la tua età?'));
console.log('Età =', età);

let price = 0.21 * chilometri;
console.log('Prezzo intero =', price.toFixed(2));

let priceMin = price - (price * 20 / 100);
console.log('Prezzo scontato per minorenni =', priceMin.toFixed(2));

let priceOver = price - (price * 40 / 100);
console.log('Prezzo scontato per Over 65 =', priceOver.toFixed(2));

if (età < 18) {
  console.log('Prezzo viaggio scontato per minorenni =', priceMin.toFixed(2));
} else if (età => 65) {
  console.log('Prezzo Viaggio scontato per over 65 =', priceOver.toFixed(2));
} else {
  console.log('Prezzo Viaggio =', price.toFixed(2));
}

