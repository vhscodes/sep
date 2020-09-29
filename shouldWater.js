const lifeStatus = Number(process.argv[2]);
const isAlive = true;
const drynessLevel = Number(process.argv[3]);


if (lifeStatus == 0 && isAlive && drynessLevel > 10) {
  console.log("WATER");
}	