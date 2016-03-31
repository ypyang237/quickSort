// var myArr = [];
// for(i = 0; i < 8; i++){
//       var num = Math.floor(Math.random() * 100) + 1;
//       myArr.push(num);
//     }
// console.log(myArr);


var myArr = [3,2,1,6,5,4 ];


function quickSort(arr) {
  var pivot = arr[0];
  var left = [];
  var right = [];


//basecase
  if(arr.length === 1) {
    console.log('STOP..arrayLength is one!');
    return arr;
  }

    for (var i in myArr) {
      if (myArr[i] < pivot) {
        left.push(myArr[i]);
      } else if (myArr[i] > pivot) {
        right.push(myArr[i]);
      }
    }


    console.log('PIVOT is: ', pivot);
    console.log('left is: ', left);
    console.log('right is: ',right);



    return quickSort(left).concat(pivot + quickSort(right));
     // arr = (left).concat(right);
     // return console.log('here', arr);

}

quickSort(myArr);

