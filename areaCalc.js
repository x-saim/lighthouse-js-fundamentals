/* need to define the following functions that represent the area of the following:

rectangles
triangles
circles
*/

let length;
let width;
let base;
let height;
let radius;
let areaCricle;
let areaRectangle;
let areaTriangle;

function calculateRectangleArea(length, width) {
  if ((areaRectangle = Number(length * width)) > 0) {
    return areaRectangle = Number(length * width)
  } else {
    return undefined
  }
}

function calculateTriangleArea(base, height) {
  if ((areaTriangle = Number((base * height) / 2)) > 0) {
    return areaTriangle = Number((base * height) / 2);
  } else {
    return undefined;
  }
}

function calculateCircleArea(radius) {
  if (radius > 0) {
    return areaCricle = Math.PI * Math.pow(radius, 2);
  } else {
    return undefined
  }

}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined