const express = require('express');
const port = 8003;
const db = require('./config/mongoose');
const path = require('path');
const register = require('./model/Admin/register');
const app = express();

app.use(express.urlencoded());
app.use("/admin", require("./routes/API/V1/admin/admin"));
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port, (err) => {
    if (err) {
        console.log('something wrong')
    }
    console.log('connected on port', port);
})