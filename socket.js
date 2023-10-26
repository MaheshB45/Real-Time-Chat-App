
// 1st code to get executed -> server
io.on("connection", (socket) => {
    console.log(socket.id);
    // this will remain inative
    // socket.on('secret message',(data)=>{
    //     io.emit('secret message',data);
    // })
});

// 2nd code to get executed -> frontend
socket.emit("secret message", data);

// 3rd code snippet to get exectued -> server
socket.on('secret message',(data)=>{
    // 4th one
    io.emit('secret message',data);
})

// 5th snippet -> frontend
socket.on("secret message", (data) => {
    if (data.id !== socket.id) {
      appendMessage(data, "recieved");
    }
  });