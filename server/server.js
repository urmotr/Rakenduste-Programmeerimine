const express = require('express');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const DB = require("./database.js");
const mongoose = require("mongoose");
const userRouter = require("./user.js");
require('dotenv').config();

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-c7y2s.gcp.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(DB_URL)
    .then(()=>{
      console.log("Database access success!");
      lister();
    })
    .catch(err => {
      console.error("error happened", err)
    });

app.use(userRouter);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get('/items/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

function lister(){
    app.listen(process.env.PORT || PORT, () => {
        console.log("Server started", PORT);
    });
}

app.use(express.static('dist'));

