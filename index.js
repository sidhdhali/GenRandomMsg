const greetings = [
  "Hello",
  "Hiii",
  "Good Morning",
  "Good Day!",
  "Good Afternoon!",
];
const questions = [
  "How are you doing?",
  "What's up?",
  "How was your day?",
  "What's the Time right now?",
];
const suggestions = [
  "Today Weather is too good!",
  "Get a Coffee for us!",
  "Have you drink enough Water?",
  "Let's Go Out and Have Fun",
];

function generateRandomMessage() {
  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];
  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  const randomSuggestion =
    suggestions[Math.floor(Math.random() * suggestions.length)];

  return `${randomGreeting} ${randomQuestion} ${randomSuggestion}`;
}

function handleButtonClick() {
  const messageParagraph = document.querySelector("#random-message");
  const randomMessage = generateRandomMessage();
  messageParagraph.textContent = "Random Message: " + randomMessage;
}

const button = document.querySelector("#btn-id");
button.addEventListener("click", handleButtonClick);
