function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle(length) {
  var triangle = "";

  var i = 1;
  
  for(i = 1; i <=length; i++) {
      triangle = triangle + makeLine(i);
  }
  return triangle;
}
console.log(buildTriangle(10));