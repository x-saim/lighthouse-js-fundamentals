
let x = 100;

while (x >= 100 && x <= 200) {
  if (x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (x % 3 === 0) {
    console.log("Loopy");
  } else if (x % 4 === 0) {
    console.log("Lighthouse")
  } else {
    console.log(x);
  }
  x = x + 1;
}
