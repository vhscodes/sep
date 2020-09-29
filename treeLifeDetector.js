const argumentValue = process.argv[2];
const treeStatus = Number(argumentValue);

if (treeStatus === 0) {
  console.log("alive");
 } else {
  console.log("other");
}