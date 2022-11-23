
import mongoose from "mongoose";

const {Schema} = mongoose;

//------question model----

const questionModel = new Schema({
    questions : {type : Array, default : []},
    answers : {type : Array, default : []},
    createAt : {type : Date ,default : Date.now }
});
export const Questions = mongoose.model('Question',questionModel)