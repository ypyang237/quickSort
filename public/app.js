// var myArr = [];
// for(i = 0; i < 8; i++){
//       var num = Math.floor(Math.random() * 100) + 1;
//       myArr.push(num);
//     }
// console.log(myArr);


var myArr = [3,2,1,6,5,4 ];

var left = [];
var right = [];

function quickSort(arr) {
  var pivot = arr[0];

//basecase
  if(left.length === 1) {
    console.log('small!');
    return 'finished';
  }

    for (var i in myArr) {
      if (myArr[i] < pivot) {
        left.push(myArr[i]);
      } else {
        right.push(myArr[i]);
      }
    }



    console.log('pivot is: ', pivot);
    console.log(left);
    console.log('left.length is: ', left.length);
    console.log(right);

    quickSort(left);

}



quickSort(myArr);