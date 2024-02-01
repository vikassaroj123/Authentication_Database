const express = require('express');
const app = express();

app.get('/', (req,res) =>{
    console.log("Hello World.");
    res.send("This is home page.");
})

const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Code is running on this port:${PORT}`);
})