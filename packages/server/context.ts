// src/server/router/context.ts
import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

import { prisma } from "./db/client";

export const createContext = async (
  opts?: trpcExpress.CreateExpressContextOptions,
) => {
  const req = opts?.req;
  const res = opts?.res;

//   const session =
//     req && res && (await getServerSession(req, res, nextAuthOptions));

  return {
    req,
    res,
    // session,
    prisma,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createRouter = () => trpc.router<Context>();
