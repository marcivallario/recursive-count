function recursiveCount(num = 0) {
  console.log(num)
  while (num < 10) {
    num++
    recursiveCount(num)
  }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
