function turingPrac(ops) {
    let result = null;
    let resultArray = [];
    for(let i = 0; i<ops.length; i++){
        if(ops[i].match('^-?[0-9]\d*(\.\d+)?$')) {
            resultArray.push(Number(ops[i]))
        } else if(ops[i] === 'C') {
            resultArray.splice(resultArray.length - 1, 1);
        } else if(ops[i] === 'D') {
            resultArray.push((resultArray[resultArray.length - 1])*2);
        } else if(ops[i] === '+' && resultArray.length >=2) {
            resultArray.push((resultArray[resultArray.length - 1] + resultArray[resultArray.length - 2]));
        }
    }
    result = resultArray.reduce((a,b) => parseInt(a, 10)+parseInt(b, 10), 0);
    console.log(result)
    // return result;
    
}
const array1 = ["5", "2", "C", "D", "+"];
const array2 = ["5", "-2", "4", "C", "D", "9", "+", "+"];

turingPrac(array2)