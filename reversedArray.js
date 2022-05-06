function reverseArray(arr){
  const firstElement = arr[0];
  for(let i =0; i<arr.length; i++){
    const lastElement = arr.pop();
    arr.unshift(lastElement);
    console.log(arr, firstElement);
    if(arr[arr.length-1 === firstElement]) break;
  }
}
const arr = [1,2,3,4];
reverseArray(arr);