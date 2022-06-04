import { prisma } from './prisma';
import express from 'express';
import nodemailer from 'nodemailer'
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';


export const routes =  express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "90a72e93cdb127",
      pass: "ca27d152f55deb"
    }
  });

routes.post('/feedbacks', async (req, res) => {
    const { type,comment,screenshot} = req.body;
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository)
    await submitFeedbackUseCase.execute({type,comment,screenshot})

/*
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
*/
    return res.status(201).send()
})

