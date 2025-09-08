const arr1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

const arr2 = [
  { name: "Student 5", email: "student1@mail.com" },
  { name: "Student 5", email: "student1@mail.com" },
  { name: "Student 3", email: "student3@mail.com" },
];

// function mergedArr(arr1, arr2) {
//   const merged = [...arr1];

//   arr2.forEach((x) => {
//     // LOOP 1 FOREACH
//     // student = { name: "Student 1", email: "student1@mail.com" },
//     if (merged.some((s) => s.email !== x.email && s.name !== x.name)) {
//       // LOOP 1 MERGED.SOME
//       // s = { name: "Student 1", email: "student1@mail.com" },
//       // if s.email(student1@mail.com) === student.email(student1@mail.com) mereturn true
//       // negasi true = false
//       merged.push(x);
//     }
//   });
//   return merged;
//   //   for (let i = 0; i < arr2.length; i++) {
//   //     // LOOP 1
//   //     // arr2[0] = { name: "Student 1", email: "student1@mail.com" },
//   //     arr2[i];
//   //   }
// }

function mergedArr(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  const unique = [];

  for (const student of merged) {
    let isDup = false;

    for (const uniq of unique) {
      if (uniq.email === student.email && uniq.name === student.name) {
        isDup = true;
        break;
      }
    }

    if (!isDup) {
      unique.push(student);
    }
  }

  return unique;
}

console.log(mergedArr(arr1, arr2));

function reverseObj(arr) {
  const result = [];

  for (const obj of arr) {
    const reverse = {};
    for (const key in obj) {
      reverse[obj[key]] = key;
    }
    result.push(reverse);
  }
  return result;
}

const arrObj = [
  { name: "david", age: 20 },
  { name: "sara", age: 52 },
  { student: "Student 1", email: "student1@mail.com" },
];

console.log(reverseObj(arrObj));

function factorial(n) {
  console.log(n);
  if (n == 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));
