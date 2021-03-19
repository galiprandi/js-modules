/*
String.toCapitalize()
Convert to uppercase first letter of every word.

Usage:
- Import, or just copy and paste script to your project.
- Use: "havE a nIce dAy".toCapitalize()
*/

String.prototype.toCapitalize = function () {
  try {
    return this.toLocaleLowerCase()
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substring(1))
      .join(' ')
  } catch (error) {
    console.error(error)
  }
}
