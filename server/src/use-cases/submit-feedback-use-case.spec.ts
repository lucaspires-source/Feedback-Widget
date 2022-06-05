import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedbackUseCase = new SubmitFeedbackUseCase({create:createFeedbackSpy }, {sendMail: sendMailSpy});
describe('Submit Feedback', () =>{
    it('should be able to submit a feedback', async () =>{
       

        await expect(submitFeedbackUseCase.execute({
            type:'BUG',
            comment:"bugou demais",
            screenshot:'data:image/jpeg;base64,test.jpg'
        })).resolves.not.toThrow()


        expect(createFeedbackSpy).toHaveBeenCalled()
        expect(sendMailSpy).toHaveBeenCalled()
    })



    it('should not be able to submit a feedback without a type', async () =>{
       

        await expect(submitFeedbackUseCase.execute({
            type:'',
            comment:"bugou demais",
            screenshot:'data:image/jpeg;base64,test.jpg'
        })).rejects.toThrow()
    })


    it('should not be able to submit a feedback without a comment', async () =>{
    
        await expect(submitFeedbackUseCase.execute({
            type:'BUG',
            comment:"",
            screenshot:'data:image/jpeg;base64,test.jpg'
        })).rejects.toThrow()
    })


    it('should not be able to submit a feedback with a invalid screenshot url', async () =>{
    
        await expect(submitFeedbackUseCase.execute({
            type:'BUG',
            comment:"",
            screenshot:'test.jpg'

        })).rejects.toThrow()
    })
})