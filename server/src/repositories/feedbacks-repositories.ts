
// Camada de dados da minha aplicação
export interface FeedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

// Contrato. Diz para a aplicação as operações que podem ser realizadas no banco de dados;
// Ele não implementa as operações. 
export interface FeedbacksRepository {
  create: (data: FeedbackCreateData) => Promise<void>;
}