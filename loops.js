let array = [];

function forLoop(array) {
  for (let i=0; i < 25; i++) {
    [...array, "I am a strange loop."]
  }
}