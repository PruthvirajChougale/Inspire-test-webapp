import { createUser } from "../../models/users.js";
export const addUser = async(req,res) => {
    try{
        const {username, email, password, batchId} = req.body;
        const res = createUser(username, email, password, batchId);
        console.log(res);
        res.status(201);
    }
    catch(e){
        console.log(e);
        res.status(400);
    }
}