// Usage: parseDates(String)
// In: '10/01/2017'
// Out: 'martes, 10 de enero de 2017'

module.exports = function toLongDate(string) {
  try {
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
    var [day, month, year] = string.split('/')
    var date = new Date([year, month, day].join('-') + 'T01:01:01')
    if (isNaN(date.getUTCDate())) return string
    else return date.toLocaleDateString('es-AR', options)
  } catch (error) {
    return string
  }
}
