const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing speed test is a great way to learn.",
  "Practice makes perfect.",
  "Never stop learning to code.",
  "Coding is fun and powerful."
];

let currentQuote = "";
let startTime = null;

function startCountdown() {
  const countdownEl = document.getElementById("countdown");
  const quoteEl = document.getElementById("quote");
  const inputEl = document.getElementById("input");
  const resultEl = document.getElementById("result");

  // Reset everything
  quoteEl.textContent = "";
  resultEl.textContent = "";
  inputEl.value = "";
  inputEl.disabled = true;
  countdownEl.textContent = "Get ready...";

  let counter = 3;

  const countdownInterval = setInterval(() => {
    countdownEl.textContent = counter;
    counter--;

    if (counter < 0) {
      clearInterval(countdownInterval);
      countdownEl.textContent = "";
      startTest(); // Start typing test
    }
  }, 1000);
}

function startTest() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[randomIndex];

  document.getElementById("quote").textContent = currentQuote;
  document.getElementById("input").disabled = false;
  document.getElementById("input").value = "";
  document.getElementById("input").focus();
  startTime = null;
}

// Typing event
document.getElementById("input").addEventListener("input", function () {
  if (!startTime) {
    startTime = new Date();
  }

  const typedText = this.value;

  if (typedText === currentQuote) {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // in seconds
    const wordCount = typedText.trim().split(/\s+/).length;
    const wpm = Math.round((wordCount / timeTaken) * 60);

    document.getElementById("result").textContent =
      `✅ Your speed is ${wpm} WPM!`;
  }
});

// Optional: start countdown on first page load
window.onload = startCountdown;
