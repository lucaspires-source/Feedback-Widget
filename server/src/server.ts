import { prisma } from './prisma';
import express from 'express';
import nodemailer from 'nodemailer'
const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json())

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "90a72e93cdb127",
      pass: "ca27d152f55deb"
    }
  });

app.post('/feedbacks', async (req, res) => {
    const { type,comment,screenshot} = req.body;
 const feedback = await prisma.feedback.create({
        data:{
             type,
            comment,
            screenshot,
        }
    })

    await transport.sendMail({ 
        from:'Equipe <email@email.ocom>',
        to:'Lucas Ribeiro Pires <email@email.com>',
        subject:'Novo feedback',
        html: [
            '<div style="font-family: sans-serif; font-size:16px;">',
            `<p>Novo feedback de ${type}</p>`,
            `<p>${comment}</p>`,
            '</div>'
        ].join('\n')
    })
    return res.status(201).json({data:feedback})
})

app.listen(PORT, () =>{
    console.log(`Server started on http://localhost:${PORT}`);
})




