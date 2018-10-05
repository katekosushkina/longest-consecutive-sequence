module.exports = function longestConsecutiveLength(array) {
  let num = 1;
  let bigNum = 1;
  if (array.length == 0){
    bigNum = 0; ;
  } else {
    array.sort(function(a, b) {
      return a - b;
    });
    array.forEach(function(el, i){
      if (array[i]==array[i+1]-1){
        num ++;
      } 
      else {
        if (bigNum <= num){
        bigNum = num;
        }
        num = 1;
      };
    });
  }
  return bigNum;
}
