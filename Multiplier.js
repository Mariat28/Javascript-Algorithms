// for a given element in an array, replace it with the product of every other number in the array.
const givenArray=[2, 3, 5,7,8,10];
// const output = [8400, 5600, 3360, 2400, 2100, 1680];
console.time()
function productArray(array) {
  let pdtArray =[];
  for(let i=0; i<array.length; i++) {
    let result = 1;
    let remainingArray = array.filter((element) => element !== array[i]);
    for(let j=0; j<remainingArray.length; j++) {
      result= result*remainingArray[j];
    }
    pdtArray.push(result);
  }
  console.log('product array', pdtArray);
  return pdtArray;
} 
productArray(givenArray);
console.timeEnd()
