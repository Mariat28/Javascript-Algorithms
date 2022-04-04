let size=8;
let string ='';

// print line grid 
for(let y=0; y<=size; y++){
  // string formatting 
  for(let x=0; x<size; x++){
    if((x+y)%2 === 0){
      string+=' ';
    } else{
      string+='#';
    }
  }
  string+='\n'
}
console.log(string);