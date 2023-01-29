test('nonLayeredTidyTreeLayout exists', () => {
  const { layout, Tree } = require('../dist/non-layered-tidy-tree-layout')
  expect(layout).toBeTruthy()
  expect(Tree).toBeTruthy()
})