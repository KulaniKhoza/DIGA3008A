console.log("This is my Console Message");

let randmoNum1 = Math.floor(Math.random() * 51);
let randmoNum2 = Math.floor(Math.random() * 51);

if (randmoNum1 === 50 || randmoNum2 === 50 || randmoNum1 + randmoNum2 === 50) {
  return true;
} else {
  return false;
}
