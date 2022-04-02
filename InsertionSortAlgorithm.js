const givenArray = [1, 3,5, 5, 6, 7,8,4, 2];
givenArray.forEach((number, i)=>{
    let previousIndex = i-1;
    while(previousIndex >=0 && givenArray[previousIndex] > number){
        givenArray[previousIndex+1] = givenArray[previousIndex];
        previousIndex= previousIndex-1;
    }
    givenArray[previousIndex+1] = number;
})

console.log(givenArray);
