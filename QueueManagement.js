function queueManager(arr){
    let bribe=0;
    for(let i =0; i<=arr.length; i++ ){
        if( arr[i]- i > 0){
             let actualPosition = arr[i]-1;
             if(Math.abs(actualPosition-i) >= 3){
                 console.log('Too chaotic');
                 break;
             }else{
                 bribe= Math.abs(actualPosition-i) +bribe;
             }
         }
         
     }
     console.log(bribe)

}
const arr = [2,1,5,3,4]
const arr2 = [2,5,1,3,4]
const arr3 = [1,2, 5, 3, 7, 8, 6, 4]

// queueManager(arr);
// queueManager(arr2);
queueManager(arr3);

