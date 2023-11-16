const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    console.log("working");
    res.send("Hello, World!");
})

app.listen(process.env.PORT || 8087, () =>{
    console.log("Listening............");
})