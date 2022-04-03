// Drawbacks:
// .It still loops over the array even if the array is sorted already
// .It is not efficient for large arrays
//. Slower comparative to the other sort algorithms for smaller tasks
const givenArray = [38, 27, 43, 3, 9, 82, 10];
function merge(arr, l, m, r)
{
    let n1 = m - l + 1;
    let n2 = r - m;
  
    // Create temp arrays
    let L = new Array(n1); 
    let R = new Array(n2);
  
    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
  
    // Merge the temp arrays back into arr[l..r]
  
    // Initial index of first subarray
    let i = 0;
  
    // Initial index of second subarray
    let j = 0;
  
    // Initial index of merged subarray
    let k = l;
  
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
merge(givenArray, 0, 3, 6);
