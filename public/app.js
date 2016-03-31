var myArr = [];
for(i = 0; i < 15; i++){
      var num = Math.floor(Math.random() * 100) + 1;
      myArr.push(num);
    }




function quickSort(arr) {
  var pivot = arr[0];
  var left = [];
  var right = [];


//basecase
  if(arr.length === 1) {
    return arr;
  }

  var piv = arr.splice(0, 1);
  console.log('piv', piv);
    for (var i in arr) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else if (arr[i] > pivot) {
        right.push(arr[i]);
      }
    }

    if(left.length > 1 || right.length > 1) {

      left = quickSort(left);
      right = quickSort(right);
    }


    console.log('result', (left.concat(piv,right)));


    arr = (left.concat(piv,right));
    return arr;

}

quickSort(myArr);

module.exports = quickSort;

