const shuffle = require('./arrayShuffle')

describe('Test shuffle [0,1,2,3,4,5,6,7,8,9]', () => {
  it('[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]', () => {
    const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    const shuffle = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].shuffle()
    expect(shuffle).not.toEqual(array)
  })
})
