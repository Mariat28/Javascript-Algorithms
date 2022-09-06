function tribonnacci(signature, arrayLength) {
    const resultArray = [...signature]
    for(let i = 0; i< resultArray.length; i++){
        if(i<arrayLength-1 && i>1){
            resultArray.push((resultArray[i]+ resultArray[i-1]+ resultArray[i-2]));
        }
    }
    console.log(resultArray)


}
tribonnacci([0,0,1], 9);

