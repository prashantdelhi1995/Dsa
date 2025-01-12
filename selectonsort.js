function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        // Find the minimum element in the unsorted portion
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first element of the unsorted portion
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

const arr = [2, 30, 9, 3, 12];
selectionSort(arr);
console.log(arr); // Output: [2, 3, 9, 12, 30]
