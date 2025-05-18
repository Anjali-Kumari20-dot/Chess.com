const socket = io();

socket.emit("churan");

socket.on("churan");
socket.on("Churan Papdi", () => {
    console.log("Churan Papdi recieved");
});