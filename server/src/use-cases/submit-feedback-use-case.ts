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
  ) { };

  async execute(request: SubmitFeedbackCaseRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });
  };
};

// 1h17 salvando feedback no banco de dados. Explicando como seria sem o SOLID.