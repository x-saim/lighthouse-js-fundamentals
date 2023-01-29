function isOdd(num) {
  if (num % 2 === 0) {
    return false
  } else {
    return true
  }
}

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));
console.log(isOdd(10));
console.log(isOdd(11));
console.log(isOdd(12));
console.log(isOdd(13));