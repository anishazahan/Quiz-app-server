import { Router } from "express";
const router = Router();

////---------questions routes--------

router.get('/questions',(req,res)=>{
    res.json('questions api get requst')
})



export default router;