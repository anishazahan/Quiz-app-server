import mongoose from "mongoose";

export default async function connect(){

        mongoose.connect(`mongodb+srv://admin:<password>@quiz-app.7sxd5xk.mongodb.net/?retryWrites=true&w=majority`)
}