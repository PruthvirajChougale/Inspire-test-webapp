import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    userId : { type: String, required: true, unique: true },//insted batchId??? so that we can work easily and with objectId only
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Student', 'Admin'], required: true ,default:'Student'},
});

const User = mongoose.model('User', userSchema);
export default User;