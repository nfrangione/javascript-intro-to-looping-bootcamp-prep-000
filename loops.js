function forLoop(array) {
  for (let i=0; i < 25; i++) {
    i += 1;
    if (i == 1) {
      array = [...array, "I am 1 strange loop."];
    }
    else {
      array = [...array, "I am ${i} strange loops."];
    }
  }
  return array;
}
