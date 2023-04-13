function generatePass() {
  const input = document.querySelector("input");
  input.value = generator();
}

function generator() {
  //gonna do this for 12 digit password
  // A-Z = 65-90
  // a-z = 97-122
  // 0-9 = 48-57
  const options = ["A-Z", "a-z", "0-9"];
  const limits = ["65-90", "97-122", "48-57"];
  let generatedString = "";
  for (let index = 0; index <= 12; index++) {
    let randomLimit = limits[Math.floor(Math.random() * options.length)];
    let max_min = randomLimit.split("-");
    let generatedNumber = getRandomArbitrary(
      Number(max_min[0]),
      Number(max_min[1])
    );
    generatedString = generatedString + String.fromCharCode(generatedNumber);
    console.log(generatedString, generatedNumber);
  }
  return generatedString;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
