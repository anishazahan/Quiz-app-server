import Questions from "../models/questionSchema.js"
import Results from "../models/resultSchema.js"
import { questions, answers} from '../database/data.js'


//---------get all question-----

export async function getQuestions(req,res){
    try {
      const ques = await  Questions.find()
      res.json (ques)
    } catch (error) {
        res.json({error});
    }
}

//---------insert all question-----

export async function insertQuestions (req,res){
    try {
        Questions.insertMany({ questions, answers },function(err,data){
            res.json({ msg : 'Data Saved Successfully...!'})
        } )
       
      } catch (error) {
          res.json({error});
      }
}

///--------delete all questions--------

export async function dropQuestions(req,res){
   try {
       await  Questions.deleteMany()
       res.json({ msg : " Questions Deleted Successfully...!"})

    } catch (error) {
            res.json({error});
    }
}



///--------get  all result--------

export async function getResult(req,res){
    try {
        const result = await Results.find()
        res.json(result);
        
    } catch (error) {
        res.json({error})
    }
}
///--------post  all result--------

export async function storeResult(req,res){
    res.json('store result with post api')
}
///--------delete all result--------

export async function dropResult(req,res){
    res.json('drop result with delete api')
}