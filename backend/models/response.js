import mongoose from "mongoose";

const ResponseSchema = new mongoose.Schema({
    userId: {type:mongoose.Schema.Types.ObjectId, required:true, unique:true},
    testId: {type:mongoose.Schema.Types.ObjectId, required:true, unique:true},
    answers: [{
        questionDocId: {type:mongoose.Schema.Types.ObjectId, reuired:true, unique:true},
        submittedAnswer: {type:String},
        isCorrect: {type:Boolean, required:true},
        obtainedMarks: {type:Number, required: true}
    }],
    finalScore: {type:Number},
    submittedAt: {type:Date, default:Date.now}
});

const Response = mongoose.model("Response", ResponseSchema);
export default Response;