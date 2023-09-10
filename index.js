// Import necessary libraries
const readline = require('readline');

// Create an interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Define chatbot logic function
function chatbot(input) {
  // You can replace this logic with more advanced processing
  return `Chatbot: You said, "${input}"`;
}

// Function to start the chat
function startChat() {
  rl.question('You: ', (userInput) => {
    // Process user input using the chatbot logic
    const response = chatbot(userInput);

    // Display the chatbot's response
    console.log(response);

    // Continue the chat recursively
    startChat();
  });
}

// Start the chat
console.log('Chatbot: Hello! Type a message to start the chat.');
startChat();
