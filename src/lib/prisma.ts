import { PrismaClient } from "@prisma/client";

// Évite de recréer une nouvelle instance de PrismaClient à chaque
// rechargement à chaud en développement (hot reload), ce qui saturerait
// rapidement le nombre de connexions disponibles sur Neon.

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
