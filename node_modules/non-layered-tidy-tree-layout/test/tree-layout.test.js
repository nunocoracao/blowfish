import { layout, Tree } from '../src/algorithm'
import TreeNode from './tree-node'
import Marshall from './marshall'

test('layout tree with one node', () => {
  const tree = new Tree(10, 5, 0, [])
  layout(tree)

  expect(tree).toEqual(expect.objectContaining({ x: 0, y: 0 }))
})

test('layout tree with 2 nodes', () => {
  const child = new TreeNode(20, 10)
  const root = new TreeNode(10, 4)
  root.addChild(child)
  const tree = Marshall.convert(root)
  layout(tree)
  Marshall.convertBack(tree, root)
  expect(root).toEqual(expect.objectContaining({ x: 5, y: 0 }))
  expect(child).toEqual(expect.objectContaining({ x: 0, y: 4 }))
})

test('layout tree with 3 nodes', () => {
  const c1 = new TreeNode(10, 30)
  const c2 = new TreeNode(20, 10)
  const root = new TreeNode(40, 10)
  root.addChild(c1)
  root.addChild(c2)
  const tree = Marshall.convert(root)
  layout(tree)

  Marshall.convertBack(tree, root)
  expect(root).toEqual(expect.objectContaining({ x: -5, y: 0 }))
  expect(c1).toEqual(expect.objectContaining({ x: 0, y: 10 }))
  expect(c2).toEqual(expect.objectContaining({ x: 10, y: 10 }))
})

test('reflection of the tree is the mirror image of the original tree', () => {
  const n1 = new TreeNode(10, 10)
  const n2 = new TreeNode(10, 10)
  const n3 = new TreeNode(10, 10)
  const n4 = new TreeNode(10, 10)
  const n5 = new TreeNode(10, 10)
  const n6 = new TreeNode(10, 20)
  const n7 = new TreeNode(150, 10)
  n1.addChild(n2)
  n1.addChild(n3)
  n1.addChild(n4)
  n1.addChild(n5)
  n1.addChild(n6)
  n2.addChild(n7)
  const tree = Marshall.convert(n1)
  layout(tree)

  Marshall.convertBack(tree, n1)
  expect(n1).toEqual(expect.objectContaining({ x: 110, y: 0 }))
  expect(n2).toEqual(expect.objectContaining({ x: 70, y: 10 }))
  expect(n3).toEqual(expect.objectContaining({ x: 90, y: 10 }))
  expect(n4).toEqual(expect.objectContaining({ x: 110, y: 10 }))
  expect(n5).toEqual(expect.objectContaining({ x: 130, y: 10 }))
  expect(n6).toEqual(expect.objectContaining({ x: 150, y: 10 }))
  expect(n7).toEqual(expect.objectContaining({ x: 0, y: 20 }))
})