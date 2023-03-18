import { createTRPCRouter } from "~/server/api/trpc";
import { cardRouter } from "~/server/api/routers/cardRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  cardRouter: cardRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
