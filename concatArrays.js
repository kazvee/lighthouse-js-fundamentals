function concat(array1, array2) {
  let result = []

  for (let i = 0; i < array1.length; i = i + 1) {
    const firstPart = array1[i]
    result.push(firstPart)

  }
  for (let j = 0; j < array2.length; j = j + 1) {

    const secondPart = array2[j]
    result.push(secondPart)

  }
  return result
}

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);



