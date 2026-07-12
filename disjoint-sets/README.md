# Disjoint Sets

## What Are Disjoint Sets?

Disjoint sets, also known as union-find, track connected components and support efficient union and find operations.

## Why They Matter

They are commonly used for cycle detection and grouping connected items.

## Example

```javascript
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }
}
```

## Practice Exercises

- Union two sets
- Detect whether two nodes are connected
- Count connected components
