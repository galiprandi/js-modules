/*
Array.shuffle()
Return a new randomly ordered array based on an old one.
(Based on [algorithm](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) invented by Ronald Fisher and Frank Yates)

Usage:
- Import, or just copy and paste script to your project.
- Use: [0,1,2,3,4,5,6,7,8,9].shuffle()
*/

Array.prototype.shuffle = function () {
  try {
    const arr = [...this]
    let m = arr.length,
      i
    while (m) {
      i = (Math.random() * m--) >>> 0
      ;[arr[m], arr[i]] = [arr[i], arr[m]]
    }
    return arr
  } catch (error) {
    console.error(error)
    return []
  }
}
