// criando novo feedback

import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  // log das operações sendo realizadas
  log: ['query']
}); 