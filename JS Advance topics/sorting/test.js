let no = 10;
let arr = [10, 1, 2, 4, 5,11];
let i =0;
let j = 5;
while (i<j) {
    while(no >= arr[i]) {
        console.log(i, j,'i');
        i++;
    }

    while(no <= arr[j]) {
        console.log(i, j,'j');
        j--;
    }
}