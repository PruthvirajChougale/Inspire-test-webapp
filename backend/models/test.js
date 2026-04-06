import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    testId: {type:String, required: true, unique:true},
    title: {type: String, required: true},
    description: {type: String},
    duration: {type: Number, required: true},
    questions: {type: Number, required: true},
    status: {type: String, required: true, enum:['UPCOMING','LIVE','PAST'], default:'UPCOMING'}
});

const Test = mongoose.model('Test', testSchema);
export default Test;