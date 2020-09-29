const argumentValue = process.argv[2];
const currentStatus = Number(argumentValue);

if (currentStatus === 0) {
  console.log("alive");
  } else if (currentStatus === 1) {
  console.log("flowering");
  } else if (currentStatus === 2) {
  console.log("shedding");
  } else {
  console.log("other");
}