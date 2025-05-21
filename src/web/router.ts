import { validateShortUrlFromRequest } from "@/helpers/short-url.helper.js";
import type { FastifyInstance } from "fastify";
import AppController from "./controller.js";

export default function appRouter(fastify: FastifyInstance) {
  fastify.get("/", async (request, reply) => {
    return { message: "Olá, mundo!" };
  });

  fastify.route({
    method: "GET",
    url: "/:shortUrl",
    preValidation: validateShortUrlFromRequest,
    handler: AppController.redirect,
  });
}
