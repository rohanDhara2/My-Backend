import mongoose from 'mongoose'
import { DB_NAME } from './constants';
import express from 'express'

const app = express()

;(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error) => {
        console.log("ERRR:",error);
       })
       
    } catch (error) {
        console.error("Error :",error)
    }
})()