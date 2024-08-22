const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true  
    },
    rollno: {
        type: Number,
        required: true
    },
    subjects: [{
        type: String,
        enum: ["BCSE","BCSE - 503", "BCSE - 504", "BCSE - 505", "BCSE - 506", "BCSE-502L", "BCSE-504L", "BCSE-506L","BET-I", "BHUM-118", "BMAT-003C", "BMAT-003CL", "PR-I"]
    }],
    class: {
        type: String,
        enum: ["3F1", "3F2", "3F3"]
    },
    email: {
        type: String, 
        required: true
    },
    phone: {
        type: Number,
        validate: {validator: function(){

        }}
    }
})

const studentModel = new mongoose.model('student', studentSchema);
module.exports = { studentModel };