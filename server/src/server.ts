import { prisma } from './prisma';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json())

app.post('/feedbacks', async (req, res) => {
    const { type,comment,screenshot} = req.body;
 const feedback = await prisma.feedback.create({
        data:{
             type,
            comment,
            screenshot,
        }
    })
    return res.status(201).json({data:feedback})
})

app.listen(PORT, () =>{
    console.log(`Server started on http://localhost:${PORT}`);
})


//Sqlite