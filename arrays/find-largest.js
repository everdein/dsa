const numbers = [1, 2, 3, 4, 5];

function findLargest(values) {
    let largest = values[0];

    for(let i = 0; i < values.length; i++) {
        // console.log(values[i]);
        if(largest < values[i])
            largest = values[i];
    }

    return largest;
}

console.log(findLargest(numbers));

// Time complexity: O(n)
// Space complexity: O(1)