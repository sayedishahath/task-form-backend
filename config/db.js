const mongoose = require('mongoose');
const configureDB = (async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URI,)
        console.log('connected to db')
    }catch(err){
        console.log(err)
    }
})
module.exports = configureDB