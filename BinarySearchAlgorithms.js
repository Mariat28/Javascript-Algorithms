// Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].
// If x is present in arr[], then return the  index of x, otherwise return -1.
// Input: arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}, x = 11
// Output: 10
let numbers =[10, 20, 30, 50, 60, 80, 110, 130, 140, 170];
let x = 110;
numbers.forEach((number) =>{
    if(number === x){
        console.log(numbers.indexOf(number));
    }
});
