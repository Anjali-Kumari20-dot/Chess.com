# ♟️ Chess Game – Real-Time Multiplayer Chess

A dynamic, two-player chess game built using **Socket.IO**, **Node.js**, **Chess.js**, and **Vanilla JS/CSS**, with spectator mode support, drag-and-drop UI, and turn-based validation.

## 🚀 Features

- 🎮 Real-time multiplayer gameplay with synchronized board updates
- ⚙️ Role-based logic: automatic assignment of white, black, or spectator
- ✋ Drag-and-drop chess pieces with intuitive visual feedback
- 🔁 Turn-based move enforcement using `chess.js` validation
- 🌐 Spectator-friendly view that flips board for Black players
- 💬 Console messages for move debugging and invalid move detection
- 🧠 FEN-based board state syncing

## 🧱 Tech Stack

| Layer        | Technologies                            |
|--------------|-----------------------------------------|
| Frontend     | HTML, CSS, JS, Chess.js, GSAP           |
| Backend      | Node.js, Express.js, Socket.IO          |
| UI/UX        | Flexbox, Grid, Unicode piece rendering  |
| View Engine  | EJS                                     |

## 🖼️ UI Highlights

- Responsive 8x8 grid chessboard
- Light/dark square styling using calculated indices
- Unicode symbols for clear piece rendering
- Piece drag visuals and flipped board for Black player experience


## 🔌 How It Works

1. Players are auto-assigned roles on connection (`white`, `black`, or `spectator`)
2. Board is synced with `fen` strings using `chess.js`
3. Validated moves are broadcast via Socket.IO to all clients
4. Spectators passively view the game with no move privileges

## 🧪 Run Locally

# Clone the repo
git clone [https://github.com/Anjali-Kumari20-dot/Chess.com.git]

cd chess-game

# Install dependencies
npm install

# Run the server
node app.js

# Visit in browser
localhost:3000


## 🧩 Folder Structure
/public /styleSheets └── style.css /javaScript └── chessGame.js /views └── index.ejs app.js

Made with ❤️ by Anjali Kumari

