function TuringTest(string){
    let morseArray = [];
    const stringArray = [...string];
    for(let i = 0; i<stringArray.length; i++){
        if(i !== stringArray.length - 1) {
            stringArray.splice(i,2,'-');
            console.log('string array', stringArray)
            // const subString = stringArray.slice(i, i+2);
            morseArray.push(stringArray);
        }
    }
    // for(let s of stringArray) {
    //     const charIndex = string.indexOf(s);
    //     if(charIndex !== stringArray.length -1) {
    //         stringArray[[charIndex]] = '-';
    //         stringArray[[charIndex+1]] = '-';
    //         const morseChunk = stringArray.slice(charIndex, charIndex+2);
    //         console.log(morseChunk, '.'.repeat((string.slice(charIndex+1).length-1)))
    //         morseArray.push(morseChunk + '.'.repeat((string.slice(charIndex+1).length)));
    //     }
    // }
    console.log(morseArray)

}
const testParam = "....";
TuringTest(testParam);