# Backtracking

## What Is Backtracking?

Backtracking explores possible choices and retreats when a path fails.

## Why It Matters

It is used for constraint satisfaction, permutations, combinations, and puzzle solving.

## Example

```javascript
function backtrack(state) {
  if (isSolution(state)) return;
  for (const choice of choices(state)) {
    makeChoice(choice);
    backtrack(state);
    undoChoice(choice);
  }
}
```

## Practice Exercises

- Generate permutations
- Solve Sudoku-style puzzles
- N-Queens
