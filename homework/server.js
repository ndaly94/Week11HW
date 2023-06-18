require('dotenv').config();
const express = require('express');
const app = require('./app')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => console.log('mongoose dat boy'))


app.listen(PORT, () => {
    console.log(`${PORT} CHAINZ`)
})