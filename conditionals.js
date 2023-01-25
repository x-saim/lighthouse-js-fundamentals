const temperature = 22;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
/*
What does temperature have to be for the program to tell us to pick a scarf?
Answer: Any temperature below 0. E.g T = -1.
What about for it to tell us that short sleeves are OK?
Answer: Temperature above 15. E.g T = 16.
*/
