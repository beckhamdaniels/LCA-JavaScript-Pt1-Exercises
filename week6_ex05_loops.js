const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < 5; i++) {
  console.log(numbers[i]);
}

let i = 5;

while (i >= 1) {
  console.log(i);
  i--;
}

for (const number of numbers) {
  if (number % 2 === 0) {
    console.log(number); 
  }
}

let sumofarray = 0; // Our accumulator starts at 0

// Loop through each index of the array
for (let i = 0; i < numbers.length; i++) {
    sumofarray += numbers[i]; 
}

console.log("The sum of the array is " + sumofarray); // Output: R104