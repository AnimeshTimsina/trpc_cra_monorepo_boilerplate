import express from "express";
import cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext, createRouter } from "./context";
import { exampleRouter } from "./router/example";

const app = express();
app.use(cors());
const port = 8080;

const appRouter = createRouter()
  .merge("example.", exampleRouter)



export type AppRouter = typeof appRouter

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createContext,
  })
);



app.get("/", (_, res) => {
  res.send("Hello from server");
});

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
