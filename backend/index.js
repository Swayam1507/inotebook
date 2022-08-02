const connectToDB = require('./db')
const mongoose = require('mongoose')
const express = require('express');
const cors = require('cors');

const app=express()
app.use(cors());
app.use(express.json());

connectToDB();

app.use("/api/auth",require("./routes/auth.js"))
app.use("/api/notes",require("./routes/notes.js"))
app.listen("80")