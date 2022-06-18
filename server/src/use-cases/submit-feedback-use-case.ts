import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repositories";

// Camada que lida com a regra de negócio da aplicação;
interface SubmitFeedbackCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
};

export class SubmitFeedbackUseCase {
  // salvando feedback no banco de dados e enviando email
  // inversão de dependências
  // nao depende diretamente do PRISMA
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) { };

  async execute(request: SubmitFeedbackCaseRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback recebido',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        `</div>`,
      ].join('\n')
    });
  };
};

// 1h17 salvando feedback no banco de dados. Explicando como seria sem o SOLID.