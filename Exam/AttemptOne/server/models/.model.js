const mongoose = require('mongoose');

const ExamSchema = mongoose.Schema(
    {

    },
    {
        timestamps: true,
    },

);

const Exam = mongoose.model('Exam', ExamSchema);

module.exports = Exam;