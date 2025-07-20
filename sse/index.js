const express = require("express");
const app = express();
const { join } = require("node:path");
const path = require("path");

app.get('/sse', (req, res)=>{
    //setup sse logic
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Cache-Control', 'no-cache');

    res.write('data: Welcome to Server sent event \n\n');

    const intervalId = setInterval(()=>{
      res.write(`data: Server Time ${new Date().toLocaleDateString()} \n\n`)
    }, 5000);

    req.on('close', ()=>{
      clearInterval(intervalId);
    })
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
