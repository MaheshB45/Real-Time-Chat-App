let username = "";
const btn = document.getElementById("join-chat");
const usernameInput = document.getElementById("username-input");
const usernameForm = document.querySelector(".form-username");
const chatroomContainer = document.querySelector(".chatroom-container");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-button");
const messagesContainer = document.querySelector(".messages");

// button event
btn.addEventListener("click", (event) =>{
    event.preventDefault();
    username = usernameInput.value;
    // this will make sure username is not empty
    if(username){
        usernameForm.style.display = "none";
        chatroomContainer.style.display = "block";
    }
});