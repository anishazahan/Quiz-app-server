import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import { config } from 'dotenv';

//-----------application port---
const port = process.env.PORT || 5001;

import router from './router/route.js';



//-------mongodb connect--------

import connect from './database/connection.js';

const app = express();


//---middleware--
app.use(morgan ('tiny'));
app.use(cors());
app.use(express.json());
config();




///------routes------

app.use('/api',router)


app.get('/',(req,res)=>{
    try {
        res.json('get requst')
    } catch (error) {
        res.json(error)
    }
})

//-----start server only when we have valid connection---

connect().then(()=>{

    try {
        app.listen(port,()=>{
            console.log("server is running");
        })
        
    } catch (error) {
        console.log(" can't connect to the server")
    }

}).catch(error=>{
    console.log('Invalid database connection');
})

