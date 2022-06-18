import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

// funções espiãs, saber se a função foi chamada
// spies - espiões
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
);

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {

    await expect(submitFeedback.execute({
      type: 'Bug',
      comment: 'Comment',
      screenshot: 'data:image/png;base64/test.jpg',
    })).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be able to submit feedback withou type', async () => {

    await expect(submitFeedback.execute({
      type: '',
      comment: 'Comment',
      screenshot: 'data:image/png;base64/test.jpg',
    })).rejects.toThrow();
  });

  it('should not be able to submit feedback withou comment', async () => {

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64/test.jpg',
    })).rejects.toThrow();
  });

  it('should not be able to submit feedback with invalid screenshot', async () => {

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Comment',
      screenshot: 'test.jpg',
    })).rejects.toThrow();
  });
});

// A responsabilidade do teste unitário não é testar as dependeências (email enviado, bd atualizado);
// O teste unitário deve testar apenas o conteúdo da função, sua regra de negócio;
// spies - espiões