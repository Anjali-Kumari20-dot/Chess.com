const socket = io();

socket.emit("churan");

// socket.on("churan");
socket.on("churan papdi", () => {
    console.log("Churan Papdi recieved");
});