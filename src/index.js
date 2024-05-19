//require('dotenv').config({path: './env'}) //This syntax is ok but there is problem on code inconsistency
import dotenv from 'dotenv'
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})

connectDB()

/*
;(async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error) => {
        console.log("ERRR:",error);
       })

       app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
       })
       
    } catch (error) {
        console.error("Error :",error)
    }
})()

*/