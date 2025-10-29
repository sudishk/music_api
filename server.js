const dotenv = require('dotenv');
dotenv.config()
const express = require("express");
const app = express();


app.get("/api/user", (request, response)=>{
    response.status(200).json({name: "Sudish", email: "sk@gmail.com", id : 1});
});

app.listen(4000, (error)=>{
    if(error) console.log("Error "+ error);
    console.log("Server is running on port " +process.env.PORT ||3000 );
})
