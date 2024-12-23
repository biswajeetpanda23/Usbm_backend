const mongoose = require("mongoose");
require("dotenv").config();

const connection =async()=>{
    try{
        const conn=await new mongoose.connect(process.env,MONGO_URL);
        console.log(`connected to MongoDB: ${conn.connection.host}`);
    }catch(error){
        console.log(`Error connectingto MongoDB: ${error.message}`);
        process.exit(1);
    }
};

module.exports =connection;
