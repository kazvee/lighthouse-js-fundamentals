const calculateRectangleArea = function (length, width) {
  let result = length * width
  if (length > 0 && width > 0) {
    return result
  }
}

const calculateTriangleArea = function (base, height) {
  let result = (base * height) / 2
  if (base > 0 && height > 0) {
    return result
  } else {
    return undefined
  }
}

const calculateCircleArea = function (radius) {
  let result = Math.PI * (radius * radius)
  if (radius > 0) {
    return result
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