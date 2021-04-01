const express = require('express');
const fs = require('fs');
const path = require("path");
var mysql = require('mysql');
const { basename } = require('path');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json())

const db = require("./models.js");

db.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });

  
require("./routes/routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});