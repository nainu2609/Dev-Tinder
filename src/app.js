const express = require('express');
const connectDB=require('./config/database');
const app = express();
const User=require('./models/user');
app.post('/signup',async (req,res)=>{
    const user= new User({firstName: "Nancy",
        lastName: "Gahlot",
        emailId:"nancygahlot@gmail.com",
        password:"nancy@123"});
        try{
            await user.save();
            res.send("data added suceessfully");
        }
        catch(err){
            res.status(400).send("error in saving the user",err.message);
        }
        
});
connectDB()
.then(()=>
    {
    console.log("create a database connection");
    app.listen(3000, () => {
        console.log("server is listening on port 3000");
    });
    
}).catch((err)=>{
    console.error("not connected");
});
