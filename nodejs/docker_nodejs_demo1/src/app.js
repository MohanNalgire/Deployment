import express from 'express';
import {config} from 'dotenv';
import morgan from 'morgan';
import todoRoutes from './routes/todosroutes.js';
import connectDB from './config/db.js'

config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/', (req,res)=>{
    res.send("Welcone to my project")
})

app.use('/todos', todoRoutes)

app.listen(PORT, ()=>{
    connectDB()
    .then(()=>{
        console.log(`Applicaiton is running successfully on port:${PORT}`)
    })
    .catch(error=>{
        console.error('Mongodb error.')
    });
    
})