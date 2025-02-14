// Elements
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-btn");
const chatArea = document.getElementById("chat-area");
const typingIndicator = document.getElementById("typing-indicator");

// Event listener for sending message
sendBtn.addEventListener("click", sendMessage);

// Event listener for detecting typing
messageInput.addEventListener("input", handleTyping);

// Function to send a message
function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    addMessageToChat(message, "user-message");
    messageInput.value = "";
    scrollToBottom();
    simulateBotResponse();
  }
}

// Function to add a message bubble to the chat area
function addMessageToChat(message, type) {
  const messageBubble = document.createElement("div");
  messageBubble.classList.add("message-bubble", type);
  messageBubble.innerHTML = `<p>${message}</p>`;
  chatArea.appendChild(messageBubble);
}

// Scroll to the bottom of the chat area
function scrollToBottom() {
  chatArea.scrollTop = chatArea.scrollHeight;
}

// Simulate bot response
function simulateBotResponse() {
  setTimeout(() => {
    addMessageToChat("This is a simulated bot response.", "bot-message");
    scrollToBottom();
  }, 1000);
}

// Function to handle typing indicator
function handleTyping() {
  if (messageInput.value.trim() !== "") {
    typingIndicator.style.display = "block";
  } else {
    typingIndicator.style.display = "none";
  }

  // Auto-expand the input field
  messageInput.style.height = "auto";
  messageInput.style.height = messageInput.scrollHeight + "px";
}

// Dark mode toggle (optional)
document.body.classList.toggle("dark-mode"); // Uncomment to enable dark mode by default
