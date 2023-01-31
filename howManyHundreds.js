function howManyHundreds(num) {
  num = num / 100;
  if (num >= 1) {
    return Math.floor(num)
  } else {
    return 0
  }
}


console.log(howManyHundreds(1234));
console.log(howManyHundreds(55));
console.log(howManyHundreds(123456));
console.log(howManyHundreds(999999));
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);