import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "90a72e93cdb127",
      pass: "ca27d152f55deb"
    }
  });
export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({ 
            from:'Equipe <email@email.ocom>',
            to:'Lucas Ribeiro Pires <email@email.com>',
            subject,
            html: body
        })
    }
}

