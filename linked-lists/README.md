# Linked Lists

## What Is a Linked List?

A linked list is a linear data structure where each node points to the next node.

## Why Linked Lists Matter

Linked lists are useful when insertion and deletion are common and random access is less important.

## Common Operations

- Insert at head or tail
- Delete a node
- Traverse the list
- Reverse the list

## Example

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

## Practice Exercises

- Reverse a linked list
- Detect a cycle
- Merge two lists
