const express = require("express");
const app = express.Router();
const admincontroller = require("../../../../controller/API/V1/Admin/admincontroller");
const register = require("../../../../model/Admin/register");

app.post("/register", register.uploadimage, admincontroller.register);

app.get("/getdata", admincontroller.getdata);

app.delete("/deleterec/:id", admincontroller.deleterec);

app.put("/updatedata/:id", admincontroller.updatedata);

module.exports = app;
