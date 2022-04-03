// Insertion sort is used when number of elements is small. It can also be useful when input array is almost sorted, only few elements are misplaced in complete big array
const givenArray = ["Ani", "Sam", "Mariat", "Joe"];
givenArray.forEach((number, i)=>{
    let previousIndex = i-1;
    while(previousIndex >=0 && givenArray[previousIndex] > number){
        givenArray[previousIndex+1] = givenArray[previousIndex];
        previousIndex= previousIndex-1;
    }
    givenArray[previousIndex+1] = number;
});

