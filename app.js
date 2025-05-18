const express = require("express");
const socket = require("socket.io"); 
const http = require("http");
const { Chess } = require("chess.js");
const path = require("path");

const app = express();
 
const server = http.createServer(app);
const io = socket(server);

const chess = new Chess();
let players = {};
let currentPlayer = "W";

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const port = 3000;

app.get("/", (req, res) => {
  res.render("index", {title: "Chess Game"});
});

// Backend me msg kiske kiske pass jayega wo ye decide kareg
io.on("connection", function(uniquesocket) {
  console.log("Connected");
  
  uniquesocket.on("disconnect", () => {
    console.log("Succesfully DISCONNECTED");
  })
})

server.listen(port, () => {
  console.log(`App is listening on ${port}`);
});
