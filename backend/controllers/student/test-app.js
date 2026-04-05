import mongoose from "mongoose";
const testSchema = new mongoose.Schema({
        message: String,
        timestamp: { type: Date, default: Date.now }
});
const TestApp = async(_,res) => {
    try{
        

        const TestModel = mongoose.model('ConnectionTest', testSchema);

        const testDoc = new TestModel({ message: "Atlas connection is live!" });
        const savedDoc = await testDoc.save();

        console.log("🚀 Data successfully inserted:", savedDoc);
        res.status(200).send("working");
    }
    catch(e){
        res.status(500).json({error:e.message});
    }
}

export default TestApp;