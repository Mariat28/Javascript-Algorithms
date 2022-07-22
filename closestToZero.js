// implement the function computeClosestToZero(arr) which takes an array of numbers and returns the number that's closest to zero
// if two numbers are equally close to zero, the positive number must be returned and if the array is empty, return 0
const testArray = [7, -10, 13, 8, 4, -7, -12, -3, 3, -9, 6, -1, -6, 7];

function computeClosestToZero(arr) {
  let closestNum = arr[0];
  if(arr.length === 0) {
    closestNum = 0;
  } else{
    for(let x = 0; x < arr.length; x++) {
      if (arr[x] > 0 && arr[x] <= Math.abs(closestNum)) {
        closestNum = arr[x];
      } else if(arr[x] < 0 && - arr[x] < Math.abs(closestNum)) {
        closestNum = arr[x];
      }
    };
  }
  console.log(closestNum);
  return closestNum;

}
computeClosestToZero(testArray);