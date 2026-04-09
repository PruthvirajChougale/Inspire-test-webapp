import mongoose from "mongoose";

//should be discussed

const QuestionSchema = new mongoose.Schema({
    testDocId: {type:mongoose.Schema.Types.ObjectId, required:true, unique:true},
    // questionId: {type:String, unique:true, required:true},
    questionNo: {type:Number, required:true},
    questionType: {type:String, enum:['Single correct','Multiple correct','Integer type','Numerical type']}, //required:true???
    questionText: {
        text: {type:String},
        img: {type:String}
    },
    options:[{
        label: {type:String, required:true, unique:true},
        valueText: {type:String},
        valueImage: {type:String}
    }],
    correctAnswer: {type:String, required:true},
    marks: {type:Number, required: true},
    avgTime: {type:Number},
    percentageCorrect: {type:Number}
});

const Question = mongoose.model('Question', QuestionSchema);
export default Question;