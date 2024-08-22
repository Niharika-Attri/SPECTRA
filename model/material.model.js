const mongoose = require('mongoose')

const materialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true  
    },
    url: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        enum: ["BCSE","BCSE - 503", "BCSE - 504", "BCSE - 505", "BCSE - 506", "BCSE-502L", "BCSE-504L", "BCSE-506L","BET-I", "BHUM-118", "BMAT-003C", "BMAT-003CL", "PR-I"]
    },
    teacher: {
        type: mongoose.Schema.ObjectId,
        ref: 'teachers'
    }
})

const studentModel = new mongoose.model('student', studentSchema);
module.exports = { studentModel };