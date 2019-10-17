const express = require('express');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const DB = require("./database.js");
const mongoose = require("mongoose");
require('dotenv').config();

var kittySchema = mongoose.Schema({
  name: String
});

var Kitten = new mongoose.model('Kitten', kittySchema);

const kitten1 = new Kitten({
  name: "red cat"
});


const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-c7y2s.gcp.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(DB_URL)
    .then(()=>{
      console.log("Database access success!");
      kitten1.save( err => {
        if(err){
          console.error("We have an error")
        } else {
          console.log("Saved")
        }
      })
    })
    .catch(err => {
      console.error("error happened", err)
    });

app.get("/api/items", (req, res) => {
  res.json(DB.getItems());
});

app.get("/api/items/:itemId", (req, res ) => {
  res.send(DB.getItem(req.params.itemId));
});

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get('/items/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.use(express.static('dist'));

// Heroku needs process.env.PORT
app.listen(process.env.PORT || PORT, () => {
  console.log("Server started", PORT);
});
