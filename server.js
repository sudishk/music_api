const dotenv = require('dotenv');
dotenv.config()
const express = require("express");
const db = require("./db");
const app = express();


app.get("/api/user", async(request, response)=>{
    const result =await db.query("SELECT * FROM users");
    response.status(200).json(result[0]);
});

app.listen(4000, (error)=>{
    if(error) console.log("Error "+ error);
    console.log("Server is running on port " +process.env.PORT ||3000 );
})
