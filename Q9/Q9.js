let arr1 = [1, 2, 3]
let arr2 = [100, 2, 1, 10]

let temp_arr = arr1.concat(arr2);
let unique = [...new Set(temp_arr)];
console.log(unique)