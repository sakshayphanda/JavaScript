/**
 * LINEAR SEARCH
 * 
 * Search every element of an array
 * 
 * Complexity 
 * worst case: O(n)
 * best case: O(1)
 */

arr = [2, 4, 5, 1, -2, 8, 3];

function find(toBeSearched) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === toBeSearched) {
            return i;
        }
    }
}

console.log(find(-2));


