function addFirstToLast(myArr) {
let firstAndLast = '';

if (myArr.length > 0) {
    firstAndLast = myArr[0] + myArr[myArr.length -1];
  }
 

return firstAndLast;
}