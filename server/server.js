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
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'TLU',
            version: '1.0.0'
        },
        servers: [{
            url: '/api/v1'
        }]
    },
    apis: ['./swagger/default.yaml', '/*.js']
};


const swaggerDocument = swaggerJsDoc(options);

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
app.use('/api/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1", itemRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users",userRouter);

/** For images and bundle.js */
app.use("/static", express.static("dist/static"));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../dist", "index.html"));
});
/** For index.html */
app.use("/*", express.static("dist"));

function listen(){
    app.listen(process.env.PORT || PORT, () => {
        console.log("Server started", PORT);
    });
}

app.use(express.static('dist'));

function migrate(){
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