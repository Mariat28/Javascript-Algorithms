// Write a function, function binaryGap(number);that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
function solution(number) {
  // write your code in JavaScript (Node.js 8.9.4)
    const binaryValue = number.toString(2);
let gapCounter =0;
let length = 0;
let prevLength;
let resultArray=[];
  for(let x=0; x<=binaryValue.length; x++){
    if(binaryValue[x] == '0'){
      length++;
      if(binaryValue[x+1] == '1'){
        prevLength = length
        console.log(length, prevLength);
        gapCounter+=1;
      // console.log(length);
        resultArray.push(length);
      }
    }
  }
  console.log(resultArray);
}

solution(1041);
