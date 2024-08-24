const mongoose = require('mongoose');
const { Schema } = mongoose;
const formSchema = new Schema({
    title: String,
    inputs: [
        {
          formType:String,
          label:String,
          placeholder: String,
          order: {
            type: Number,
            default: 0,
          },
        },
    ]
},{timestamps:true})
const FORM = mongoose.model('Form', formSchema);
module.exports = FORM;