import { Tree, layout } from '../src/algorithm'

export default {
  convert(treeNode) {
    if (treeNode === null) return null

    let children = []
    for (let i = 0; i < treeNode.children.length; i++) {
      children[i] = this.convert(treeNode.children[i])
    }

    return new Tree(treeNode.width, treeNode.height, treeNode.y, children)
  },

  convertBack(converted, root) {
    root.x = converted.x
    for (let i = 0; i < converted.c.length; i++) {
      this.convertBack(converted.c[i], root.children[i])
    }
  },

  runOnConverted(root) {
    layout(root)
  }
}
