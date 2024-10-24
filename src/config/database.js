const mongoose = require('mongoose');
const connectDB =async()=>{
    await mongoose.connect
("mongodb+srv://nancygahlot:IiH9kRQCWm5dQ77o@devtinder.kuvpe.mongodb.net/Tinder");
}
module.exports=connectDB;