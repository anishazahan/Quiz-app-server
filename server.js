import express from 'express';
const app = express();


///------route------

app.get('/',(req,res)=>{
    try {
        res.json('get requst')
    } catch (error) {
        res.json(error)
    }
})