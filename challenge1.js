function leftmostNodesSum(array) {
  let total= 0;
  let x=0;
  while (x < array.length)
  {
    total=array[x]+total;
      x = (x+x) +1;
  }
  return total
}

console.log(leftmostNodesSum([2, 7, 5, 2, 6, 0, 9]))
// => 11

module.exports = leftmostNodesSum