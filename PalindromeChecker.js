function palindrome(string){
    let reverse = ''
    reverse = string.toLowerCase().match(/[a-z0-9]/g);
    reverse= reverse.reverse();
    console.log(reverse.join('') === string);
    return reverse.join('') === string;
}
palindrome('sTring-)')