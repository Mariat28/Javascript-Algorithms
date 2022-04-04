for(let number=1; number<=100; number++){
  let text ="";
  if(number%3 ===0) text='Fizz';
  if(number%5 ===0) text='Buzz';
  console.log(text || number);
}