export default class TreeNode {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.x = 0
    this.y = 0
    this.children = []
  }

  addChild(child) {
    child.y = this.y + this.height
    this.children.push(child)
  }

  randExpand(tree) {
    tree.y += this.height
    const i = Math.floor(Math.random() * (this.children.length + 1))
    if (i === this.children.length) {
      this.children.push(tree)
    } else {
      this.children[i].randExpand(tree)
    }
  }
}