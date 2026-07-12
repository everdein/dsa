# Arrays

## What Is an Array?

An array is an ordered collection of values stored in contiguous memory. Each value can be accessed by its index.

## Why Arrays Matter

Arrays are one of the most fundamental data structures in DSA. They are used for sequential data, iteration, searching, sorting, and as the basis for many other structures.

## Common Operations

| Operation | Time Complexity |
|---|---:|
| Access by index | O(1) |
| Update by index | O(1) |
| Search | O(n) |
| Append | O(1) amortized |
| Insert/remove at beginning | O(n) |

## When to Use Arrays

Use arrays when order matters and you need fast index-based access.

## When Not to Use Arrays

Avoid arrays when you need frequent insertions or deletions at the beginning or middle.

## Example

```javascript
const numbers = [10, 20, 30];
console.log(numbers[0]);
numbers.push(40);
```

## Practice Exercises

- Find the largest value
- Reverse an array
- Remove duplicates
- Find two numbers that sum to a target
