// const express = require("express");
// const { createServer } = require("node:http");
// const join = require("node:path");
// const { Server } = require("socket.io");

// const app = express();
// const server = createServer(app);
// const io = new Server(server);
// app.use(express.static(__dirname));


// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// io.on("connection", (socket) => {
//   console.log("Connection established");
//   socket.on("chat message", (msg) => {
//     console.log('received message', msg);
//     io.emit("chat message", msg);
//   });

//   socket.on('disconnect', ()=>{
//     console.log('User Disconnected!');
//   })
// });

// const port = process.env.PORT || 5011;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const path = require("path");

const app = express();
const server = createServer(app);
const io = new Server(server);

// Serve static files
app.use(express.static(__dirname)); // Makes index.html and any JS/CSS available

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

io.on("connection", (socket) => {
  console.log("Connection established");

  socket.on("chat message", (msg) => {
    console.log("Received message:", msg);
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const port = process.env.PORT || 5011;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
