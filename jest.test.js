test('common matcher', () => {
  expect(2 + 2).toBe(4)
})

test('true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('object', () => {
  expect({ name: 'test' }).toEqual({ name: 'test' })
})