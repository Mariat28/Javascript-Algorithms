// Given a sorted array arr[] of n elements, write a function to search a given element x in arr[].
// If x is present in arr[], then return the  index of x, otherwise return -1.
// Input: arr[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11}, x = 11
// Output: 10
// obvious way to do it is to use a for loop and check if the current element is equal to the given element
let numbers =[10, 20, 30, 50, 60, 80, 110, 130, 140, 170];
let x = 110;
numbers.forEach((number) =>{
    if(number === x){
        console.log(numbers.indexOf(number));
    }
});

//but the more efficient and optimal way is to use the binary search algorithm
let middleElement =numbers[numbers.length/2];
if(x>middleElement) {
    const newArray =numbers.slice(numbers.length/2);
    newArray.forEach((element) =>{
        if(element ===x) {
            console.log(numbers.indexOf(element));
        }
    })
}

