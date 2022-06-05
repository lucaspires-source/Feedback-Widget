import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

describe('Submit Feedback', () =>{
    it('should be able to submit a feedback', async () =>{
        const submitFeedbackUseCase = new SubmitFeedbackUseCase({create: async () =>{} }, {sendMail: async () => {}});

        await expect(submitFeedbackUseCase.execute({
            type:'bug',
            comment:"bugou demais",
            screenshot:'test.jpg'
        })).resolves.not.toThrow()
    })
})