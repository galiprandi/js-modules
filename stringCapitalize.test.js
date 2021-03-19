const toCapitalize = require('./stringCapitalize')

describe('toCapitalize', () => {
  it('havE a nIce dAy', () => {
    expect('havE a nIce dAy'.toCapitalize()).toBe('Have A Nice Day')
  })
})
