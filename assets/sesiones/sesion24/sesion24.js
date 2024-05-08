/* 
// Radix Sort

function getDigit(num, i) {
  // el valor absoluto permite que funcione con numeros negativos
return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function getNumberLength(num) {
  if (num < 10) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function longestDigitCount(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, getNumberLength(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
  let L = longestDigitCount(nums);
  for(let i = 0; i < L; i++){
      let digitBoxes = Array.from({length: 10}, () => []);
      for(let j = 0; j < nums.length; j++){
          let digit = getDigit(nums[j],i);
          digitBoxes[digit].push(nums[j]);
      }
      nums = [].concat(...digitBoxes);
  }
  return nums;
}

// Comprobación 
const nums = [532, 123, 234, 643, 234, 1, 534, 654, 789, 432];
console.log("Array original:", nums);

const sortedNums = radixSort(nums);
console.log("Array ordenado:", sortedNums); 

*/

// Json Web Tokens
// ...

