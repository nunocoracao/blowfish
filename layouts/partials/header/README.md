# Header

- `header-option-simple.html` renders menus without nested items
- `header-option-nested.html` renders menus with nested items
- `header-option.html` decides which template to render given the menu

- `js/header.js` exposes a method to toggle visibility of nested menus

- Nesting is configured using the `parent` and `identifier` properties in `menus.en.yml`. Example

```yml
main:
 - name: Product
    identifier: product
    weight: 1
  - name: Analytics
    pageRef: analytics
    weight: 1
    parent: product
  - name: Engagement
    pageRef: engagement
    weight: 2
    parent: product

secondary:
 - name: Engineering
    identifier: engineering
    weight: 1
  - name: Computers
    pageRef: computers
    weight: 1
    parent: engineering
  - name: Rockets
    pageRef: rockets
    weight: 2
    parent: engineering
```
