import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv';
import router from './router/route';

const app = express();


//---middleware--
app.use(morgan ('tiny'));
app.use(cors());
app.use(express.json());
config();

//-----------application port---
const port = process.env.PORT || 5001;

///------routes------

app.use('/api',router)







app.get('/',(req,res)=>{
    try {
        res.json('get requst')
    } catch (error) {
        res.json(error)
    }
})

app.listen(port,()=>{
    console.log("server is running");
})