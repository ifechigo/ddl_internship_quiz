//Apple and Orange

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleDistance = 0
    let numOfApples = 0
    let orangeDistance = 0
    let numOfOranges = 0
      for(let i = 0; i < apples.length; i++){
        appleDistance = a + apples[i];
        if (appleDistance >= s && appleDistance <= t){
           numOfApples++  
        }
      }
      for(let i = 0; i < oranges.length; i++){
        orangeDistance = b + oranges[i];
        if (orangeDistance >= s && orangeDistance <= t){
          numOfOranges++
      }
    } 

    console.log(`${numOfApples}\n${numOfOranges}`)
    
}
