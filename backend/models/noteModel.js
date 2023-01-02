const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema({
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    title:{
        type:String,
        required:true,
        minlength:3
    },
    note:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('Note' , noteSchema)