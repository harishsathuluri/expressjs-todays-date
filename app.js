const express = require("express");
const app = express();

app.get("/", (request, response) =>{
    let date = new Date();
    response.send(`${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear}`);
})

module.exports = app;
app.listen(3000)