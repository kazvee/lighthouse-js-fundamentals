let laff = "";


let laugh = function (arg) {

  for (let i = 0; i < arg; i++) {
    laff = laff + "ha"
  }
  laff = laff + "!"

  return laff;
}

console.log(laugh(3));