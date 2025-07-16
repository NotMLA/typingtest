const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Practice makes perfect.",
  "Typing speed test is a great way to learn.",
  "Code every day and get better.",
  "Learning to code is empowering."
];

let currentQuote = "";
let startTime = null;

function startTest() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[randomIndex];
  document.getElementById("quote").textContent = currentQuote;
  document.getElementById("input").value = "";
  document.getElementById("result").textContent = "";
  startTime = null;
}

document.getElementById("input").addEventListener("input", function () {
  if (!startTime) {
    startTime = new Date();
  }

  const typedText = this.value;

  if (typedText === currentQuote) {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
    const wordCount = typedText.trim().split(/\s+/).length;
    const wpm = Math.round((wordCount / timeTaken) * 60);

    document.getElementById("result").textContent = `✅ Your speed is ${wpm} WPM!`;
  }
});

startTest();
