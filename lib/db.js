'use strict'

const mongoose = require('mongoose');

const {
    DB_USER,
    DB_PASSWD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env

let database

mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, 
    { useNewUrlParser: true, useUnifiedTopology: true })

database = mongoose.connection

database.on('error', (error) => {
    console.error(error, 'connection error')
})

database.once('open', () => {
    console.log('database synced!')
})

module.exports = database
