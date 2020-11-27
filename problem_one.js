//Simple Array Sum

/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    const arrayLength = ar.length;
  
    let arraySum = 0;

    for(let i = 0; i < arrayLength; i++){
        arraySum += ar[i];
    }
    return arraySum

}
