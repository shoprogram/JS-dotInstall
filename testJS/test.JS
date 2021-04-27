function LetterCountI(str) { 

  let word_arr = str.split(" ");
    let x = word_arr.slice();
    // console.log(word_arr, x);
    for(let i = 0; i < x.length; i ++){
      let sum = 0;
      // console.log(x[i].length, word_arr[i].length)
      for(let y = 0; y < x[i].length; y++){
        // console.log( x[i].split("").filter(function(a){return a == x[i][y]}).length)
        let amount = x[i].split("").filter(function(a){return console.log(a == x[i][y])}).length;
        console.log(amount)
        if (amount > 1){
          sum += amount
        }
        
      }
      x[i] = sum;
    }
     let max = Math.max.apply(Math,x);
    if(max == 0)
      return -1;
    let index = x.indexOf(max);
    return(word_arr[index]);
  };

  console.log(LetterCountI("Hello apple pie"));
  console.log(LetterCountI("No words"));