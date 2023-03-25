const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  let bestMetric = [];
  for (let vegetable of vegetables) {
    bestMetric.push(vegetable[metric])
  }
  let highestScorer = Math.max(...bestMetric)

  for (let i = 0; i < vegetables.length; i++) {
    if (highestScorer === vegetables[i][metric]) {
      return vegetables[i].submitter
    }
  }
};
console.log(judgeVegetable(vegetables, metric))