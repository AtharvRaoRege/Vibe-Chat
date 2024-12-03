const mongoose = require('mongoose')

const InterestSchema = new mongoose.Schema({
    holders:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    name:{
        type:String,
        required:true
    },
    popularity:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model('Interest', InterestSchema);