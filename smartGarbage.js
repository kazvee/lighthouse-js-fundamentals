const bins = {
  waste: 4,
  recycling: 2,
  compost: 5
}
const trash = 'recycling'

const smartGarbage = function (trash, bins) {

  if (trash === "waste") {
    bins.waste++
  }
  else if (trash === "recycling") {
    bins.recycling++
  }
  else if (trash === "compost") {
    bins.compost++ 
  }
  return bins
}

console.log(smartGarbage(trash, bins))
// Should return:
// smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
