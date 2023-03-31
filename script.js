const playButton = document.getElementById("play-button");

playButton.addEventListener("click", function () {
  const num = document.getElementById("number").value;
  const results = document.getElementById("results");
  results.innerHTML = "";

  let output = "";

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output = "FizzBuzz";
    } else if (i % 3 === 0) {
      output = "Fizz";
    } else if (i % 5 === 0) {
      output = "Buzz";
    } else {
      output = i;
    }
  }

  results.innerHTML = output;
});
