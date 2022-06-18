import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbacksRepository } from "../feedbacks-repositories";

// Implementação das operações do banco de dados;
// Trocar no futuro o Prisma por qualquer outra implementação;
export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    // Operação de criação de feedback;
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      }
    });
  };
};