import fastify from "fastify";
import { connectDatabase } from "./config/db.js";
import { appEnv } from "./config/env.js";


const server = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
      options: {
        colorize: true,
      },
    },
  },
});

await connectDatabase();

server.listen({ port: appEnv.PORT, host: "0.0.0.0" }, (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
