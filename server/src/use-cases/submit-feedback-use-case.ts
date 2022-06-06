import { MailAdapter } from '../adapters/mail-adapter';
import { FeedbacksRepository } from '../repositories/feedbacks-repository';
interface SubmitFeedbackUseCaseRequest { 
    type: string;
    comment: string;
    screenshot?: string;
}


export class SubmitFeedbackUseCase {

    constructor (
       private feedbacksRepository: FeedbacksRepository,
       private mailAdapter: MailAdapter
    ) {}
    async execute(request: SubmitFeedbackUseCaseRequest) {
        const { type,comment,screenshot} = request;

        if (!type || !comment) { 
            throw new Error('type and comment are required');
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot
         })


        await this.mailAdapter.sendMail({
            subject: 'Novo Feedback',
            body:
            [
                '<div style="font-family: sans-serif; font-size:16px;">',
                `<p>Novo feedback de ${type}</p>`,
                `<p>${comment}</p>`,
                screenshot ? `<inmg src="${screenshot}" />` : null,
                '</div>'
            ].join('\n')
        })
}}