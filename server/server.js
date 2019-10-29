const express = require('express');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;
const DB = require("./database.js");
const mongoose = require("mongoose");
const itemRouter = require("./item.router.js");
const userRouter = require("./user.router.js");
const authRouter = require("./auth.router.js");
const Item = require('./item.model');
const bodyParser = require('body-parser');

if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0-c7y2s.gcp.mongodb.net/test?retryWrites=true&w=majority`;

mongoose.connect(DB_URL)
    .then(()=>{
      console.log("Database access success!");
      migrate();
      listen();
    })
    .catch(err => {
      console.error("error happened", err)
    });

app.use(bodyParser.json());

app.use("/api/v1", itemRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users",userRouter);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

app.get('/items/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});

function listen(){
    app.listen(process.env.PORT || PORT, () => {
        console.log("Server started", PORT);
    });
}

app.use(express.static('dist'));

function migrate(){
    //deleteAllItems();
    Item.count({}, (err, x)=>{
        if(err) {
            console.log("Already had items, didnt save");
        }
        if(x > 0) return;
        saveAllItems();
        return x;
    });
}

function deleteAllItems(){
    Item.deleteMany( {}, (err, doc) => {
        if(err) {
            console.log(err);
        }
        console.log("Deleted all");
    })
}

function saveAllItems(){
    console.log("migrate started");
   const items = DB.getItems();
     items.forEach(item => {
         const document = new Item(item);
         document.save( (err => {
             if(err) {
                 console.log(err);
                 throw new Error("Something happened during save");
             }
         }));
 });
 console.log(items);
}