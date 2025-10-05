const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Student name is required'],
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'Student age is required'],
        min: [0, 'Age cannot be negative']
    },
    course: {
        type: String,
        required: [true, 'Course is required'],
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
