const express = require('express');
const mongoose = require('mongoose');
//const mongoURI = require('/mongoURI');
const app = express();
const PORT =process.env.PORT || 3000;

const mongoURL = 'mongodb://atlas-sql-65cf911eec7dbc3a68375415-jzkfd.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin';

 async function connectToMongoDB() {
    try{

        await mongoose.connect(mongoURL);
        console.log('connected to MonogoDB Successfully');
     }
     catch (error){
        console.error('Error Connection to MonogoDB :' , error.message);

     }
     }

     connectToMongoDB();
     app.get("/",(req , res) =>{

res.send('Hello  I Have Successfully Completed 16 Day challange Connect to MonogoDB')
     });
     app.listen(PORT,()=>{
        console.log(`Server is running on port http://localhost:${PORT}`);
         })