const express=require("express")
const dotenv=require('dotenv')
const cors=require('cors')

const app=express()


dotenv.config()
app.use(express.json())
app.use(cors())



app.use('/image',require('./Routes/fetchImage'))


const port=process.env.PORT
app.listen(port,()=>{
    console.log(`connected to http://localhost:${port}`);
})