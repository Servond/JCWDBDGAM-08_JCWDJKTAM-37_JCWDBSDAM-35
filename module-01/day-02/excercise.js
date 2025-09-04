let x = 9;
let isPrime = true;

if (x <= 1) {
  console.log("Masukan angka lain");
} else {
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(
  isPrime ? `${x} adalah bilangan prima` : `${x} bukan bilangan prima`
);

let n = 5;
let sum = 0;

let message = `${n} => `;
for (let i = 1; i <= n; i++) {
  sum += i;
  message += i === n ? `${i} = ${sum}` : `${i} + `;
}

console.log(message);

n = 3;
sum = n;

for (let i = n - 1; i >= 1; i--) {
  sum *= i;
}

console.log(sum);

// N = 5
// 1 1 2 3 5 8 13 21 34

// HINT
// 1. FIBONNACI ADALAH HASIL PERTAMBAHAN 2 ANGKA SEBELUMNYA
// 2. DARI SOAL FIBONNACI SEQUENCE DIMULAI DARI 1 DAN BUKAN DIMULAI 0

n = 3;
let n1 = 1;
let n2 = 1;
sum = 1;
for (let i = 2; i < n; i++) {
  sum = n1 + n2;
  n1 = n2;
  n2 = sum;
}
console.log(sum);
