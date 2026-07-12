# Dynamic Programming

## What Is Dynamic Programming?

Dynamic programming solves problems by breaking them into overlapping subproblems and storing results for reuse.

## Why It Matters

It is essential for optimization problems such as knapsack, longest common subsequence, and path counting.

## Example

```javascript
function fib(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
```

## Practice Exercises

- Fibonacci with memoization
- Climbing stairs
- Coin change
