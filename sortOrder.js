let arg1 = String(process.argv[2].toLowerCase());
let arg2 = String(process.argv[3].toLowerCase());

function sortOrder(){
if(arg1 < arg2) {
  console.log(-1); 
} 
else if (arg1 > arg2) {
  console.log(1);
    //alert(1);
} 

else if (arg1 = arg2) {
  console.log(0);
    //alert(0);
}


}
sortOrder();