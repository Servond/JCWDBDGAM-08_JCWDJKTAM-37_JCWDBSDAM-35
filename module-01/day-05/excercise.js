function sortNumberMethod(arr) {
  const sorted = [...arr].sort((a, b) => a - b);

  const highest = sorted[sorted.length - 1];
  const lowest = sorted[0];
  const sum = sorted.reduce((a, b) => a + b);
  const avg = sum / sorted.length;

  return { highest, lowest, avg };
}
console.log(sortNumberMethod([5, 4, 24, 32, 10, 99]));

function sortNumber(arr) {
  let highest = arr[0];
  let lowest = arr[0];
  let avg = 0;
  let sum = 0;

  for (const value of arr) {
    if (highest < value) highest = value;
    if (lowest > value) lowest = value;
    sum += value;
  }
  avg = sum / arr.length;
  return { highest, lowest, avg };
}

console.log(sortNumber([5, 4, 24, 32, 10, 99]));

// highest = 5

// highest lebih kecil dari angka iterasinya maka replace value highest
// 5 < 5
// 5 < 4
// 5 < 24
// highest = 24
// 24 < 32
// highest = 32
// 32 < 10
// 32 < 99
// highest = 99

function concat(arr) {
  let message = "";

  for (let i = 0; i < arr.length; i++) {
    message += i == arr.length - 1 ? `and ${arr[i]}` : `${arr[i]}, `;
  }

  return message;
}
console.log(concat(["apple", "banana", "cherry", "date"]));

function secondSmallest(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (const num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num > smallest) {
      secondSmallest = num;
    }
  }

  return secondSmallest;
}

console.log(secondSmallest([1, 5, 6, 2, 4, 3, 1]));

// arr[(5, 6, 2, 4, 3, 1)];

function addSamePositition(arr1, arr2) {
  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] + arr2[i]);
  }

  return newArr;
}

console.log(addSamePositition([1, 2, 3], [3, 2, 1]));

function addNonExisting(arr, n) {
  //   const check = arr.find((a) => a == n);
  //   console.log(check);
  //   if (!check) arr.push(n);
  if (typeof n !== "number") return "harus angka";

  for (let num of arr) {
    if (num === n) return arr;
  }
  arr.push(n);
  return arr;
}

console.log(addNonExisting([1, 2, 3, 4], "5"));
