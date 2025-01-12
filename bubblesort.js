function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) { // Outer loop for each pass
        for (let j = 0; j < n - i - 1; j++) { // Inner loop for comparing adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if elements are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Example usage
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted Array:", array);
const sortedArray = bubbleSort(array);
console.log("Sorted Array:", sortedArray);
