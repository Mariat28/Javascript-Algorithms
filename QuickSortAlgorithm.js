function quickSort(array){
    if(array.length <= 1){
        return array;
    }
    else{
        const pivotValue= array.pop();
        const leftArr =[];
        const rightArr =[];
        let resultArray=[];
        for(let i=0; i<array.length; i++){
            if(array[i] < pivotValue){
                leftArr.push(array[i]);
            } else{
                rightArr.push(array[i]);
            }
        }
        return resultArray.concat(quickSort(leftArr), pivotValue, quickSort(rightArr));
    }
}
const items = [10, 80, 30, 90, 40, 50, 70];
// console.log(items.sort((a, b) => a - b));
console.log(quickSort(items));



