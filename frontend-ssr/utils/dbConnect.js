<<<<<<< HEAD
const mongoose = require('mongoose');
// import mongoose from 'mongoose';
const connection = {};

// Prevent creating an Error about overwirte "user" model once compile
async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  const db = await mongoose.connect(process.env.DB_CONNECTION_LINK,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  connection.isConnected = db.connections[0].readyState;
  console.log(connection.isConnected, 'The database is connected');
=======
const mongoose=require("mongoose")
const connection={}
//Prevent creating an Error about overwirte "user" model once compile 
async function dbConnect(){
    if(connection.isConnected){
        return;
    }
    const db=await mongoose.connect(process.env.DB_CONNECTION_LINK,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        connection.isConnected=db.connections[0].readyState;
        console.log(connection.isConnected, "The database is connected");
>>>>>>> 03137ef...  Adding routes for login, register, check and a middleware to check the jwt token
}

export default dbConnect;
