import { BoundingBox, Layout } from '../src/helpers'

test('bounding box', () => {
  const bb = new BoundingBox(10, 20)
  expect(bb.addBoundingBox(100, 200)).toEqual(
    expect.objectContaining({
      width: 110,
      height: 220
    })
  )
  expect(bb.removeBoundingBox(10, 120)).toEqual(
    expect.objectContaining({
      x: 15,
      y: 120
    })
  )
})

test('Layout class', () => {
  const data = {
    width: 10,
    height: 10,
    children: [
      {
        width: 10,
        height: 10,
        children: [{ width: 150, height: 10, children: [] }]
      },
      { width: 10, height: 10, children: [] },
      { width: 10, height: 10, children: [] },
      { width: 10, height: 10, children: [] },
      { width: 10, height: 20, children: [] }
    ]
  }
  const bb = new BoundingBox(10, 10)
  const layout = new Layout(bb)
  const { boundingBox } = layout.layout(data)

  expect(data).toEqual(expect.objectContaining({ x: 120, y: 0 }))
  expect(data.children[0]).toEqual(expect.objectContaining({ x: 75, y: 20 }))
  expect(data.children[1]).toEqual(expect.objectContaining({ x: 97.5, y: 20 }))
  expect(data.children[2]).toEqual(expect.objectContaining({ x: 120, y: 20 }))
  expect(data.children[3]).toEqual(expect.objectContaining({ x: 142.5, y: 20 }))
  expect(data.children[4]).toEqual(expect.objectContaining({ x: 165, y: 20 }))
  expect(data.children[0].children[0]).toEqual(
    expect.objectContaining({ x: 5, y: 40 })
  )

  expect(boundingBox).toEqual(
    expect.objectContaining({ left: 5, right: 175, top: 0, bottom: 50 })
  )
})

test('Big root, small child', () => {
  const t = {
    id: 0,
    width: 100,
    height: 50,
    children: [{ id: 1, width: 50, height: 50 }]
  }
  const l = new Layout(new BoundingBox(0, 0))
  const { result, boundingBox } = l.layout(t)
  expect(result).toEqual(expect.objectContaining({ x: -25, y: 0 }))
  expect(result.children[0]).toEqual(expect.objectContaining({ x: 0, y: 50 }))
  expect(boundingBox).toEqual(
    expect.objectContaining({ left: -25, right: 75, top: 0, bottom: 100 })
  )
})

describe('Layout.getSize', () => {
  test('big root, small child', () => {
    const t = {
      id: 0,
      width: 100,
      height: 50,
      children: [{ id: 1, width: 50, height: 50 }]
    }
    const l = new Layout(new BoundingBox(0, 0))
    l.layout(t)
    const bb = l.getSize(t)
    expect(bb).toEqual(
      expect.objectContaining({ left: -25, right: 75, top: 0, bottom: 100 })
    )
  })

  test('small root, big child', () => {
    const t = {
      id: 0,
      width: 50,
      height: 50,
      children: [{ id: 1, width: 100, height: 50 }]
    }
    const l = new Layout(new BoundingBox(20, 20))
    l.layout(t)
    const bb = l.getSize(t)
    expect(bb).toEqual(
      expect.objectContaining({ left: 10, right: 110, top: 0, bottom: 120 })
    )
  })
})
