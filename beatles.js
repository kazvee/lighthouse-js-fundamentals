const beatles = ["john", "paul", "george", "ringo"];

for (let i = 0; i < beatles.length; i += 2) { 
  // increments by 2 on every iteration, starting at 0
  console.log(beatles[i]);
}
// Output: john, george
// john is at index 0, george is at index 2