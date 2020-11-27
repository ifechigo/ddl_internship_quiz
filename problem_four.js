//Diagonal Difference

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    
    for (let row = 0; row < arr.length; row++) {
        primaryDiagonal += arr[row][row];
        secondaryDiagonal += arr[row][arr.length - row - 1];
    }
        
    return Math.abs(primaryDiagonal - secondaryDiagonal)

}
