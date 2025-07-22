const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/webhook", (req,res)=>{
    //Extract the payload from the incoming POST request
    const payload = req.body;

    //Log the received payload (you might want to process it in a more meaningful manner)
    console.log("Received whole payload:", payload);

    //Optionally send a response to the sender 
    res.sender(200).send("Webhook received success");
})

app.listen(port, ()=>{
    console.log(`Server is running on htttp://localhost:${port}`);
})